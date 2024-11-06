import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';
import CartPage from '@/pages/CartPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import DeliveryPage from '@/pages/DeliveryPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import FAQPage from '@/pages/FAQPage.vue';
import ProductPage from '@/pages/ProductPage.vue';

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
    // Динамический маршрут для конкретного товара
    { path: '/catalog/:category/:productId', component: ProductPage, props: true },
  ],
});
