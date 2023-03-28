<script>
import axios from 'axios';
import { store } from './store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    HeaderApp,
    MainApp
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php') 
    .then((response) => {
      this.store.cards = response.data.data;
      this.store.limitedCards = this.store.cards.slice(50, 150).length;
    })
  }
}
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style lang="scss" scoped>
@use './assets/styles/_partials/variables.scss'
</style>
