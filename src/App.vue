<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <CartPopup :itemCount="cartItemCount" :totalPrice="cartTotalPrice" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import CartPopup from './components/CartPopup.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    CartPopup
  },
  data() {
    return {
      cartItemCount: 0,
      cartTotalPrice: 0
    };
  },
  methods: {
    updateCart(count, price) {
      this.cartItemCount = count;
      this.cartTotalPrice = price;
    }
  },
  created() {
    // Здесь можно настроить глобальные события для обновления корзины
  }
};
</script>
