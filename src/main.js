import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//A new Vue instance is created on calling a function createApp. 
//Options are passed to createApp function to configure the root component. 
//The root component is used as the starting point for rendering when we mount the application.
createApp(App)
.use(router)
.use(store)
.mount('#app');
