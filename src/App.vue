<template>
  <div class="">
    <h1 class=""></h1>
    <nav class="grid grid-cols-3 border border-e-blackp-5">
      <div class="justify-start col-span-1">

        <!-- Logo con enlace a home -->
        <router-link to="/">
          <img
            src="https://img.freepik.com/vector-gratis/logotipo-abstracto-comida-verde-crema_23-2149153009.jpg?t=st=1733302958~exp=1733306558~hmac=4c253ec9d646ae1a85510d134dbaf40b119097c87ed3b9bdde65cb9ea1386d0d&w=996"
            alt="Logo"
            class="logo h-16 w-16"
          />
        </router-link>
      </div>

      <!-- Botones incicar sesión y regístrate -->
      <div class="justify-self-end content-center mx-4 col-span-2">
        <button
          class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-full h-10 w-36"
        >
        LOG IN
        </button>
        <button
          class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 mx-2 rounded-full h-10 w-36"
        >
        REGISTER
        </button>
    
      </div>

      <!-- Lista de router links -->
      <ul class="flex justify-evenly">
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/Buscador"></router-link></li>
        <li><router-link to="/MiLista"></router-link></li>
        <li><router-link to="/MiPerfil"></router-link></li>
        <li><router-link to="/Kanban"></router-link></li>

      </ul>
    </nav>
    <RouterView />

    <!-- Footer -->
    <footer
      class="flex border border-e-black justify-between justify-items-end p-5 align"
    >
      <p>© 2024 Probest</p>
      <a href="">Terms and conditions</a>
      <a href="">Privacy Policy</a>
      <a href="">Cookie Settings</a>
    </footer>
  </div>
</template>

<!-- Inicio script -->
<script>
export default {
  name: "Home",
  data() {
    return {
      title: "BE THE MOST EFFECTIVE SUPPLIER",
      description:
        "Find your restaurant, find who needs you, connect with your potential customers",
    };
  },
};
</script>

<style></style>
