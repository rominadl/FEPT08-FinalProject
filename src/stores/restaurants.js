import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurants", {
  state: () => ({
    restaurants: null,
    loading: false,
    error: "",
    myList:[],
  }),
  actions: {
    async getRestaurants(location, restType) {
      this.loading = true;
      this.error = "";
      this.restaurants = null;
      try {
        const url = `https://api.yelp.com/v3/businesses/search?categories=restaurants&location=${location}&term=${restType}`;
        const response = await fetch(url, {
          headers: {
            Authorization:
              "Bearer j3cEDqmhJfemNvM6UoxpmzTI65dPPWjy7z5hspQtPhaTh7wrP3thWI5M0MObGomvPlqGS_b14VsdcM3JGBIlBpGZkua6PoIQgFpTflsY4HPWKdICuZV6aAHIMHBRZ3Yx",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }

        const data = await response.json();
        if (!data.businesses || data.businesses.length === 0) {
          this.error = "No se encontraron restaurantes para tu búsqueda.";
          this.restaurants = null;
        } else {
          this.restaurants = data;
        }
      } catch (error) {
        this.error = "Error al obtener los restaurantes. Inténtalo nuevamente.";
      } finally {
        this.loading = false;
      }
    },
    addRestaurantToList(business) {
        // Verifica si el restaurante ya está en la lista
        if (!this.myList.find((item) => item.id === business.id)) {
            this.myList.push(business);
        }
      },
      removeRestaurantFromList(id) {
        this.myList = this.myList.filter((business) => business.id !== id);
      },
    },
    getters: {
      getMyList() {
        return this.myList;
      },
    },
  });