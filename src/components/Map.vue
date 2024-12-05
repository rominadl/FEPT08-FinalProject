<template>
  <div
    ref="mapContainer"
    class="w-full h-96 rounded-lg shadow-md bg-gray-200"
  ></div>
</template>
<script>
import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  setup() {
    const mapContainer = ref(null);
    onMounted(() => {
      if (mapContainer.value) {
        const map = L.map(mapContainer.value, {
          center: [51.505, -0.09], // Coordenadas de inicio (Lat, Lon)
          zoom: 13, // Nivel de zoom
        });

        // Cargar el mapa con tiles de OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );

        // Añadir un marcador en las coordenadas iniciales
        L.marker([51.505, -0.09])
          .addTo(map)
          .bindPopup("Este es un marcador.")
          .openPopup();
      }
      else {console.log("Contentedor del mapa no encontrado")}
    });
    return {
      mapContainer,
    };
  },
};
</script>
<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
