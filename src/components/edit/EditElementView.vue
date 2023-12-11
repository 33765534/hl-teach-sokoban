<template>
  <div>
    <h3>元素区域</h3>
    <div class="m-2 space-y-2">
      <div>
        row:<input type="text" class="border border-black" v-model="row" />
      </div>
      <div>
        col:<input type="text" class="border border-black" v-model="col" />
      </div>
    </div>

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
import { useMapEditStore } from "../../store/edit/mapEdit";
import { watchEffect, toRefs } from "vue";

const { initMap, updateMapRow, updateMapCol } = useMapEditStore();
const { row, col } = toRefs(useMapEditStore());
initMap();

watchEffect(() => {
  if (!row.value) return;
  updateMapRow();
});

watchEffect(() => {
  if (!col.value) return;
  updateMapCol();
});
</script>

<style scoped lang="scss"></style>
