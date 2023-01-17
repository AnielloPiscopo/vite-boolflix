<script>
import axios from 'axios';
import { store } from '../../store';
export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            apiStreamProductSearch: 'https://api.themoviedb.org/3/search/',
            apiStreamProductImgPath: 'https://image.tmdb.org/t/p/',
            streamProductImgWidth: 'w342',
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

        getImgPath(imgPath) {
            return new URL('./assets/img/' + imgPath + '.png', import.meta.url).href
        },

        convertRange(oldValue, oldMin, oldMax, newMin, newMax) {
            let newValue = (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
            return Math.ceil(newValue);
        },

        getStreamProductImgPath(queryValue) {
            return this.apiStreamProductImgPath + this.streamProductImgWidth + queryValue;
        }
    },
}
</script>



<template>
    <header>
        <form>
            <input type="text" v-model.trim.lazy="inputValue">
            <a href="#" class="btn btn-primary" @click="viewStreamProductsList(inputValue)">Clicca qui!</a>
        </form>
    </header>
</template>



<style lang="scss">

</style>