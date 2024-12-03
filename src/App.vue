<template >
  <div>
    <h1 class="text-8xl font-black text-emerald-400">{{ title }}</h1>
    <h2 class="text-6xl font-black text-emerald-800">Buen Dia ​🦋​</h2>
   <RouterView/>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      title: "Hola!🐼​"
    }
  }
}
</script>
<style >
  
</style>