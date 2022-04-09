import { createStore } from 'vuex';
import Service from '../services/Service.js'


//initialize the store
export default createStore({
    // have acess to the state from any component
    state: {
        user: { 
        id: '111', 
        name:'Unicorn'
        },
        movies: []
    },
    // use mutations to update/mutate state
    mutations:{
        //ALL IN CAPS
        //take in the state & Movie as the payload
        ADD_MOVIE(state, movie){
            state.movies.push(movie);
        }
    },
    //actions are asynchronous & wrap business logic around mutations
    actions:{
        //take commit from the context object & movie as the payload
        createMovie({commit},movie){
            //post new movie data to the mock database
            return Service.postMovie(movie).then(() => {
                //wait for the response to return
                //commit ADD_MOVIE mutations and pass the movie payload
                commit('ADD_MOVIE', movie);
            });

        }
    }
});
