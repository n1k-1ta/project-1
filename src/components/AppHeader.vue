<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/catalog">Каталог</router-link></li>
        <li><router-link to="/about">О компании</router-link></li>
        <li><router-link to="/delivery">Доставка и оплата</router-link></li>
        <li><router-link to="/contact">Контакты</router-link></li>
        <li><router-link to="/faq">Вопросы</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  background-color: #333;
  padding: 20px;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 15px;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
