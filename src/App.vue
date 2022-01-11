<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>


<script>
//import './styles/global.css';
import Header from './components/Header.vue'; //Importa o cabeçalho

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>