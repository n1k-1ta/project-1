<template>
  <div class="catalog-page">
    <div class="sort-options">
      <label>Сортировка по категориям:</label>
      <select v-model="selectedCategory" @change="filterProducts">
        <option v-for="category in categories" :key="category.name" :value="category.name">
          {{ category.label }}
        </option>
      </select>
    </div>

    <div class="products">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
        @click="goToProductPage(product)"
      >
        <img :src="product.image" alt="Product Image">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <button @click.stop="addToCart(product)">Добавить в корзину</button>
        <p v-if="cartItems[product.id]">В корзине: {{ cartItems[product.id] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      selectedCategory: 'woodworking',
      categories: [
        { name: 'woodworking', label: 'Станки для деревообработки' },
        { name: 'welding', label: 'Услуги сварщика' },
        { name: 'prefabricated', label: 'Быстровозводимое строительство' },
        { name: 'metal', label: 'Производство и монтаж металлоконструкций' },
      ],
    };
  },
  computed: {
    ...mapState(['products', 'cartItems']),
    filteredProducts() {
      return this.products[this.selectedCategory] || [];
    },
  },
  methods: {
    ...mapMutations(['addToCart']),
    
    addToCart(product) {
      this.addToCart(product);
    },
    
    goToProductPage(product) {
      this.$router.push(`/catalog/${this.selectedCategory}/${product.id}`);
    },
  },
};
</script>

<style scoped>
.catalog-page {
  padding: 20px;
}

.sort-options {
  margin-bottom: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  width: 250px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
}
</style>
