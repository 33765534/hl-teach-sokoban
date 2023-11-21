<template>
  <div class="absolute" :style="position">
    <img :src="cargo" />
  </div>
</template>

<script setup lang="ts">
import cargo from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePosition.ts";

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();
const { position } = usePosition(props);
</script>

<style scoped lang="scss"></style>
