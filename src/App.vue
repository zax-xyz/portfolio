<template lang="pug">
#app
  Home
  router-view
</template>

<script>
import Home from "@/components/header/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #575c6a black;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: black;
}

::-webkit-scrollbar-thumb {
  border: 1px solid black;
  background-color: #575c6a;
  border-radius: 2px;
}

body {
  margin: 0;
}

#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
