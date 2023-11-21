<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import keeper from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";

const { position } = usePosition();

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
}
onMounted(() => {
  window.addEventListener("keyup", handleKeyup);
});
onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyup);
});
function usePosition() {
  const { player } = usePlayerStore();
  const STEP = 32;
  const position = computed(() => {
    return {
      left: player.x * STEP + "px",
      top: player.y * STEP + "px",
    };
  });
  return { position };
}
</script>

<style scoped lang="scss"></style>
