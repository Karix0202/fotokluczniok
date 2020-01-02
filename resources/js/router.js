import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Index from './views/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      requiresVisitor: true,
    },
    component: Index,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresVisitor: true,
    },
    component: () => import('./auth/views/Login.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./auth/views/Logout.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./admin/views/Home.vue'),
  },
  {
    path: '/group/create',
    name: 'photographyGroupCreate',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./admin/views/PhotographyGroupStore.vue'),
  },
  {
    path: '/group/edit/:id',
    name: 'photographyGroupEdit',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./admin/views/PhotographyGroupStore.vue'),
  },
  {
    path: '/gallery/create',
    name: 'galleryCreate',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./admin/views/GalleryStore.vue'),
  },
  {
    path: '/gallery/edit/:id',
    name: 'editGallery',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./admin/views/GalleryStore.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
