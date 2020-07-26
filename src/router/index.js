import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Course from '../views/Course.vue';
import NoAuth from '../views/NotAuthorized.vue';
import ErrorRoute from '../views/ErrorRoute.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
  },
  {
    path: '/notAuthorized',
    name: 'NotAuthorized',
    component: NoAuth,
  },
  {
    path: '/error',
    name: 'ErrorRoute',
    component: ErrorRoute,
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: NotFound,
  },
  {
    // will match everything
    path: '*',
    name: 'CatchAll',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
