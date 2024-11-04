<template>
  <div>
    <AppHeader />
    <h2>Каталог товаров</h2>
    <p>Здесь вы можете выбрать товары.</p>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
/* Стили для страницы каталога */
</style>
