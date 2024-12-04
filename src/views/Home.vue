<template >
    
     
       <h2>{{title}}</h2>
      <p>{{ description }}</p>
      <router-view></router-view>
      
    <footer></footer>
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