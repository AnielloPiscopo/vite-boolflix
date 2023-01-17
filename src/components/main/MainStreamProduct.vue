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
            isHover: false,
        }
    },

    methods: {
        changeHoverStatusToTrue() {
            this.isHover = true;
        },

        changeHoverStatusToFalse() {
            this.isHover = false;
        }
    }
}
</script>


<template>
    <article @mouseenter="changeHoverStatusToTrue()" @mouseleave="changeHoverStatusToFalse()">
        <div v-if="!isHover" class="my_img-container h-100">
            <img v-if='streamProductPosterPath != null' :src="streamProductImgPath"
                :alt="(streamProductTitle) ? streamProductTitle : streamProductName"
                :title="(streamProductTitle) ? streamProductTitle : streamProductName" class="w-100 h-100">
            <img v-else :src="store.notFoundImgPath" alt="immagine non trovata" title="immagine non trovata"
                class="w-100 h-100">
        </div>
        <ul v-else class="list-unstyled">
            <li>{{ (streamProductTitle) ? streamProductTitle : streamProductName }}</li>
            <li>{{ (streamProductOriginalTitle) ? streamProductOriginalTitle :
            streamProductOriginalName }}</li>
            <li><img :src="store.getImgPath(streamProductOriginalLanguage)" alt="Bandiera" class="w-100"></li>
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
    width: 342px;
    height: 481px;
    border: 2px solid $secondary--color;
    cursor: pointer;
    background-color: $primary--color;
    color: $secondary--color;

    .my_icon {
        color: $stars--color;

        &.my_active {
            color: $stars-active--color;
        }
    }
}
</style>