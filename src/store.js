import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    tvSeriesList: [],
    imgNotFoundPath: 'https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg',

    getImgPath(imgPath) {
        return new URL('./assets/img/' + imgPath + '.png', import.meta.url).href
    },

    convertRange(oldValue, oldMin, oldMax, newMin, newMax) {
        let newValue = (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
        return Math.ceil(newValue);
    },
})