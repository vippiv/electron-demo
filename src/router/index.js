import Vue from 'vue'
import Router from 'vue-router'
import articleGroup from '@/view/article/index'
import pictureGroup from '@/view/picture/index'
import noteGroup from '@/view/note/index'
import picDetail from '@/view/picture/components/detail'
import stockBlack from '@/view/stock/stockBlack'
import stockBlackAdd from '@/view/stock/components/addBlack'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/article',
            name: 'article',
            component:articleGroup
        },
        {
            path: '/picture',
            name: 'picture',
            component:pictureGroup
        },
        {
            path: '/picdetail',
            name: 'picdetail',
            component: picDetail
        },
        {
            path: '/note',
            name: 'note',
            component: noteGroup
        },
        {
            path: '/stock/black',
            name: 'stockBlack',
            component: stockBlack
        },
        {
            path: '/stock/black/add',
            name: 'stockBlackAdd',
            component: stockBlackAdd
        }
    ]
})
