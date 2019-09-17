<template>
    <div class="layout">
        <h1>{{ msg }}</h1>
        <div class="tab-box">
            <router-link tag="a" to="/article">文章</router-link>
            <router-link tag="a" to="/picture">图片</router-link>
            <router-link tag="a" to="/note">记事本</router-link>
            <router-link tag="a" to="/stock/black">股票黑名单</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            msg: String
        },
        created() {
            console.log(this)
        }
    }
</script>

<style scoped>
    .layout .tab-box > a{
        padding: 0 10px;
    }
    .layout .tab-box{
        margin-bottom: 15px;
    }
</style>
