<template>
    <div class="container mx-auto py-8">
      <!-- Encabezado del perfil -->
      <div class="bg-green-700 text-white py-6 px-4 sm:px-10 text-center rounded-lg shadow-lg">
        <img
          src="/src/logorest.png"
          alt="Proveedor logo"
          class="rounded-full mx-auto mb-4 w-24 h-24 border-4 border-white shadow-lg"
        />
        <h1 class="text-xl sm:text-2xl font-bold">Supplier Name</h1>
        <p class="text-sm sm:text-base">Company Name</p>
      </div>
  
      <!-- Información básica -->
      <div class="mt-6 px-4 sm:px-10">
        <h2 class="text-lg font-bold mb-4">Personal information</h2>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="font-semibold">Name: <span class="font-normal">Juan Pérez</span></p>
          <p class="font-semibold">Email: <span class="font-normal">juan.perez@ejemplo.com</span></p>
          <p class="font-semibold">Phone: <span class="font-normal">+34 123 456 789</span></p>
          <p class="font-semibold">Location: <span class="font-normal">Barcelona, España</span></p>
        </div>
      </div>
  
      <!-- Detalles del negocio -->
      <div class="mt-6 px-4 sm:px-10">
        <h2 class="text-lg font-bold mb-4">Business details</h2>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="font-semibold">Product categories:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Meats</li>
            <li>Dairy</li>
            <li>Drinks</li>
          </ul>
          <p class="font-semibold mt-4">Delivery method: <span class="font-normal">Home delivery</span></p>
          <p class="font-semibold mt-4">Opening hours: <span class="font-normal">Monday to Friday, 8:00 - 18:00</span></p>
        </div>
      </div>
  
      <!-- Estadísticas rápidas -->
      <div class="mt-6 px-4 sm:px-10">
        
        <div class="bg-white shadow-lg rounded-lg p-6 flex justify-around text-center">
          <div>
            <p class="text-2xl font-bold">12</p>
            <p class="text-sm">Restaurants</p>
          </div>
          <div>
            <p class="text-2xl font-bold">⭐️ 4.5</p>
            <p class="text-sm">Rating</p>
          </div>
          <div>
            <p class="text-2xl font-bold">20</p>
            <p class="text-sm">Products</p>
          </div>
        </div>
      </div>
  
      <!-- Opciones de edición -->
      <div class="mt-6 px-4 sm:px-10 text-center">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition mb-4 mr-6"
        >
          Edit profile
        </button>
        <button
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Log out
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MiPerfil",
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del perfil si es necesario */
  </style>