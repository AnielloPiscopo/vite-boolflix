<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
}
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
</style>
