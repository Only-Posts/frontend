<template>
  <div id="border">
    <div id="title">Личные данные</div>
    <form @submit.prevent="edit">
      <div class="point">
        <div class="name">Имя</div>
        <input class="field" type="text" v-model="username"/>
      </div>
      <div class="point">
        <div class="name">Почта</div>
        <input class="field" type="email" v-model="email"/>
      </div>
      <div class="point">
        <div class="name">Пароль</div>
        <input class="field" type="password" v-model="password"/>
      </div>
      <button type="submit">Редактировать</button>
      <div class="point">
        <div class="name">Управление аккаунтами</div>
        <button>Редактировать</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data (){
    return{
      username:'',
      email: '',
      password:''
    }
  }
}
</script>

<style scoped>

</style>