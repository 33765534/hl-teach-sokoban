<template>
  <div @click="handleClick()">
    <img :src="editElement?.img" />
  </div>
</template>

<script setup lang="ts">
import { type EditElement, useEditElementStore } from "../../store/edit/editElement";

interface Props {
  editElement: EditElement;
}

const props = defineProps<Props>();
const { setCurrentSelectedEditElement } = useEditElementStore();
function handleClick() {
  document.body.style.cursor = `url(${props.editElement?.img}),auto`;
  setCurrentSelectedEditElement(props.editElement);
}
</script>

<style scoped lang="scss"></style>
