<template>
<div id="bg">
  <div id="backline"></div>
  <div id="menu">
    <div id="bars">
      <div id="upBar">
        <div id="profile">
          <img src="../assets/icons/profileIC.png" @click="say()">
        </div>
        <div id="time">
          <img src="../assets/icons/historyIC.png" @click="say()">
        </div>
        <div id="theme">
          <img src="../assets/icons/themeIC.png" @click="say()">
        </div>
        <div id="help">
          <img src="../assets/icons/helpIC.png" @click="say()">
        </div>
      </div>
    <div id="lang">
      <img src="../assets/icons/ruIC.png"  @click="say()">
    </div>
  </div>
  <div id="dscr"></div>
  </div>
  <form id="post" @submit.prevent="makePost">
    <textarea></textarea>
    <div id="buttons">
      <div id="media"></div>
      <button id="submit" type="submit">Опубликовать</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "MainPage",
  methods: {
    say: function(){
      console.log('hi')
    }
  }
}
</script>

<style scoped>
#bg{
  /*Расположение самого элемента*/
  height: 100vh;
  min-width: 1080px;
  min-height: 600px;
  margin: 0;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: 1fr;

  /*Стиль элемента*/
  color:white;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/backgrounds/mainBG.png");
  background-position: center;
  background-color: #1c1c1c;
}
#backline{
  /*Расположение самого элемента*/
  grid-column: 1/2;
  grid-row: 1;
  margin: 58px 5px 58px 40px;
  max-width: 60px;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  border-radius: 30px;
  background-color: rgb(95,30,82);
}

#menu{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1 / 7;
  margin: 50px 20px;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;

  /*Стиль элемента*/
  background: rgba(212,151,188,0.13);
  backdrop-filter: blur(18px);
  border-radius: 30px;
}

#bars{
  /*Расположение самого элемента*/
  margin-top: 20px;
  margin-left: 2px;
  max-width: 95px;
  min-width: 60px;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-rows: 5fr 1fr;
  grid-template-columns: 1fr;

  /*Стиль элемента*/
  /*background: #1c1c1c;*/
}

#upBar{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1;


  /*Расположение внутри элемента*/
  display: grid;
  justify-items: center;
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
  margin-bottom: 10px;
  justify-items: center;
  align-items: end;


  /*Стиль элемента*/
}

#profile{
  /*Расположение самого элемента*/
  grid-row: 1;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
}

#time{
  /*Расположение самого элемента*/
  grid-row: 2;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
}

#theme{
  /*Расположение самого элемента*/
  grid-row: 3;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
}

#help{
  /*Расположение самого элемента*/
  grid-row: 4;
  grid-column: 1;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
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
  grid-column: 7/100;

  grid-row: 1;
  margin: 50px 75px;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-rows: 7fr 1fr;
  grid-template-columns: 1fr;

  /*Стиль элемента*/
  border-radius: 30px;
  background: rgba(212,151,188,0.13);
  backdrop-filter: blur(18px);
}

textarea{
  /*Расположение самого элемента*/
  margin: 35px;

  /*Расположение внутри элемента*/

  /*Стиль элемента*/

  background: #ffffff;
  border-radius: 20px;
  outline: none;
  resize: none;
  padding: 10px;
}

#buttons{
  /*Расположение самого элемента*/
  grid-row: 2;
  grid-column: 1;

  /*Расположение внутри элемента*/
  display:grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: 1fr;

  /*Стиль элемента*/
}

#media{
  /*Расположение самого элемента*/


  /*Расположение внутри элемента*/


  /*Стиль элемента*/
}

#submit{
  /*Расположение самого элемента*/
  grid-column: 30;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->