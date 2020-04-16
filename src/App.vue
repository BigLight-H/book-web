<!--<template>-->
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'App'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import("./assets/font/font.css");
  export default {
    name: 'App',
    created(){
      let now_time = new Date().getTime();
      let token_time = localStorage.getItem('book_login_token_time');
      if ((Number(now_time) - Number(token_time)) > 86400000) {
        localStorage.removeItem('book_login_token');
      }
    }
  }
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
  }
</style>
