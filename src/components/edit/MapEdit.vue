<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <MapBlock :x="j" :y="i" />
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMapEditStore } from "@/store/edit/mapEdit.ts";
import MapBlock from "./MapBlock.vue";
const { map } = useMapEditStore();
</script>

<style scoped lang="scss"></style>
