
<template>
  <div>
    <h1 class=""></h1>
      <nav class="flex border border-e-black justify-between p-5 ">
        <img src="https://img.freepik.com/vector-gratis/logotipo-abstracto-comida-verde-crema_23-2149153009.jpg?t=st=1733302958~exp=1733306558~hmac=4c253ec9d646ae1a85510d134dbaf40b119097c87ed3b9bdde65cb9ea1386d0d&w=996" alt="Logo" class="logo h-16 w-16 "  />
        <button class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full h-16 w-36">
        INICIAR SESION!!!
    </button>
    <button class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full h-16 w-36">
        REGISTRATE
    </button>
    
      <ul class="flex justify-evenly">
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/Buscador"></router-link></li>
        <li><router-link to="/MiLista"></router-link></li>
        <li><router-link to="/MiPerfil"></router-link></li>
        <li><router-link to="/Kanban"></router-link></li>
      </ul>
    </nav>
    <RouterView/>
  </div>
</template>
  <script>
  export default {
    
      name: "Home",
      data(){
    return{
      title: "SE EL PROVEEDOR MAS EFICAZ",
      description: "Busca tu restaurante, busca quien te necesita conecta con tus potenciales clientes"
    }
  }
  
}
</script>
 
  <style >
  
      
  </style>