<template>
  <div>
    <h3>元素区域</h3>

    <div class="flex space-x-2 m-2">
      <h4>地图：</h4>
      <EditElementView :editElement="wallEditElement" />
      <EditElementView :editElement="floorEditElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditElementView from "./EditElement.vue";
import {
  floorEditElement,
  wallEditElement,
} from "../../store/edit/editElement";
</script>

<style scoped lang="scss"></style>
