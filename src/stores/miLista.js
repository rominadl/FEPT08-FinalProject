import { defineStore } from "pinia";

export const useMiListaStore = defineStore("miLista", {
  state: () => ({
    listSelRestaurants: [],
  }),
  actions: {
    // si le das a agregar a mi lista el selectedRestaurants se vuelve true
    // addFav(restaurant){}
    // Restaurant.fav = true
    //aquí se hace el fetch
    addRestaurants(restaurant) {
      if (!this.listSelRestaurants.some((r) => r.id === restaurant.id)) {
        this.listSelRestaurants.push(restaurant);
      }
    },
    eliminar(id) {
      this.listSelRestaurants = this.listSelRestaurants.filter((r) => r.id !== id);
    },
  },
  getters: {
    //Obtener solo rest seleccionades
    selectedRestaurants() {
      return state.listSelRestaurants;
    },
},
});
