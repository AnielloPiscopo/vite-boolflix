<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            apiStreamProductSearch: 'https://api.themoviedb.org/3/search/',
            inputValue: '',
        }
    },

    methods: {
        getStreamProductsInfo(queryValue, typeOfStream) {
            axios.get(this.apiStreamProductSearch + typeOfStream, {
                params: {
                    api_key: '21d2afbe969aeaeb562a09a276f709a7',
                    language: 'it-IT',
                    query: queryValue,
                }
            })
                .then(response => {
                    console.log(response.data.results);
                    if (typeOfStream === 'movie') this.store.moviesList = response.data.results;
                    else if (typeOfStream === 'tv') this.store.tvSeriesList = response.data.results;
                })
                .catch(err => {
                    console.arr(err);
                })
        },

        viewStreamProductsList(queryValue) {
            this.getStreamProductsInfo(queryValue, 'tv');
            this.getStreamProductsInfo(queryValue, 'movie');
            console.log(this.store.moviesList);
            console.log(this.store.tvSeriesList);
        },
    },
}
</script>



<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-uppercase">Boolfix</h1>
        <form>
            <input type="text" v-model.trim="inputValue" @keyup.enter="viewStreamProductsList(inputValue)">
        </form>
    </header>
</template>



<style lang="scss">

</style>