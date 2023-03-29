import { reactive } from "vue";

export const store = reactive({
    cards:[],
    cardsFound: 0,
    searchSelect: "",
    archetypes:[],
    loading: true,
})