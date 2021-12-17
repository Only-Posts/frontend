<template>
  <form @submit.prevent="login">
  <div id="name"> Авторизация </div>
  <div id="fields">
    <div id="login">
      <div class="fieldName"> Имя пользователя </div>
      <div class="input"><input v-model="username" type="text"/></div>
    </div>
    <div id="password">
      <div class="fieldName">Пароль</div>
      <div class="input"><input type="password" v-model="password"/></div>
    </div>
  </div>
  <div id="enter">
    <button type="submit" >Войти</button>
  </div>
  </form>
</template>

<script>

export default {
  name: "LogIn",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      const user = {username: this.username, password: this.password}

      this.$store.dispatch('login', user)
    }
  }
}
</script>

<style scoped>
form{
  /*Расположение самого элемента*/
  height: 90vh;
  /*Расположение внутри элемента*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;

}

#name{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 1;
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

#fields{
  /*Расположение самого элемента*/
  margin: 30px;
  grid-column: 1;
  grid-row: 2;

  /*Расположение внутри элемента*/
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  /*Стиль элемента*/
}

/*Общие параметры*/
.fieldName{
  color: white;
}

.input > input{
  /*Расположение самого элемента*/
  margin: 15px 0;

  /*Расположение внутри элемента*/
  text-indent: 10px;


  /*Стиль элемента*/
  width: 100%;
  height: 42px;
  background-color: rgba(251,251,251,0);
  border: solid 2px rgba(251,251,251,0.12);
  border-radius: 20px;
  outline: none;
  color: rgb(251,251,251);
}

/*Часные параметры*/
#login{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 1;

  /*Расположение внутри элемента*/
  display: grid;
  align-content: center;

  /*Стиль элемента*/
}

#password{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 2;

  /*Расположение внутри элемента*/
  display: grid;
  align-content: center;

  /*Стиль элемента*/
  /*background: #1c1c1c;*/
}

#enter{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 3;
  margin: 10px 25px 50px 50px;

  /*Расположение внутри элемента*/
  display: grid;
  align-items: start;
  justify-items: end;

  /*Стиль элемента*/

}

#enter > button{
  /*Стиль элемента*/
  width: 115px;
  height: 45px;

}

</style>