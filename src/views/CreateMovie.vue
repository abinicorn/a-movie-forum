<template>
    <h1>Show your favorite movie :)</h1>
    <div class="form-container">
        <!-- ".prevent" protects that the page won't refresh when we submit the form -->
        <!-- when the form is submitted, createMovie() will be triggered and will dispatch the action-->
        <form @submit.prevent="createMovie" >
                <h3>The movie's Information</h3>
                
                <!-- use v-model directive to create two-way binding on the movie data-->
                <label>Name</label>
                <input v-model="movie.title" type="text" placeholder="Name">

                <label>When was the movie made? (Year):</label>
                <input v-model="movie.time" type="text" placeholder="Time" />
                
                <label>Your favorite lines in the movie:</label>
                <input v-model="movie.quote" type="text" placeholder="Lines"/>

                <label>Introduction:</label>
                <input v-model="movie.content" type="text" placeholder="This movie is about...."/>

                <h3>An image about the movie:</h3>
                <label>The Url of the image (right click on the image & copy its address):</label>
                <input v-model="movie.image" type="text" placeholder="URL"/>

                <button type="submit">Submit</button>
        </form>
    </div>

</template>>



<script>

export default {
    data(){
        return{
            //calling the newMovieObject() method
            movie: this.newMovieObject()
        }
    },
    methods:{
        createMovie(){
            //retrieve and dispatch the action
            this.$store.dispatch('createMovie', this.movie).then(() => {
                //takes in the route of the movie just created
                this.$router.push({
                    name: 'MovieIntro',
                    params: { id: this.movie.id}
                })
                //when successfully creating, clear out the user's input
                this.movie=this.newMovieObject();
            }).catch (err => {
                console.log("Oops, something went wrong :(");
                console.log(err);
            });
        },
        //when calling the method, it'll return the object for the movie data
        newMovieObject(){
            // retrieve the user within vuex state
            const user=this.$store.state.user;
            //create random Id for each movie
            const id=Math.floor(Math.random()*10000);    
            //return a movie object   
            return{
                id: id,
                user: user,
                title:'',
                time:'',
                content: '',
                quote:'',
                image:'',
            }
        }
    }
};


</script>

<style scoped>

input {
    width:100%;
    height:25px;
}

.form-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
}
</style>