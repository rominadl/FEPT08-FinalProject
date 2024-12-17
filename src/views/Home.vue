<template>
  <div class="h-auto sm:h-[750px] bg-graylight">
    <!-- Título y descripción -->
    <h1 class="px-4 sm:px-10 pt-20 sm:pt-40 pb-5 text-4xl sm:text-6xl lg:text-7xl text-left uppercase font-semibold text-secondary">
      {{ title }}
    </h1>
    <p class="px-10 text-3xl text-textdark">{{ description }}</p>
    <!-- Enlaces a empezar a buscar y crear mi lista -->
    <div class="mt-16 sm:mt-32 flex justify-center sm:justify-start px-4 sm:px-10">
      <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 font-sans">
        <!-- Enlace a buscar -->
        <li>
          <router-link
            to="/Buscador"
            class="text-sm sm:text-base bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full h-12 w-40 sm:w-48 border border-gray-300 shadow transition-all"
          >
            Search
          </router-link>
        </li>
        <!-- Enlace a mi lista -->
        <li>
          <router-link
            to="/MiLista"
            class="text-sm sm:text-base bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full h-12 w-40 sm:w-48 border border-gray-300 shadow transition-all"
          >
            My List
          </router-link>
        </li>
        <!-- Enlace a Kanban -->
        <li>
          <router-link
            to="/Kanban"
            class="text-sm sm:text-base bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full h-12 w-40 sm:w-48 border border-gray-300 shadow transition-all"
          >
            Kanban
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Vista principal -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Be the most effective supplier",
      description: "Find your restaurant, find who needs you, connect with your potential customer",
     
    };
  },
  
};
</script>
<style></style>
