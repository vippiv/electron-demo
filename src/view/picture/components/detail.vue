<template>
    <div class="picdetail">
        <p>显示图片详情</p>
        <img :src="src" alt="">
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                src: 'http://n.sinaimg.cn/fashion/crawl/314/w550h564/20190826/0eed-icuacrz7350575.jpg'
            }
        },
        created() {
            // 用本地存储和url传参的方式都无效，无奈只能用本地存储试试
            this.src = localStorage.getItem('url')
            this.$store.dispatch('setImgLink', this.src)
            this.$nextTick(() => {
                console.log(this.$store.state.img)
            })
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
