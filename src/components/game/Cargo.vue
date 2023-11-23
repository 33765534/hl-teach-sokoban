<template>
  <div class="absolute" :style="position">
    <img :src="cargo.onTarget ? cargoOnTarget : cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import cargoOnTarget from "../../assets/cargo_on_target.png";
import { usePosition } from "../../composables/usePosition.ts";
import { type Cargo } from "../../store/cargo";

interface Props {
  cargo: Cargo;
}
const props = defineProps<Props>();
const { position } = usePosition(props.cargo);
</script>

<style scoped lang="scss"></style>
