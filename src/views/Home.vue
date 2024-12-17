<template>
  <div class="h-auto sm:h-[750px] bg-graylight">


    <!-- Título y descripción -->
    <h1
      class="px-4 sm:px-10 pt-20 sm:pt-40 pb-5 text-4xl sm:text-6xl lg:text-7xl text-left uppercase font-semibold text-secondary"
    >
      {{ title }}
    </h1>
    <p class="px-10 text-3xl text-textdark">{{ description }}</p>

    <!-- Enlaces a empezar a buscar y crear mi lista -->
    <div
      class="mt-16 sm:mt-32 flex justify-center sm:justify-start px-4 sm:px-10"
    >
      <ul
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 font-sans"
      >
        <!-- Enlace a buscar -->
        <li>
          <router-link
            to="/Buscador"
            class="block text-center uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100 transition"
          >
            Search
          </router-link>
        </li>
        <!-- Enlace a mi lista -->
        <li>
          <router-link
            to="/MiLista"
            class="block text-center uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100 transition"
          >
            My List
          </router-link>
        </li>
        <!-- Enlace a Kanban -->
        <li>
          <router-link
            to="/Kanban"
            class="block text-center uppercase font-bold rounded-md px-6 py-3 bg-gray-100 hover:bg-green-800 hover:text-gray-100 transition"
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
      description:
        "Find your restaurant, find who needs you, connect with your potential customer",
    };
  },
};
</script>

<style></style>
