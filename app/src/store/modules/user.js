import axios from "axios"
import router from '@/router'
//import axios from 'axios' // importerar axios från axios
export default {
    state: {
      loggedIn: false
    },
    getters: {
      loggedIn: state => state.loggedIn
    },
    mutations: {
        LOGIN_USER: state => { // ändrar vårt state för loggedIn till true
            state.loggedIn = true
        },
        LOGOUT_USER: state => { // ändrar vårt state för loggedIn till false
            state.loggedIn = false
        }
    },
    actions: { 
        register: async ({dispatch}, _user) => { // skapar en registreringsfunktion med en ny användare som skapas genom vårt api
            const user = {  // en ny användare av email och lösenord 
                email: _user.email,
                password: _user.password
            }
            await axios.post('http://localhost:9999/api/users/register', _user)
            dispatch('login', {user}) // dispatchar en login funktion för att vara inloggad efter att ha registrerat user
        },
        login: ({commit}, {user, route}) => {
            axios.post('http://localhost:9999/api/users/login', user)
            .then(res => {
              if(res.status === 200) { // om vårt inlog går bra så commitar vi en LOGIN_USER via mutation som sätter state.loggedIn till true 
                commit('LOGIN_USER')
      
                if(route) {
                  router.push(route)
                } else {
                  router.push('/')
                }
              }
            })
          },
          logout: ({commit}) => {
            commit('LOGOUT_USER')
          }
        }
      }

