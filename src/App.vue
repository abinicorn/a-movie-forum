<!-- App.vue component is the parent component of the entire application -->
<template>

  <div id="app">
    <div id="nav">
      <!-- routerlink is the component for enabling user navigation-->
      <!-- With SPA, it fetches only the data that needs to be fetched-->
      <router-link to="/" class="theme"> <h1>A Movie Forum</h1></router-link>
      <!-- navigate to the responding route with its name by Vue router link -->
      <router-link :to="{ name: 'MovieList'}" class="path">Recommended Movies</router-link> |
      <router-link :to="{ name: 'CreateMovie'} " class="path">Create New Movie</router-link> |
      <router-link :to="{ name: 'About'} " class="path">About Me</router-link>
    </div> 

    <!-- a placeholder for the route's component-->
    <router-view></router-view>
  </div>
</template>


<!--For CSS Style-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

body{
  margin:0;
  background:linear-gradient(-90deg, rgb(82, 127, 195), #e9d0cc);
}

#nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-bottom:25px;
  height: 120px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a:hover {
  color: #4293b9;
}


button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(-90deg, rgb(82, 127, 195), #dbdada);
  color: #163f68;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}

button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}

input[type=text] {
  padding: 0px 10px;
}


input:focus {
  border-color: #1693c0;
  outline: 0;
}


</style>
