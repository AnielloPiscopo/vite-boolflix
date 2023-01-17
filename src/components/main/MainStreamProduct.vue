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
        streamProductOverview: String,
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
        <ul v-else class="list-unstyled pt-5 px-3">
            <li>
                <span class="my_stream-product-details fw-bold pe-2">Titolo:</span>
                <span class="my_stream-product-text">{{ (streamProductTitle) ? streamProductTitle : streamProductName
                }}</span>
            </li>
            <li>
                <span class="my_stream-product-details fw-bold pe-2">Titolo originale:</span>
                <span class="my_stream-product-text">{{ (streamProductOriginalTitle) ? streamProductOriginalTitle :
                streamProductOriginalName }}</span>
            </li>
            <li>
                <span class="my_stream-product-details fw-bold pe-2">Lingua:</span>
                <span class="my_stream-product-img d-inline-block">
                    <img :src="store.getImgPath(streamProductOriginalLanguage)" alt="Bandiera" class="w-100">
                </span>
            </li>
            <li>
                <span class="my_stream-product-details fw-bold pe-2">Voto:</span>
                <font-awesome-icon v-for="starIcon, index in 5" icon="fa-solid fa-star" class="my_icon"
                    :class="(store.convertRange(streamProductVoteAverage, 1, 10, 1, 5) >= index) ? 'my_active' : ''"
                    :key="index" />
            </li>
            <li>
                <span class="my_stream-product-details fw-bold pe-2">Overview:</span>
                <span class="my_stream-product-text">{{ (streamProductOverview) ? streamProductOverview : 'Nessuna\
                descrizione' }}</span>
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
    color: $darker-secondary--color;

    .my_stream-product-img {
        width: 30px;
    }

    .my_stream-product-details {
        color: $secondary--color;
    }

    .my_icon {
        color: $stars--color;

        &.my_active {
            color: $stars-active--color;
        }
    }
}
</style>