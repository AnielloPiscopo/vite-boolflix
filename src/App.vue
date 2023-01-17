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

    computed: {
        streamProducts() {
            return [...this.store.moviesList, ...this.store.tvSeriesList];
        }
    }
}
</script>

<template>
    <form>
        <input type="text" v-model.trim.lazy="inputValue">
        <a href="#" class="btn btn-primary" @click="viewStreamProductsList(inputValue)">Clicca qui!</a>
    </form>
    <div>
        <article v-for="streamProduct, index in streamProducts" :key="index">
            <ul class="list-unstyled">
                <li>
                    <ul class="list-unstyled">
                        <li> <img :src="getStreamProductImgPath(streamProduct.poster_path)" alt=""></li>
                        <li>{{ (streamProduct.title) ? streamProduct.title : streamProduct.name }}</li>
                        <li>{{ (streamProduct.original_title) ? streamProduct.original_title :
                        streamProduct.original_name }}</li>
                        <li><img :src="getImgPath(streamProduct.original_language)" alt=""></li>
                        <li>
                            <font-awesome-icon v-for="starIcon, index in 5" icon="fa-solid fa-star" class="my_icon"
                                :class="(convertRange(streamProduct.vote_average,1,10,1,5) >= index) ? 'my_active' : ''"
                                :key="index" />
                        </li>
                    </ul>
                </li>
            </ul>
        </article>
    </div>
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';

.my_icon {
    color: grey;
}

.my_icon.my_active {
    color: yellow;
}
</style>
