<template>
  <div
    class="border border-white"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
  >
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src="wallImg" draggable="false" />
    </template>
    <template v-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="floorImg" draggable="false" />
    </template>
  </div>
</template>

<script setup lang="ts">
import wallImg from "@/assets/wall.png";
import floorImg from "@/assets/floor.png";
import { MapTile } from "@/store/map";
import { useMapEditStore } from "@/store/edit/mapEdit.ts";
import { useEditElementStore } from "../../store/edit/editElement";
import { useDrag } from "../../composables/useDrag";

const { startDrag, stopDrag, isDragging } = useDrag();

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();

const { map } = useMapEditStore();
const { getCurrentSelectedEditElement } = useEditElementStore();
function handleClick() {
  getCurrentSelectedEditElement().execute(props);
}

//鼠标抬起
function handleMouseUp() {
  stopDrag();
  window.removeEventListener("mouseup", handleMouseUp);
}
// 鼠标按下
function handleMouseDown() {
  startDrag();
  window.addEventListener("mouseup", handleMouseUp);
}

// 鼠标移动
function handleMouseMove() {
  if (isDragging()) {
    getCurrentSelectedEditElement()?.execute(props);
  }
}
</script>

<style scoped lang="scss"></style>
