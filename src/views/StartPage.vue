<template>
  <link href='http://fonts.googleapis.com/css?family=Monoton' rel='stylesheet' type='text/css'>
<div id="bg">
  <div id="upLine">ONLYPOSTS</div>
  <div id="buttons">
    <button id="signUp" @click="$router.push('/auth/signIn')">
      Зарегистрироваться
    </button>
    <button id="logIn" @click="$router.push('/auth/logIn')">
      Войти
    </button>
  </div>
  <div id="dscr">
    <div id="h1">Сервис постинга и автопостинга</div>
    <div id="main">
      <p class="text">Упростите ежедневную работу, пользуйся нашим сервисом для автоматической публикации поств в различные социальные сети.</p>
      <div class="block">
        <img src="../assets/icons/tick.png">
        <div>
          <p class="h2">Понятная навигация</p>
          <p class="text">С нашей продуманной навигацией разберется любой пользователь.</p>
        </div>
      </div>
      <div class="block">
        <div>
      <p class="h2">Автопостинг</p>
      <p class="text">Загрузи посты в сервис и они опубликуются в заданное время без твоего участия.</p>
        </div>
        <img src="../assets/icons/ding.png">
      </div>
    </div>
  </div>
  <div id="grayLine"></div>
  <div id="animation">
    <div id="ani">
      <div id="inner">
        <p id="error">O<span>N</span>LY</p>
        <p id="code">P<span>O</span><span>S</span><span>TS</span></p>
      </div>
    </div>
  </div>
  <div id="downLine"></div>
</div>
</template>

<script>
export default {
  name: "StartPage",
}
</script>

<style scoped>
#bg {
  /*Расположение самого элемента*/
  height: 100vh;
  margin:0;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 6fr 8fr;
  grid-template-rows: 1fr 13fr 1fr;

  /*Стиль элемента*/
}

#upLine, #downLine, #grayLine{
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
  margin-left: 4%;

  /*Стиль элемента*/
  border-top: solid 4px #661c49;
}

#grayLine{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 3;

  /*Стиль элемента*/
  border-top: solid 4px #1c1c1c;
}

#buttons{
  /*Расположение самого элемента*/
  margin-right: 3%;
  grid-column: 2;
  grid-row: 1;

  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  justify-items: end;
  align-items: end;
  /*Стиль элемента*/
}

#logIn, #signUp{
  height: 35px;
}

#signUp{
  /*Расположение самого элемента*/
  margin-right: 10px;
  grid-column: 5;
  /*Расположение внутри элемента*/

  /*Стиль элемента*/
  width: 155px;
}

#logIn{
  /*Расположение самого элемента*/
  grid-column: 6;
  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  margin-left: 10px ;
  width: 75px;
}

#dscr{
  /*Расположение самого элемента*/
  margin-top: 4%;

  /*Расположение внутри элемента*/


  /*Стиль элемента*/
  color:white;
  background-color: #1c1c1c;
}

#h1{
  /*Расположение самого элемента*/
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: "Roboto Thin";
  /*Стиль элемента*/
  text-align: center;
  font-size: 2.4em;
}
.h2{
  /*Расположение самого элемента*/
  margin: 30px 0px;
  /*Стиль элемента*/
  font-family: "Segoe UI";
  text-align: center;
  color:lightgray;
  font-size: 2em;
}

.text{
  /*Расположение самого элемента*/
  margin: 30px 0px;
  /*Стиль элемента*/
  font-family: "Segoe UI (Light)";
  text-align: justify;
  color:gray;
  font-size: 1.3em;
}
.block{
  display: flex;
}

#main{
  /*Расположение самого элемента*/
  margin: 10px;
  /*Стиль элемента*/
}

#ani {
margin-top: 50px;
position: relative;
  padding: 40px;
  font-size: 160px;
  font-family: 'Monoton', cursive;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 80px #AE1238,0 0 30px #9B082C,0 0 6px #730620;
  color: #9C4D7E;
}
#ani p { margin:0; }

#error {
  color: #E8E8E8;
  text-shadow: 0 0 80px #F1DBE0,0 0 30px #D892A2,0 0 6px #C04D69;
}
#error span {
  animation: upper 11s linear infinite;
}
#code span:nth-of-type(2) {
  animation: lower 10s linear infinite;
}
#code span:nth-of-type(1) {
  text-shadow: none;
  opacity:.4;
}
@keyframes upper {
  0%,19.999%,22%,62.999%,64%, 64.999%,70%,100% {
    opacity:.99; text-shadow: 0 0 80px #F1DBE0,0 0 30px #D892A2,0 0 6px #C04D69;
  }
  20%,21.999%,63%,63.999%,65%,69.999% {
    opacity:0.4; text-shadow: none;
  }
}
@keyframes lower {
  0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; text-shadow: 0 0 80px #AE1238,0 0 30px #9B082C,0 0 6px #730620;
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% {
    opacity:0.4; text-shadow: none;
  }
}

#animation{
  grid-column: 2;
  grid-row: 2;
  display: grid;
  align-items: center;
}
</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->