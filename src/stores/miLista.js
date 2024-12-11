import { defineStore } from "pinia";

export const useMiListaStore = defineStore("miLista", {
  state: () => ({
    lista: [],
  }),
  actions: {
    agregar(restaurante) {
      if (!this.lista.some((r) => r.id === restaurante.id)) {
        this.lista.push(restaurante);
      }
    },
    eliminar(id) {
      this.lista = this.lista.filter((r) => r.id !== id);
    },
  },
});
