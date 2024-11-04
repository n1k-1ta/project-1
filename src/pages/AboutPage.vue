<template>
    <div>
      <AppHeader />
      <h2>О компании</h2>
      <p>Здесь находится информация о нашей компании.</p>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  
  export default {
    name: 'AboutPage',
    components: {
      AppHeader,
    },
  };
  </script>
  
  <style scoped>
  /* Стили для страницы "О компании" */
  </style>
  