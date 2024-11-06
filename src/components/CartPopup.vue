<template>
    <div class="cart-popup">
      <p>Товаров в корзине: {{ itemCount }}</p>
      <p>Общая сумма: {{ totalPrice }} ₽</p>
      <button @click="goToCart">Перейти в корзину</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      itemCount: {
        type: Number,
        default: 0
      },
      totalPrice: {
        type: Number,
        default: 0
      }
    },
    methods: {
      goToCart() {
        this.$router.push('/cart');
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-popup {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  button {
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #555;
  }
  </style>
  