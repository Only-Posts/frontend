<template>
<div id="bg">
  <div id="backline"></div>
  <div id="menu">
    <div id="bars">
      <div id="upBar">
        <div id="profile"></div>
        <div id="time"></div>
        <div id="theme"></div>
        <div id="help"></div>
      </div>
    <div id="lang"></div>
  </div>
  <div id="dscr"></div>
  </div>
  <div id="post"></div>
</div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped>
#bg{
  /*Расположение самого элемента*/
  height: 100vh;
  min-width: 1000px;
  min-height: 600px;
  margin: 0;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 1fr 4fr 9fr;
  grid-template-rows: 1fr;

  /*Стиль элемента*/
  color:white;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/mainBG.png");
  background-position: center;
  background-color: #1c1c1c;
}
#backline{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 1;
  margin: 30px 23px;
  height: 90%;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  border-radius: 30px;
  background-color: rgb(115,30,82);
}

#menu{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1 / 3;
  margin: 25px 10px;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;

  /*Стиль элемента*/
  background: rgba(251,251,251,0.12);
  backdrop-filter: blur(18px);
  border-radius: 30px;
  TODO: проверить как будет выглядеть на чистовике склееные блоки
}

#bars{
  /*Расположение самого элемента*/

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-rows: 5fr 1fr;
  grid-template-columns: 1fr;

  /*Стиль элемента*/
}

#upBar{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 70px);

  /*Стиль элемента*/

}

#lang{
  /*Расположение самого элемента*/
  grid-row: 2;
  grid-column: 1;

  /*Расположение внутри элемента*/
  display: grid;


  /*Стиль элемента*/
  background-color: white;
}

#profile{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  background-color: white;
}

#time{
  /*Расположение самого элемента*/
  grid-row: 2;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  background-color: blue;
}

#theme{
  /*Расположение самого элемента*/
  grid-row: 3;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  background-color: white;
}

#help{
  /*Расположение самого элемента*/
  grid-row: 4;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  background-color: blue;
}

#dscr{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 2;
  height: 100%;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
}

#post{
  /*Расположение самого элемента*/
  grid-column: 3;
  grid-row: 1;
  margin: 25px 50px 25px 50px;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  border-radius: 30px;
  background: rgba(251,251,251,0.12);
  backdrop-filter: blur(18px);
}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->