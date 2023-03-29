<script>
import SearchApp from './SearchApp.vue';
import CardContainer from './CardContainer.vue';

export default {
    name: 'Main',
    components: {
        SearchApp,
        CardContainer
    },
    methods: {
        filterSearch(){
            this.$emit('filterType')
        }
    }
}
</script>

<template>
    <main class="d-flex flex-column align-items-center justify-content-center py-5">
        <SearchApp @filter="filterSearch"></SearchApp>
        <CardContainer></CardContainer>
    </main>

</template>

<style lang="scss" scoped>
@use '../assets/styles/_partials/variables.scss' as *;
main {
    background-color: $bg-color;
    color: $primary-color;
}
</style>