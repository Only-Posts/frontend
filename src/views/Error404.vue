<template>
  <div id="bg">
    <div id="text">Error 404</div>
  </div>
</template>

<script>
export default {
  name: "Error404"
}
</script>

<style scoped>
#bg {
  /*Расположение самого элемента*/
  height: 100vh;
  min-height: 600px;
  margin:0;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);

  /*Стиль элемента*/
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/backgrounds/authBG.png");
  background-position: center;
}
#text{
  color:white;
}
</style>