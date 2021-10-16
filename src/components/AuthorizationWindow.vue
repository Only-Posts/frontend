<template>
    <div id="main">
        <div id="name">Авторизация</div>
        <div id="fields">
        <div id="login"></div>
        <div id="email"></div>
        <div id="password"></div>
        </div>
        <div id="enter"><button>Войти</button></div>
    </div>
</template>

<script>
    export default {
        name: "AuthorizationWindow"
    }
</script>

<style scoped>
#main {
    /*Расположение самого элемента*/
    margin: 50px;
    min-width: 652px;
    max-width: 660px;
    border-radius:28px;
    grid-column: 2;
    grid-row: 1/4;

    /*Расположение внутри элемента*/
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    /*Стиль элемента*/
    background: rgba(251,251,251,0.12);
    backdrop-filter: blur(20px);
}

#name{
    /*Расположение самого элемента*/
    grid-column: 1;
    /*margin: 50px 50px 10px 50px;*/ /*Возможно не нужно*/


    /*Расположение внутри элемента*/
    display: grid;
    align-items: end;
    justify-items: center;


    /*Стиль элемента*/
    /*background: #0c0c0c;*/ /*Возможно не нужно*/
    font-size: 2.5em;
    color:white;
}

#enter{
    /*Расположение самого элемента*/
    margin: 10px 50px 50px 50px;

    /*Расположение внутри элемента*/
    display: grid;
    align-items: start;
    justify-items: end;


    /*Стиль элемента*/

}

#enter > button{
    /*Стиль элемента*/
    background: #67204c;
    color: rgb(251,251,251);
    border-radius: 20px;
    border-style: none;
    width: 115px;
    height: 45px;

}

</style>

<!--Шаблон для css-->
<!--/*Расположение самого элемента*/-->


<!--/*Расположение внутри элемента*/-->


<!--/*Стиль элемента*/-->



