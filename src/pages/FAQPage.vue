<template>
    <div>
      <AppHeader />
      <h2>Часто задаваемые вопросы</h2>
      <p>Здесь вы найдете ответы на часто задаваемые вопросы.</p>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  
  export default {
    name: 'FAQPage',
    components: {
      AppHeader,
    },
  };
  </script>
  
  <style scoped>
  /* Стили для страницы с вопросами */
  </style>
  