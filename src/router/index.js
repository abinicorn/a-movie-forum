//import vue router 4
import {createRouter,createWebHistory } from 'vue-router'
import MovieList from '../views/MovieList.vue'
import About from '../views/About.vue'
import MovieIntro from '../views/MovieIntro.vue'
import CreateMovie from '../views/CreateMovie.vue'


const routes = [
    // path: url
    // name: name of the route
    // component: the component to render
    {path: '/', name: 'MovieList', component: MovieList},
    {path: '/about', name: 'About', component: About},
    {path: '/create', name: 'CreateMovie', component: CreateMovie},
    //:id is a dynammic segment & a placeholder for the actual id
    {path: '/movie/:id', name: 'MovieIntro', props:true, component: MovieIntro}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router