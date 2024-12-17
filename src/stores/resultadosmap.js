import { defineStore } from "pinia";

export const useResultadosmapStore = defineStore("yelp", {
  state: () => ({
    businesses: [], // Datos de negocios
    loading: false, // Estado de carga
    error: null, // Manejo de errores
  }),
  actions: {
    async fetchBusinesses(location) {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(
          `https://api.yelp.com/v3/businesses/search?location=${location}&categories=restaurants&limit=10`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer j3cEDqmhJfemNvM6UoxpmzTI65dPPWjy7z5hspQtPhaTh7wrP3thWI5M0MObGomvPlqGS_b14VsdcM3JGBIlBpGZkua6PoIQgFpTflsY4HPWKdICuZV6aAHIMHBRZ3Yx`, // Reemplaza con tu clave de API
            },
          }
        );

        // Validar respuesta de la API
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parsear datos JSON
        const data = await response.json();
        this.businesses = data.businesses;
      } catch (error) {
        this.error = "Error in charging restaurants";
        console.error(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
});