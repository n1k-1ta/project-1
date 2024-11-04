<template>
  <div>
    <section class="hero">
      <h1>Добро пожаловать в наш магазин станков</h1>
      <p>Мы предлагаем широкий ассортимент продукции</p>
      <router-link to="/catalog" class="btn">Перейти в каталог</router-link>
    </section>
    <!-- Добавьте другие секции как в референсе -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.hero {
  background-image: url('@/assets/hero-background.jpg');
  background-size: cover;
  color: white;
  padding: 50px;
  text-align: center;
}
.btn {
  background-color: #197ae2;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
