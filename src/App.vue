<template>
  <div>
    <!-- Barra de navegación superior -->
    <nav class="grid grid-cols-2 sm:grid-cols-3 p-5 bg-gray-100 items-center">
      <!-- Logo con enlace a home -->
      <div class="col-span-1 flex justify-start items-center">
        <router-link to="/">
          <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full overflow-hidden">
            <img
              src="/src/logorest.png"
              alt="Logo"
              class="w-full h-full object-cover"
            />
          </div>
        </router-link>
      </div>

      <!-- Botones incicar sesión y regístrate -->
      <div
        class="col-span-1 sm:col-span-2 flex justify-end space-x-2 sm:space-x-4"
        v-if="!isInExcludedRoutes"
        >
        <button
          class="text-xs sm:text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10 w-28 sm:w-36"
        >
          LOG IN
        </button>
        <button
          class="text-xs sm:text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10 w-28 sm:w-36"
        >
          REGISTER
        </button>
      </div>
    </nav>

    <!-- Vista principal -->
    <RouterView />

    <!-- Footer -->
    <footer
      class="flex flex-col sm:flex-row justify-between items-center p-5 bg-gray-100 text-center sm:text-left space-y-3 sm:space-y-0"
    >
      <p class="text-sm">© 2024 Probest</p>
      <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="#" class="text-sm hover:underline">Terms and conditions</a>
        <a href="#" class="text-sm hover:underline">Privacy Policy</a>
        <a href="#" class="text-sm hover:underline">Cookie Settings</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
        // Verificar si estamos en las rutas de 'Buscador' o 'Mi Lista'
        isInExcludedRoutes() {
      return this.$route.name === 'Buscador' || this.$route.name === 'MiLista' || this.$route.name === 'Kanban';
    }
  }
};
</script>

<style></style>
