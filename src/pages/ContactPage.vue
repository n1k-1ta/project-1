<template>
    <div>
      <AppHeader />
      <h2>Контакты</h2>
      <p>Свяжитесь с нами по указанным контактам.</p>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  
  export default {
    name: 'ContactPage',
    components: {
      AppHeader,
    },
  };
  </script>
  
  <style scoped>
  /* Стили для страницы контактов */
  </style>
  