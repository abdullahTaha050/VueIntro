import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('home', Home);

export const eventBus = new Vue({
  methods: {
    sendToParent(data){
      this.$emit("data", data);
    }
  }
}
);

new Vue({
  el: '#app',
  render: h => h(App)
})
