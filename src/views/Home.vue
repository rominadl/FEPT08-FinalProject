<template>

  <h2>{{ title }}</h2>
  <!-- <h3>{{ resultadosmap.name }}</h3> -->
  <p>{{ description }}</p>
  <router-view></router-view>

  <div class="h-[750px]">
    <!-- Texto principal de bienvenida-->
    <h1 class="px-10 pt-40 pb-5 text-7xl text-left font-semibold">
      {{ title }}
    </h1>
    <p class="px-10">{{ description }}</p>

    <!-- Enlaces a empezar a buscar y crear mi lista-->
    <div class="mt-10">
      <ul class="flex justify-evenly">
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/Buscador">Buscar</router-link></li>
        <li><router-link to="/MiLista">Crear mi lista</router-link></li>
        <li><router-link to="/MiPerfil"></router-link></li>
        <li><router-link to="/Kanban"></router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>




import { useResultadosmapStore } from '../stores/resultadosmap.js';

export default {
  name: "Home",
  data() {
    return {
      title: "SÉ EL PROVEEDOR MÁS EFICAZ",
      description:
        "Busca tu restaurante, encuentra quién te necesita y conecta con tus potenciales clientes",
    };
  },
  // computed :{  //las computer son propiedades que salen de un calculo
  //    useResultadosmapStore(){
  //     return useResultadosmapStore()
  //      },
      //  product(){
      //   return useResultadosStore()
      //  }
  };
// };
</script>

<style></style>
