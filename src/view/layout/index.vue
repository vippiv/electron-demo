<template>
    <div class="layout">
        <h1>{{ msg }}</h1>
        <router-link tag="a" to="/article">文章</router-link>
        <router-link tag="a" to="/picture">图片</router-link>
        <router-link tag="a" to="/note">记事本</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .layout > a{
        padding: 0 10px;
    }
</style>
