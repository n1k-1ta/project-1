import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';
import CartPage from '@/pages/CartPage.vue';  // Проверьте путь
import AboutPage from '@/pages/AboutPage.vue';
import DeliveryPage from '@/pages/DeliveryPage.vue';  // Проверьте путь
import ContactPage from '@/pages/ContactPage.vue';
import FAQPage from '@/pages/FAQPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/catalog', component: CatalogPage },
    { path: '/cart', component: CartPage },
    { path: '/about', component: AboutPage },
    { path: '/delivery', component: DeliveryPage },
    { path: '/contact', component: ContactPage },
    { path: '/faq', component: FAQPage },
  ],
});
