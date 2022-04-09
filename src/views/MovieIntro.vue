<template>
<!--v-if: conditional rendering-->
<!-- if the movie exists, the div will show-->
<div v-if="movie" class="movie-show">
            <div class="movie-container">
                <div class="movie-image">

                    <!-- v-bind: v-bind directive binds the src attribute to the image-->
                    <!-- v-bind: Dynamically bind an attribute to an expresision-->
                    <img v-bind:src="movie.image" >
                </div>
                <div class="movie-intro">

                    <!-- mustache syntax， allow to run valid JavaScript within HTML-->
                    <h1>{{movie.title}}</h1>
                    <h3><em>"{{movie.quote}}"</em></h3>
                    
                    <p>{{movie.content}}</p>
                    
                </div>

            </div>
            <!--Child component: MovieReview -->
            <MovieReview
                :reviews_wrapper_classes="['custom-scrollbar', 'reviews-wrapper']"
                :reviews="reviews"
                :current_user="current_user"
                @submit-review="submitReview"
            />

</div>

</template>

<script>
import Service from "../services/Service.js";
import MovieReview from "../components/MovieReview.vue";


export default {

    props: ["id"],
    components:{
        MovieReview
    },
    data() {
        return {
            movie: null,
            current_user: {
                avatar: 'https://via.placeholder.com/100x100/a65858',
                user: 'MovieFan'
            },
            reviews: null
        };
    },
    methods:{
        //the child component（MovieReview) uses $emit to listen to the submission happening
        // when  it happens, the submitReviews is called
        submitReview: function (reply) {
            const new_review = {
                "movie": this.id,
                "user": this.current_user.user,
                "avatar": this.current_user.avatar,
                "text": reply
            }
            //add to the reviews data
            this.reviews.push(new_review);
            //add to the database
            Service.postReviews(new_review);

        }

    },
    //created:Called after the instance has finished processing all state-related options.
    created() {
        //fetch movie by its id and set it to the local data
        Service.getMovie(this.id)
            .then(response => {
            this.movie = response.data;
        })
            .catch(err => {
            console.log(err);
        });
        //fetch reviews by the page id(movie id)
        Service.getReviews(this.id)
            .then(response => {
                this.reviews = response.data;
            })
            .catch(err => {
                console.log(err);
            })
        
    }
}

</script>

<style scoped>


h1 {
    font-size: 50px;
}

h3 {
    font-size: 25px;
}

img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

p {
    font-size: 22px;
}

.movie-show {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.movie-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.movie-image,
.movie-intro {
    width: 50%;
}

select {
    height: 40px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
}

textarea {
    width: 95%;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
}

@media only screen and (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}



</style>