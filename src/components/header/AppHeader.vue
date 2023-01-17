<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            apiStreamProductSearch: 'https://api.themoviedb.org/3/search/',
            apiStreamProductPage: 1,
            inputValue: '',
            navActiveElementIndex: 0,
            navElementsList: ['Home', 'Serie TV', 'Film'],
            isTvSeriesFilterActive: true,
            isMoviesFilterActive: true,
        }
    },

    methods: {
        getStreamProductsInfo(queryValue, typeOfStream) {
            axios.get(this.apiStreamProductSearch + typeOfStream, {
                params: {
                    api_key: '21d2afbe969aeaeb562a09a276f709a7',
                    page: this.apiStreamProductPage,
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
            if (this.isMoviesFilterActive && this.isTvSeriesFilterActive) {
                this.getStreamProductsInfo(queryValue, 'tv');
                this.getStreamProductsInfo(queryValue, 'movie');
            }
            else if (this.isMoviesFilterActive) {
                this.getStreamProductsInfo(queryValue, 'movie');
            }
            else if (this.isTvSeriesFilterActive) {
                this.getStreamProductsInfo(queryValue, 'tv');
            }
        },
    },
}
</script>



<template>
    <header>
        <div class="my_container d-flex justify-content-between align-items-center p-4">
            <nav class="d-flex align-items-center">
                <a href="#" class="my_logo text-decoration-none pe-4">
                    <h1 class="text-uppercase fw-bold">Boolfix</h1>
                </a>
                <ul class="list-unstyled d-flex m-0">
                    <li v-for="navElement, index in navElementsList" :key="index"><a href="#"
                            class="text-decoration-none pe-3"
                            :class="(navActiveElementIndex === index) ? 'my_active fw-bold' : ''">{{ navElement }}</a>
                    </li>
                </ul>
            </nav>
            <form @submit.prevent>
                <input type="text" placeholder="Inserisci il nome del prodotto che vuoi vedere" class='my_input'
                    v-model.trim="inputValue" @keyup.prevent.enter="viewStreamProductsList(inputValue)">
            </form>
        </div>
    </header>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

header {
    background-color: $primary--color;

    nav {
        .my_logo {
            color: $logo--color;
        }

        ul a {
            color: $darker-secondary--color;

            &.my_active {
                color: $secondary--color;
            }
        }
    }
}
</style>