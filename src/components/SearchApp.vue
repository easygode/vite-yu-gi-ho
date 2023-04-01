<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Search',
    props: ['archetypes'],
    data() {
        return {
            store
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((response) => {
            this.store.archetypes = response.data;
        })
    },
} 
</script>

<template>
    <div class="container mb-3">
        <select class="form-select ms-select" aria-label="Default select example" @change="$emit('ricerca')" v-model="store.searchKey">
            <option value="">Search Archetype</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypes">{{ archetype.archetype_name }}</option>
    </select>
    </div>
</template>

<style lang="scss" scoped>
.ms-select {
    width: 40vh;
}
</style>