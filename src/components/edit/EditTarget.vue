<template>
  <div class="absolute" :style="position" @dblclick="handleTarget">
    <img :src="target" />
  </div>
</template>

<script setup lang="ts">
import target from "../../assets/target.png";
import { STEP_EDIT2, usePosition } from "../../composables/usePosition.ts";
import { type EditTarget } from "@/store/edit/editTarget.ts";
import { useEditTargetStore } from "../../store/edit/editTarget";

interface Props {
  target: EditTarget;
}

const props = defineProps<Props>();
const { position } = usePosition(props.target, STEP_EDIT2);
const { removeTarget } = useEditTargetStore();

function handleTarget() {
  removeTarget(props.target);
}
</script>

<style scoped lang="scss"></style>
