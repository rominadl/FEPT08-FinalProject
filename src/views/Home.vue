<template>
  <div class="h-[750px] bg-graylight">
    <!-- Título y descripción -->
    <h1 class="px-10 pt-40 pb-5 text-7xl text-left uppercase font-semibold text-secondary">
      {{ title }}
    </h1>
    <p class="px-10 text-3xl text-textdark">{{ description }}</p>
    
    <!-- Enlaces a empezar a buscar y crear mi lista-->
    <div class="mt-32">
      <ul class="flex justify-end space-x-10 font-sans">
        <li><router-link to="/"></router-link></li>
        <li class="uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100"><router-link to="/Buscador">Search</router-link></li>
        <li class="uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100"><router-link to="/MiLista">My List</router-link></li>
        <li><router-link to="/Kanban"></router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { useResultadosmapStore } from "../stores/resultadosmap.js";

export default {
  name: "Home",
  data() {
    return {
      title: "Be the most effective supplier",
      description:
        "Find your restaurant, find who needs you, connect with your potential customer",
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
