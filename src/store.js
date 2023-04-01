import { reactive } from "vue";

export const store = reactive({
    searchKey: '',
    cards:[],
    limitedCards: [],
    cardsFound: 0,
    searchSelect: [],
    archetypes:[],
    loading: true,
})