<template>
  <div id="bg">
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

    export default {
      name: "AuthorizationWindow"
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

#main {
    /*Расположение самого элемента*/
    margin: 40px 0;
    min-width: 300px;
    max-width: 470px;
    border-radius:28px;
    grid-column: 2;
    grid-row: 1/4;

    /*Расположение внутри элемента*/
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    /*Стиль элемента*/
    background: rgba(251,251,251,0.12);
    backdrop-filter: blur(18px);
}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->


<!--TODO: сделать адаптивный дизайн, чтобы при уменьшении окна оно переходило в другой вид-->



