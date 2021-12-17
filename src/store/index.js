import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state() {
        return {
            status: '',
            user: {}
        }
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, user){
            state.status = 'success'
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
        }
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST' })
                    .then(resp => {
                        // const msg = resp.data.message
                        const status = resp.data.status
                        if (status == "success") {
                            commit('auth_success', user)
                            this.$router.push('/main')
                        }
                        else {
                            commit('auth_error', user)
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:8080/user/signup', data: user, method: 'POST' })
                    .then(resp => {
                        // const msg = resp.data.message
                        const status = resp.data.status
                        if (status == "success") {
                            commit('auth_success', user)
                            this.$router.push('/main')
                        }
                        else {
                            commit('auth_error', user)
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        }
    },
    getters: {
        authStatus: state => state.status,
    }
});

export default store;