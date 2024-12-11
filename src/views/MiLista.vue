<template>
  <div></div>
</template>
<script>
import { useMiListaStore } from "../stores/miLista";

export default {
  name: "MiLista",
  setup() {
    const store = useMiListaStore();
    return { lista: store.lista, eliminar: store.eliminar };
  },
};
</script>
<style></style>
