<template>
  <div class="col-sm-6 bg-success">
    <h2>User Detail</h2>
    <p>Kullanıcı yaşı: {{userAge}} <strong>child to child</strong></p>
  </div>
</template>

<script>
export default {
  props: ["userAge"]
}
</script>
