<template>
    <div class="absolute" :style="position">
      <img :src="target" />
    </div>
  </template>
  
  <script setup lang="ts">
  import target from "../../assets/target.png";
  import { usePosition } from "../../composables/usePosition.ts";
  
  interface Props {
    x: number;
    y: number;
  }
  
  const props = defineProps<Props>();
  const { position } = usePosition(props);
  </script>
  
  <style scoped lang="scss"></style>
  