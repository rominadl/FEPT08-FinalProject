<template>
  <div>
    <!-- Barra de navegación superior -->
    <nav class="grid grid-cols-3 p-5 bg-gray-100">
      <div class="justify-start col-span-1">

        <!-- Logo con enlace a home -->
        <router-link to="/">
          <div class="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="/src/logorest.png"
              alt="Logo"
              class="w-full h-full object-cover"
            />
          </div>
        </router-link>
      </div>

      <!-- Botones incicar sesión y regístrate -->
      <div class="justify-self-end content-center mx-4 col-span-2">
        <button
          class="text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded-full h-10 w-36"
        >
          LOG IN
        </button>
        <button
          class="text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-3 mx-2 rounded-full h-10 w-36"
        >
          REGISTER
        </button>
      </div>

      <!-- Lista de router links -->
      <!-- <ul class="flex justify-evenly">
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/MiPerfil"></router-link></li>
      </ul> -->
    </nav>
    <RouterView />

    <!-- Footer -->
    <footer
      class="flex justify-between justify-items-end p-5 align bg-gray-100"
    >
      <p>© 2024 Probest</p>
      <a href="">Terms and conditions</a>
      <a href="">Privacy Policy</a>
      <a href="">Cookie Settings</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
