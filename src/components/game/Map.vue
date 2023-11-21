<template>
  <div>
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wall" />
        </template>
        <template v-else-if="map[i][j] === MapTile.FLOOR">
          <img :src="floor" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapStore, MapTile } from "../../store/map";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";

const { map } = useMapStore();
</script>

<style scoped lang="scss"></style>
