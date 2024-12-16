<template>
  <div class="h-auto sm:h-[750px] bg-graylight">
    <!-- Barra de navegación -->
    <nav class="grid grid-cols-2 sm:grid-cols-3 p-5 bg-gray-100 items-center">
      <!-- Logo con enlace a home -->
      <div class="col-span-1 flex justify-start items-center">
        <router-link to="/">
          <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full overflow-hidden">
            <img src="/src/logorest.png" alt="Logo" class="w-full h-full object-cover" />
          </div>
        </router-link>
      </div>

      <!-- Botones de sesión -->
      <div class="col-span-1 sm:col-span-2 flex justify-end space-x-2 sm:space-x-4">
        <!-- Botón Log In -->
        <button
          @click="showLoginForm = true"
          class="text-xs sm:text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10 w-28 sm:w-36"
        >
          LOGIN
        </button>
        <!-- Botón Register -->
        <button
          @click="showRegisterForm = true"
          class="text-xs sm:text-sm bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10 w-28 sm:w-36"
        >
          REGISTER
        </button>
      </div>
    </nav>

    <!-- Formulario de inicio de sesión -->
    <div v-if="showLoginForm" class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-lg font-bold text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-semibold">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10"
          >
            Login
          </button>
        </form>
        <button @click="showLoginForm = false" class="mt-4 w-full text-sm text-gray-500">Cancel</button>
      </div>
    </div>

    <!-- Formulario de registro -->
    <div v-if="showRegisterForm" class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-lg font-bold text-center mb-4">Create Account</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="register-email" class="block text-sm font-semibold">Email</label>
            <input
              v-model="registerEmail"
              type="email"
              id="register-email"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>
          <div class="mb-4">
            <label for="register-password" class="block text-sm font-semibold">Password</label>
            <input
              v-model="registerPassword"
              type="password"
              id="register-password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>
          <div class="mb-4">
            <label for="confirm-password" class="block text-sm font-semibold">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              id="confirm-password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-10"
          >
            Register
          </button>
        </form>
        <button @click="showRegisterForm = false" class="mt-4 w-full text-sm text-gray-500">Cancel</button>
      </div>
    </div>

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
      description: "Find your restaurant, find who needs you, connect with your potential customer",
      email: "",
      password: "",
      showLoginForm: false,
      registerEmail: "",
      registerPassword: "",
      confirmPassword: "",
      showRegisterForm: false,
      registeredUsers: [], // Array para almacenar usuarios registrados
    };
  },
  methods: {
    handleLogin() {
      const user = this.registeredUsers.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (user) {
        alert("Inicio de sesión exitoso");
        this.showLoginForm = false;
        this.email = "";
        this.password = "";
      } else {
        alert("Credenciales incorrectas");
      }
    },
    handleRegister() {
      if (this.registerPassword !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      // Verificar si el correo ya está registrado
      const userExists = this.registeredUsers.some(
        (u) => u.email === this.registerEmail
      );
      if (userExists) {
        alert("El correo ya está registrado. Por favor, inicia sesión.");
        return;
      }

      // Registrar nuevo usuario 
      this.registeredUsers.push({
        email: this.registerEmail,
        password: this.registerPassword,
      });

      alert(`Cuenta creada para: ${this.registerEmail}`);
      this.showRegisterForm = false;
      this.registerEmail = "";
      this.registerPassword = "";
      this.confirmPassword = "";
    },
  },
};
</script>


<style>

</style>
