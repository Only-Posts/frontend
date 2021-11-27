<template>
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
    <div id="h1">Что такое ONLYPOSTS?</div>
    <div id="main">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lorem odio. Sed luctus est odio, eget malesuada orci venenatis sed. Etiam mollis sollicitudin consectetur.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse scelerisque volutpat sodales.</p>
    </div>
  </div>
  <div id="grayLine"></div>
  <div id="animation"></div>
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
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-image: url("../assets/startBG.png");*/
  /*background-position: center;*/
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
  margin: 10px;
  /*Стиль элемента*/
  text-align: center;
  font-size: 1.5em;
}

#main{
  /*Расположение самого элемента*/
  margin: 10px;
  /*Стиль элемента*/
}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->