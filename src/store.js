import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    tvSeriesList: [],
    notFoundImgPath: "https://lets-be-smart.eu/data/img/shoppro/no.png",

    getImgPath(imgPath) {
        return new URL('./assets/img/' + imgPath + '.png', import.meta.url).href
    },

    convertRange(oldValue, oldMin, oldMax, newMin, newMax) {
        let newValue = (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
        return Math.ceil(newValue);
    },
})