<template>
  <AuthorizationWindow>
    <div id="example">Example</div>
  </AuthorizationWindow>
</template>

<script>
import AuthorizationWindow from "@/components/AuthorizationWindow";

export default {
  name: 'App',
  components: {
    AuthorizationWindow
  }
}
</script>

<style>
body{
  margin: 0;
  height: 100vh;
  background: #0c0c0c;
}
#app {
  /*Расположение самого элемента*/
  height: 100vh;
  margin:0;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);

  /*Стиль элемента*/
  background-repeat: no-repeat;
  background-image: url("./assets/authBG.png");
  background-position: center;
}
</style>
