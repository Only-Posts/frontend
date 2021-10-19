<template>
<div id="bg">
  <div id="upLine">ONLYPOSTS</div>
  <div id="buttons">
    <button id="">Зарегистрироваться</button>
    <button>Войти</button>
  </div>
  <div id="dscr"></div>
  <div id="animation"></div>
  <div id="downLine"></div>
</div>
</template>

<script>
export default {
  name: "StartPage"
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
  grid-template-columns: 6fr 8fr;
  grid-template-rows: 1fr 13fr 1fr;

  /*Стиль элемента*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-image: url("../assets/startBG.png");*/
  /*background-position: center;*/
}

#upLine, #downLine{
  /*Расположение внутри элемента*/
  text-indent: 6%;
  display: grid;
  align-items: end;
  padding: 10px;


  /*Стиль элемента*/
  color: rgb(251,251,251);
  font-weight: bold;
}

#upLine{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 1;

  /*Стиль элемента*/
  border-bottom: solid 4px #661c49;
}

#downLine{
  /*Расположение самого элемента*/
  grid-column: 2;
  grid-row: 3;

  /*Стиль элемента*/
  border-top: solid 4px #661c49;
}

#buttons{
  /*Расположение самого элемента*/
  grid-column: 2;
  grid-row: 1;

  /*Расположение внутри элемента*/
  display: grid;
  justify-items: end;
  align-items: center;

  /*Стиль элемента*/
}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->