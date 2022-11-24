import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'

const storage = createStore({
    state: {
        isAuthenticated : false
    },
    mutations: {
        setAuthenticated(state, value){
            state.isAuthenticated = value;
        } 
    },
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
});

export default storage;