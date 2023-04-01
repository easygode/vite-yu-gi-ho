<script>
import axios from 'axios';
import { store } from './store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import SearchApp from './components/SearchApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp,
    SearchApp
  },
  data() {
    return {
      store,
      archetypes: []
    }
  },
  methods: {
    search(){
      console.log(store.searchKey),
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', 
      {
        params: {
          archetype: store.searchKey,
      }
    })
    .then((response) => {
      this.store.cards = response.data.data;
      this.store.limitedCards = this.store.cards.slice(0, 144).length;
      this.store.limitedCards = 0;
      this.store.loading = true;
    })
    .catch ((error)=>{
      this.store.cards = [];
      this.store.limitedCards = 0;
    })
  }  
  },
  created(){
    this.search();
  }
}

</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
  <SearchApp @ricerca="search"></SearchApp>
</template>

<style lang="scss" scoped>
@use './assets/styles/_partials/variables.scss'
</style>
