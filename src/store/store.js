import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: {
      woodworking: [
        { id: 1, name: 'Станок для тонкомера', description: 'Описание станка для тонкомера', image: 'path/to/image1.jpg' },
        { id: 2, name: 'Горбыльный станок', description: 'Описание горбыльного станка', image: 'path/to/image2.jpg' },
      ],
      welding: [
        { id: 3, name: 'Услуга сварки 1', description: 'Описание услуги сварки', image: 'path/to/image3.jpg' },
      ],
      prefabricated: [
        { id: 4, name: 'Бытовка', description: 'Описание бытовки', image: 'path/to/image4.jpg' },
      ],
      metal: [
        { id: 5, name: 'Металлоконструкция 1', description: 'Описание металлоконструкции', image: 'path/to/image5.jpg' },
      ],
    },
    cartItems: {},
  },
  mutations: {
    addToCart(state, product) {
      if (state.cartItems[product.id]) {
        state.cartItems[product.id]++;
      } else {
        state.cartItems[product.id] = 1;
      }
    },
  },
});
