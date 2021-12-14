<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>


<script>
//import './styles/global.css';
import Header from './pages/views/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>