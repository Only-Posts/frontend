import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state() {
        return {
            status: '',
        }
    },
    actions:{
        login({commit}, user){
            return new Promise((resolve, reject) => {
                axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST' })
                    .then(resp => {
                        // const msg = resp.data.message
                        const status = resp.data.status
                        if (status === "success") {

                            commit('auth_success', user)
                        }
                        else {
                            commit('auth_error', user)
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
                        // const msg = resp.data.message
                        const status = resp.data.status
                        if (status === "success") {
                            commit('auth_success', user)
                        }
                        else {
                            commit('auth_error', user)
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
        }
    },
    getters: {
        authStatus: state => state.status,
    }
});

export default store;