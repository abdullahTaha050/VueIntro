<template>
  <div class="col-sm-6 bg-primary">
    <h2>User</h2>
    <p>User Name: {{userName}} <strong>parent to child</strong></p>
    <button class="btn btn-warning mb-2" @click="sendToParent">Yaşı gönder</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  data: function(){
    return {
      userAge: 25
    }
  },
  props: {
    userName: String,
  },
  methods: {
    sendToParent(){
      // this.$emit("data", this.userAge);
      eventBus.sendToParent(this.userAge);
    }
  }
}
</script>
