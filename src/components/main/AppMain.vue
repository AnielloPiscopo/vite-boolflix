<script>
import { store } from '../../store';
import MainStreamProduct from './MainStreamProduct.vue';

export default {
    name: 'AppMain',

    components: {
        MainStreamProduct,
    },

    data() {
        return {
            store,
            apiStreamProductImgPath: 'https://image.tmdb.org/t/p/',
            streamProductImgWidth: 'w342',
        }
    },

    methods: {
        getStreamProductImgPath(queryValue) {
            return this.apiStreamProductImgPath + this.streamProductImgWidth + queryValue;
        },
    },

    computed: {
        streamProducts() {
            return [...this.store.moviesList, ...this.store.tvSeriesList];
        },
    }
}
</script>

        

<template>
    <main>
        <div class="my_container d-flex flex-wrap justify-content-center pt-5">
            <MainStreamProduct v-for="streamProduct, index in streamProducts" :key="index"
                :streamProductImgPath="getStreamProductImgPath(streamProduct.poster_path)"
                :streamProductPosterPath="streamProduct.poster_path" :streamProductTitle="streamProduct.title"
                :streamProductOriginalTitle="streamProduct.original_title"
                :streamProductName="streamProduct.original_name"
                :streamProductOriginalName="streamProduct.original_name"
                :streamProductOriginalLanguage="streamProduct.original_language"
                :streamProductVoteAverage="streamProduct.vote_average" />
        </div>
    </main>
</template>



<style lang="scss" scoped>

</style>