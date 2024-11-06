<template>
    <div class="product-page">
      <img :src="product.image" alt="product image" />
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }} ₽</p>
      <button @click="addToCart">Добавить в корзину</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['category', 'productId'],
    data() {
      return {
        product: {}
      };
    },
    created() {
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        // Здесь должен быть запрос к серверу или получение данных
        // Пока что используются примерные данные
        this.product = {
          id: this.productId,
          name: `Продукт ${this.productId}`,
          description: "Описание продукта...",
          price: 1000,
          image: "https://via.placeholder.com/300"
        };
      },
      addToCart() {
        // Пример добавления в корзину
        this.$emit('update-cart', 1, this.product.price);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #555;
  }
  </style>
  