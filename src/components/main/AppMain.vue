<script>
export default {
    name: 'AppMain',

    computed: {
        streamProducts() {
            return [...this.store.moviesList, ...this.store.tvSeriesList];
        }
    }
}
</script>

        

<template>
    <main>
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
    </main>
</template>



<style lang="scss">
.my_icon {
    color: grey;
}

.my_icon.my_active {
    color: yellow;
}
</style>