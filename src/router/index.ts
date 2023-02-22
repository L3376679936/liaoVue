

// 》创建routes数组
// 》》使用createRouter函数创建路由实例，配置history、name、component等属性，其中component属性可以是一个组件，也可以是一个函数，函数返回一个组件，这样可以实现路由懒加载。
// 》》》导出这个路由实例
// 》》》》在全局注册
// 》》》》》在app文件处设置路由入口占位符/router-view


// import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/login.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router


// 也可以创建一个函数，在main.ts文件处调用进行全局注册
// export const initRouter = (app: App<Element>) => {
//     app.use(router)
// }