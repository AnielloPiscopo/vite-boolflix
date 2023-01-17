<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
    components: {
        AppHeader,
        AppMain,
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
@use './styles/partials/variables' as *;

body {
    height: 100vh;
    background-color: $lighter-primary--color;
}
</style>
