import axios from 'axios';

//an axios instance
const apiClient = axios.create({
    //baseUrl for all calls to use 
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})


export default {
    //for getting all the movie data
    getMovies(){
        // get all movies from the database
        return apiClient.get('/movies');
    },
    //for getting single movie value
    getMovie(id){
        return apiClient.get('/movies/'+id);
    },
    //for posting new movie data
    postMovie(movie){
        return apiClient.post('/movies/', movie);
    },
    //for getting reviews by the responding movie
    getReviews(movie){
        return apiClient.get('/reviews?movie='+movie);

    },
    //for posting new review
    postReviews(review){
        return apiClient.post('/reviews/', review);
    }
}