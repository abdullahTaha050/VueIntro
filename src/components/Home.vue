<template>
  <div class="bg-secondary p-4">
    <h1 class="text-center">Componentler arası iletişim</h1>
    <p>parent to child</p>
    <p>child to parent</p>
    <p>Kullanıcı Yaşı: {{ childData }} <strong>Child to parent</strong></p>
    <div class="row">
      <user @data="childData = $event " :userName="userName"></user>
      <userDetail :userAge="childData"></userDetail>
    </div>
  </div>
</template>

<script>
import User from "./User";
import UserDetail from "./UserDetail.vue";
import { eventBus } from "../main";
export default {
  components: {
    user: User,
    userDetail: UserDetail,
  },
  data: function () {
    return {
      userName: "Abdullah Taha",
      childData: 0,
    };
  },
  created(){
    eventBus.$on("data", (age) => {
      this.childData = age;
    });
  }
};
</script>

<style>
</style>
