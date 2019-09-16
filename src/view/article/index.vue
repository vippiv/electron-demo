<template>
    <div class="article">
        <ul>
            <li v-for="item in articleList" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                articleList: [
                    {
                        id: 1,
                        title: '习近平论网络安全十大金句 国庆 心连心 爱香港'
                    },
                    {
                        id: 2,
                        title: '中秋消费激发经济新活力 “菜篮子”产品价格下降'
                    },
                    {
                        id: 3,
                        title: '被问“声泪俱下”劝郭回头吗?马英九表情惊人(图)'
                    },
                    {
                        id: 4,
                        title: '深交所七问第一创业:坏账计提 利润率大幅变动'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
