<template>
  <div>
    <!-- LEAFLET -->
    <div id="mapp">
        <Map/>
    </div>
  </div>
</template>
<script>

import Map from '../components/Map.vue';
export default {
  name: "Buscador en mapa",
  components: {Map},
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>

</style>
