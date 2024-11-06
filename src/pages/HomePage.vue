<template>
  <div class="container">
    <section class="hero">
      <div class="hero-content">
        <p class="subtitle">Petal power</p>
        <h1 class="title">growth</h1>
        <p class="description">
          We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!
        </p>
      </div>
      <button class="shop-button">Shop tropical plants</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Общий контейнер для отступов */
.container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* Hero секция с фоном и центровкой */
.hero {
  position: relative;
  background-image: url('@/assets/hero-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  width: 100%;
  height: 85vh; /* Уменьшили высоту на 15% */
  max-width: 100vw;
  max-height: 85vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 50px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

/* Псевдоэлемент для создания изгиба */
.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500px;
  height: 120px;
  
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 1;
  transform: translate(30%, 30%); /* Смещение для правильного расположения */
}

/* Центрированный контент */
.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 2; /* Для наложения контента поверх изгиба */
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 10px;
}

.title {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  margin: 10px 0;
}

.description {
  font-size: 1.1rem;
  margin: 20px 0 30px;
}

/* Кнопка в правом нижнем углу */
.shop-button {
  font-size: 1rem;
  padding: 15px 55px;
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 15px;
  right: 30px; /* Отступ от правого края, чтобы не соприкасалась с изгибом */
  z-index: 2; /* Поверхность кнопки над изгибом */
}

.shop-button:hover {
  background-color: #555;
}
</style>
