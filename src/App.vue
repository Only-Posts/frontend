<template>
  <StartPage/>
<!--  <AuthorizationWindow/>-->
</template>

<script>
// import AuthorizationWindow from "@/components/AuthorizationWindow.vue";
import StartPage from "@/components/StartPage";

export default {
  name: 'App',
  components: {
    StartPage
    // AuthorizationWindow
  }
}
</script>

<style>
body{
  margin: 0;
  height: 100vh;
  background: #0c0c0c;
}
</style>
