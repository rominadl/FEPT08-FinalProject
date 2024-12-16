<template>
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
