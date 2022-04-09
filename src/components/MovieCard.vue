<template>

  <!-- bind to a object & specify the name of the route to use -->
  <!-- to give MovieIntro access to the id param as a prop-->
  <router-link :to="{name: 'MovieIntro', params: { id: movie.id}}">
    <div class="movie-card">
      <h4>{{movie.title}} ({{movie.time}})</h4>
      <span>" {{movie.quote}} "</span>


    </div>
  </router-link>
</template>

<script>
export default{
  name:"MovieCard",
  //Props are variables waiting to be filled with the data its parent sends down into it.
  //have access to the movie data 
  props:{
    movie: Object
  }
};
</script>


<style scoped>

.movie-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.movie-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}


a {
  color: #0e3969;
  text-decoration: none;
}
</style>
