<script>
import { store } from '../store';
export default {
    data() {
        return {
            search: "",
            store
        }
    },
}
</script>

<template>
    <div class="container mb-3">
        <select class="form-select ms-select" aria-label="Default select example" v-model="search">
            <option value="" disabled selected hidden>Search Card</option>
            <option value="alien">Alien</option>
            <option value="melodius">Melodius</option>
            <option value="elemental">Elemental</option>
            <option value="knight">Noble Knight</option>
    </select>
    </div>
</template>

<style lang="scss" scoped>
.ms-select {
    width: 30vh;
}
</style>