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
    <header>
        <div class="my_container d-flex justify-content-between align-items-center p-4">
            <a href="#" class="my_logo text-unstyled text-decoration-none">
                <h1 class="text-uppercase fw-bold">Boolfix</h1>
            </a>
            <form @submit.prevent>
                <input type="text" class='my_input' v-model.trim="inputValue"
                    @keyup.prevent.enter="viewStreamProductsList(inputValue)">
            </form>
        </div>
    </header>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

header {
    background-color: $primary--color;

    .my_logo {
        color: $logo--color;
    }
}
</style>