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
    const mapContainer = ref(null); // Referencia al contenedor del mapa
    let initialMarker = null; // Variable para el marcador inicial
    let dynamicMarker = null; // Variable para el marcador dinámico

    onMounted(() => {
      if (mapContainer.value) {
        // Inicializar el mapa
        const map = L.map(mapContainer.value, {
          center: [41.3851, 2.1734], // Coordenadas iniciales (Londres)
          zoom: 13, // Nivel de zoom inicial
        });

        // Cargar las capas del mapa
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );

        // Crear el marcador inicial
        initialMarker = L.marker([41.3851, 2.1734])
          .addTo(map)
          .bindPopup("Este es el marcador inicial.")
          .openPopup();

        // Evento: al hacer clic en el mapa
        map.on("click", async (event) => {
          const { lat, lng } = event.latlng;

          // Eliminar marcador inicial si existe
          if (initialMarker) {
            initialMarker.remove();
            initialMarker = null;
          }

          // Eliminar marcador dinámico anterior
          if (dynamicMarker) {
            dynamicMarker.remove();
          }

          // Crear un nuevo marcador dinámico
          dynamicMarker = L.marker([lat, lng]).addTo(map);
          dynamicMarker
            .bindPopup(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`)
            .openPopup();

          // Buscar negocios cercanos
          await fetchBusinesses(lat, lng);
        });
      } else {
        console.log("Contenedor del mapa no encontrado");
      }
    });

    return { mapContainer };
  },
  methods: {
    agregarMarcadores(resultados) {
      resultados.forEach((resultado) => {
        const marker = L.marker([
          resultado.coordinates.latitude,
          resultado.coordinates.longitude,
        ])
          .addTo(this.map)
          .bindPopup(
            `
          <strong>${resultado.name}</strong><br/>
          ${resultado.location.address1}<br/>
          Rating: ${resultado.rating} ⭐
        `
          )
          .openPopup();
      });
    },
  },
};
</script>
<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
