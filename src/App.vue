<script>
import axios from 'axios';
import { store } from './store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          archetype: store.searchSelect,
      }
    })
    .then((response) => {
      this.store.cards = response.data.data;
      this.store.limitedCards = this.store.cards.slice(0, 52).length;
      this.store.limitedCards = 0;
      this.store.loading = false;
    })
    .catch ((error)=>{
      this.store.cards = [];
      this.store.limitedCards = 0;
    })
  },
  created(){
    this.search();
  }
}}

</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style lang="scss" scoped>
@use './assets/styles/_partials/variables.scss'
</style>
