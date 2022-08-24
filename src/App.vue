<template>
  <div id="app">
    <HeaderApp />
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/styles/style.css';
import HeaderApp from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderApp
}
}
</script>
