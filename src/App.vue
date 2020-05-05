<template>
    <div class="app">
        <router-link to="/">Home</router-link>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
body {
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
