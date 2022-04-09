<template>
    <div class="movies">
        <!-- v-for loops over all movie data into the MovieCard component-->
        <!-- :movie="movie" means binding the movie attribute/prop to the movie data, so that data can be passed to MovieCard, the child component-->
        <MovieCard v-for=" movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<script>
//import child components to use
import MovieCard from "../components/MovieCard.vue";
import Service from '../services/Service.js';

export default {

    name:"Home",
    components:{
        MovieCard
    },
    data(){
        return{
            movies: null
        }
    },
    // To trigger the API Call when the component is created
    //Called after the instance has finished processing all state-related options.
    created(){
        //get all movie data 
        Service.getMovies()
        .then(reponse => {
            this.movies=reponse.data
        })
        .catch(err => {
            console.log(err);
        })

    }
}
</script>

<style scoped>
.movies {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>