# 🎬Introduction 

This is a Vue.js based Project, which mainly uses Vue 3 to support. 

The project aims to explore Vue 3 in the following aspects: 

1. **Application Structure**
2. **Tool Support** 
3. **Routing**
4. **State Management**
5. **Deployment**

To achieve this, this project has set up a simple movie forum 🎬, which shows a list of different movies cards with basic introduction. Users can see different views by clicking onto different links & cards, and make reviews on each movie intro page. Users can also create a new movie by submitting a from of basic information, which could be shown on the page as well. 


# 💻Installation

To start this project, you need to type the following command in the terminal step by step:（Side note：You need to install [Node.js](https://nodejs.org/) and use [npm](https://www.npmjs.com/) ahead）

```
cd vue-project     
npm install
npx json-server --watch db.json
npm run dev

```

## Recommended Extension

**To see this project more clearly, the following extension are highly recommended for IDE Set up:**

1. [VSCode](https://code.visualstudio.com/)  (Recommended IDE)
2.  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (Language support for Vue 3)
3. [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) (Syntax highlighting in es6 multiline strings)

# 📚Basic Information of the Movie Forum



## Application Structure

A Vue application consists of a root Vue instance (App.vue) created with createApp function, optionally organized into a tree of nested, reusable components. The *App.vue* will be the root component consisting of other components as child components. 

This shows the project's general structure, which consists of a root component (App.vue) with all nested components. It could be referred to when you go through the codebase of the project:

![project-structure.png](vue-project/src/assets/project-structure.png)



## Tool Support

| **IDE Support**          | **[Visual Studio Code](https://code.visualstudio.com/)**     |
| ------------------------ | ------------------------------------------------------------ |
| **Project Scaffolding**  | **[Vite](https://vitejs.dev/)**                              |
| **Browser Devtools**     | [Vue Devtools](https://devtools.vuejs.org/)                  |
| **Database & API Calls** | [my-json-server](https://github.com/typicode/json-server)  +  [axios](https://axios-http.com/docs/intro) |
| **Custom Image Support** | [Placeholder](https://placeholder.com/)                      |
| **Deployment**           | [render](https://dashboard.render.com/)                      |



## Routing & State Management



1. **Routing Library**： [Vue Router](https://router.vuejs.org/)  （Client-side routing)

2. **State Manegement Library**: [Vuex](https://vuex.vuejs.org/)



## Deployment



To deploy this project on the website， [render](https://dashboard.render.com/) has been used and this project could also be seen here:





