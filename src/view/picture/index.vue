<template>
    <div class="picture">
        <ul>
            <li v-for="item in pics" :key="item.id"><img :src="item.link" alt="" @click="showBig(item)"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                pics: [
                    {
                        id: '1',
                        link: 'http://n.sinaimg.cn/fashion/crawl/575/w550h825/20190826/74f8-icuacrz7350488.jpg'
                    },
                    {
                        id: '2',
                        link: 'http://n.sinaimg.cn/fashion/crawl/314/w550h564/20190826/0eed-icuacrz7350575.jpg'
                    },
                    {
                        id: '3',
                        link: 'http://n.sinaimg.cn/fashion/crawl/555/w550h805/20190826/ec53-icuacrz7350666.jpg'
                    },
                    {
                        id: '4',
                        link: 'http://n.sinaimg.cn/fashion/crawl/575/w550h825/20190826/d7a1-icuacrz7350812.jpg'
                    }
                ]
            }
        },
        methods: {
            showBig(obj) {
                this.$electron.ipcRenderer.send('toggle-image', obj.link)
                this.$electron.ipcRenderer.on('toggle-image-reply', (evt, args) => {
                    this.$store.dispatch('setImgLink', args)
                })
            }
        }
    }
</script>

<style scoped>

</style>
