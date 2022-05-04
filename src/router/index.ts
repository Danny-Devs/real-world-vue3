import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    // dynamic segments start with a colon
    { path: '/event/:id', name: 'EventDetailView', props: true, component: EventDetailView },
    { path: '*',
    component: NotFound}
  ],
})

export default router
