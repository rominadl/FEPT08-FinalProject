<template>
  <h2>{{ title }}</h2>
  <h3>{{ counter.name }}</h3>
  <p>{{ description }}</p>
  <router-view></router-view>
</template>
<script>
import { useCounterStore } from '../stores/counter.js';
export default {
  name: "Home",
  data() {
    return {
      title: "SE EL PROVEEDOR MAS EFICAZ",
      description:
        "Busca tu restaurante, busca quien te necesita conecta con tus potenciales clientes",
    };
  },
  computed :{  //las computer son propiedades que salen de un calculo
     counter(){
      return useCounterStore()
       },
       product(){
        return useCounterStore()
       }
  }
};
</script>

<style></style>
