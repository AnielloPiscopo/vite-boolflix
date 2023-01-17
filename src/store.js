import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    tvSeriesList: [],

    getImgPath(imgPath) {
        return new URL('./assets/img/' + imgPath + '.png', import.meta.url).href
    },

    convertRange(oldValue, oldMin, oldMax, newMin, newMax) {
        let newValue = (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
        return Math.ceil(newValue);
    },
})