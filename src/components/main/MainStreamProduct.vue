<script>
import { store } from '../../store';

export default {
    name: 'MainStreamProduct',

    props: {
        streamProductImgPath: String,
        streamProductPosterPath: String,
        streamProductTitle: String,
        streamProductOriginalTitle: String,
        streamProductName: String,
        streamProductOriginalName: String,
        streamProductOriginalLanguage: String,
        streamProductVoteAverage: Number,
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <article>
        <img v-if='streamProductPosterPath != null' :src="streamProductImgPath" :alt="streamProductOriginalTitle"
            :title="streamProductTitle">
        <img v-else :src="store.notFoundImgPath" alt="immagine non trovata">
        <ul class="list-unstyled">
            <li>{{ (streamProductTitle) ? streamProductTitle : streamProductName }}</li>
            <li>{{ (streamProductOriginalTitle) ? streamProductOriginalTitle :
            streamProductOriginalName }}</li>
            <li><img :src="store.getImgPath(streamProductOriginalLanguage)" alt=""></li>
            <li>
                <font-awesome-icon v-for="starIcon, index in 5" icon="fa-solid fa-star" class="my_icon"
                    :class="(store.convertRange(streamProductVoteAverage,1,10,1,5) >= index) ? 'my_active' : ''"
                    :key="index" />
            </li>
        </ul>
    </article>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

article {
    width: calc(100%/4);

    .my_icon {
        color: $stars--color;

        &.my_active {
            color: $stars-active--color;
        }
    }
}
</style>