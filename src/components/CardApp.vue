<script>
export default {
    props: {
        img: String,
        name: String,
        archetype: String,
    }
}
</script>

<template>
    <div class="card">
        <div class="card-img">
            <img :src="img" class="img-fluid" alt="card information">
        </div>
        <div class="card-text p-2">
            <h3 class="text-center">{{ name }}</h3>
            <h4 class="fs-5 text-center p-2">{{ archetype }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/_partials/variables.scss' as *;
.card {
    background-color: $bg-color;
    color: $primary-color;

    h3 {
        font-size: 1rem;
    }

    h4 {
        color: red;
    }
}
</style>