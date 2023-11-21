<template>
  <Map />
  <Player />
  <template v-for="item in cargos">
    <Cargo :x="item.x" :y="item.y" />
  </template>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo.ts";

const { cargos } = useCargoStore();
</script>

<style scoped lang="scss"></style>
