import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var myRoutes = [
    {
        path: '/',
        name: 'home',
        meta: { layout: "default"},
        component: require("@/pages/Home.vue").default
    }
];

const router = new VueRouter({
    base: process.env.NODE_ENV === 'production' ?
    '/dist/' : '/',
    mode: 'history',
    routes: myRoutes
});


router.beforeEach((to, from, next) => {
    next();
});

export default router;
