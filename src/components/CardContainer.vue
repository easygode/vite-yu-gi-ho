<script>
import { store } from '../store';
import CardApp from './CardApp.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        CardApp
    },
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center p-5">
        <div class="card-ctn">
            <div class="card-filter p-3">
                <span>Found {{ store.limitedCards }} cards</span>
            </div>
            <div class="row gy-2">
                <div class="card-list col-12 col-md-4 col-lg-3 d-flex align-items-stretch"  v-for="(card, index) in store.cards.slice(0, 50)">
                    <cardComp :img="card.card_images[0].image_url"  :name="card.name.toUpperCase()" :species="card.archetype"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/_partials/variables.scss' as *;
.container {
    background-color: $primary-color;
    color: $primary-color;
}

.card-ctn {
    width: 100%;
    .card-filter {
        background-color: #1f2328;
    }}
</style>