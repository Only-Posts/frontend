<template>
  <div id="border">
    <div id="title">Личные данные</div>
    <form @submit.prevent="edit">
      <div v-if="username" class="point">
        <div class="name">Имя</div>
        <div class="field">{{username}}</div>
      </div>
      <div v-if="email" class="point">
        <div class="name">Почта</div>
        <div class="field">{{email}}</div>
      </div>
      <div v-if="password" class="point">
        <div class="name">Пароль</div>
        <div class="field">{{password}}</div>
      </div>
      <div class="point">
        <div class="name">Управление аккаунтами</div>
      </div>
    </form>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "UserProfile",
  data (){
    return{
      username:'',
      email: '',
      password:''
    }
  },
  created() {
    const userData = store.getters.userData
    this.username = userData.username
    this.email = userData.email
    this.password = userData.password
  }
}
</script>

<style scoped>
#border{
  /*Расположение самого элемента*/
  margin-top: 30px;
  /*Расположение внутри элемента*/
  display: grid;
  justify-items: left;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 270px;
}

#title{
  /*Расположение самого элемента*/
  grid-column: 1;
  grid-row: 1;

  /*Стиль элемента*/
  font-size: 2em;
}
.field{
 margin: 10px 0px;
}
form{
  font-size: 1.4em;
}
form > div{
  margin: 15px 0px;
}
button{

  height: 35px;
  width: 125px;
}
</style>