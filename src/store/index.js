import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state() {
        return {
            status: '',
            user: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    actions:{
        login({commit}, user){
            return new Promise((resolve, reject) => {
                axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST' })
                    .then(resp => {
                        const msg = resp.data.message
                        const status = resp.data.status
                        if (status === "success") {
                            commit('edit_user_data', user)
                            commit('auth_success')
                        }
                        else {
                            alert(msg)
                            commit('auth_error')
                        }
                        resolve(status)
                    })
                    .catch(err => {
                        commit('auth_error')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                axios({url: 'http://localhost:8080/user/signup', data: user, method: 'POST' })
                    .then(resp => {
                        const msg = resp.data.message
                        const status = resp.data.status
                        if (status === "success") {
                            commit('edit_user_data', user)
                            commit('auth_success', user)
                        }
                        else {
                            alert(msg)
                            commit('auth_error')
                        }
                        resolve(status)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        }
    },
    mutations: {
        auth_success(state) {
            state.status = 'success'
        },
        auth_error(state) {
            state.status = 'error'
        },
        edit_user_data(state, userdata){
            state.user.username = userdata.username
            state.user.email = userdata.email
            state.user.password = userdata.password
        }
    },
    getters: {
        authStatus: state => state.status,
        userData: state => state.user
    }
});

export default store;