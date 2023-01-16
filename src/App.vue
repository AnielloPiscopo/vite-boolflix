<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },

    data() {
        return {
            store,
            apiUrl: 'https://api.themoviedb.org/3/search/',
            inputValue: '',
        }
    },

    methods: {
        getStreamProductsInfo(queryValue, typeOfStream) {
            axios.get(this.apiUrl + typeOfStream, {
                params: {
                    api_key: '21d2afbe969aeaeb562a09a276f709a7',
                    language: 'it-IT',
                    query: queryValue,
                }
            })
                .then(response => {
                    console.log(response.data.results);
                    if (typeOfStream == 'movie') this.store.moviesList = response.data.results;
                    else if (typeOfStream == 'tv') this.store.tvSeriesList = response.data.results;
                })
                .catch(err => {
                    console.arr(err);
                })
        },

        viewStreamProductsList(queryValue) {
            this.getStreamProductsInfo(queryValue, 'tv');
            this.getStreamProductsInfo(queryValue, 'movie');

            this.store.streamProductsList = Object.assign(this.store.tvSeriesList, this.store.moviesList);
            console.log(this.store.streamProductsList);
            console.log(this.store.moviesList);
            console.log(this.store.tvSeriesList);
        }
    },
}
</script>

<template>
    <form>
        <input type="text" v-model.trim.lazy="inputValue">
        <a href="#" class="btn btn-primary" @click="viewStreamProductsList(inputValue)">Clicca qui!</a>
    </form>
    <div>
        <article v-for="streamProduct, index in store.streamProductsList" :key="index">
            <ul class="list-unstyled">
                <li>
                    <ul class="list-unstyled">
                        <li>{{ streamProduct.title }}</li>
                        <li>{{ streamProduct.original_title }}</li>
                        <li>{{ streamProduct.original_language }}</li>
                        <li>{{ streamProduct.vote_average }}</li>
                    </ul>
                </li>
            </ul>
        </article>
    </div>
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
