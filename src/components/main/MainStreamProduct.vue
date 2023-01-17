<script>
import { store } from '../../store';

export default {
    name: 'MainStreamProduct',

    props: {
        streamProductImgPath: String,
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
    }
}
</script>


<template>
    <article>
        <ul class="list-unstyled">
            <li>
                <ul class="list-unstyled">
                    <li> <img :src="streamProductImgPath" alt=""></li>
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
            </li>
        </ul>
    </article>
</template>


<style lang="scss">

</style>