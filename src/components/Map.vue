<template>
    <div
    ref="mapContainer"
    class="w-full h-96 rounded-lg shadow-md bg-gray-200">
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  setup() {
    const mapContainer = ref(null);
    let marker = null; // Declarar la variable en un alcance superior
    onMounted(() => {
      if (mapContainer.value) {
        // console.log(mapContainer.value);
        const map = L.map(mapContainer.value, {
          center: [51.505, -0.09], // Coordenadas de inicio (Lat, Lon)
          zoom: 13, // Nivel de zoom
        });

        // Cargar el mapa con tiles de OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );
        // Crear un marcador inicial en el centro del mapa
        marker = L.marker([51.505, -0.09]).addTo(map);
        

        // Añadir un marcador en las coordenadas iniciales
        L.marker([51.505, -0.09])
          .addTo(map)
          .bindPopup("Este es un marcador.")
          .openPopup();

        // Evento: actualizar el marcador al hacer clic en el mapa
        map.on("click", (event) => {
          const { lat, lng } = event.latlng; // Obtener las coordenadas del clic

          // Si ya existe un marcador, eliminarlo
          if (marker) {
            marker.remove();
          }

          // Crear un nuevo marcador en la posición del clic
          marker = L.marker([lat, lng]).addTo(map);

          // Opcional: agregar un popup con las coordenadas
          marker.bindPopup(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`).openPopup();
        });
      } else {
        console.log("Contenedor del mapa no encontrado");
      }
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
