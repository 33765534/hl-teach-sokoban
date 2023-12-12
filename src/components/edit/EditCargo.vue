<template>
  <div class="absolute" :style="position" @dblclick="handleDblclick">
    <img :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "@/assets/cargo.png";
import { STEP_EDIT, usePosition } from "@/composables/usePosition.ts";
import { type EditCargo, useEditCargoStore } from "@/store/edit/editCargo.ts";

interface Props {
  cargo: EditCargo;
}
const props = defineProps<Props>();
const { position } = usePosition(props.cargo, STEP_EDIT);

const { removeCargo } = useEditCargoStore();
function handleDblclick() {
  removeCargo(props.cargo);
}
</script>

<style scoped lang="scss"></style>
