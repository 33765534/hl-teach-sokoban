<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import keeper from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { usePosition } from "../../composables/usePosition.ts";
import { useGameStore } from "../../store/game";

const { player } = usePlayerStore();
const { position } = usePosition(player);
const { detectionGameCompleted } = useGameStore();

function handleKeyup(e) {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  } = usePlayerStore();
  switch (e.code) {
    case "ArrowLeft":
      movePlayerToLeft();
      break;
    case "ArrowRight":
      movePlayerToRight();
      break;
    case "ArrowUp":
      movePlayerToUp();
      break;
    case "ArrowDown":
      movePlayerToDown();
      break;
  }

  detectionGameCompleted();
}
onMounted(() => {
  window.addEventListener("keyup", handleKeyup);
});
onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyup);
});
</script>

<style scoped lang="scss"></style>
