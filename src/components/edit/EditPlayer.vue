<template>
  <div class="absolute" :style="position">
    <img :src="keeper" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import keeper from "@/assets/keeper.png";
import { usePosition, STEP_EDIT2 } from "@/composables/usePosition.ts";
import { useEditPlayerStore } from "@/store/edit/editPlayer";

const { player } = useEditPlayerStore();

const { position } = usePosition(player, STEP_EDIT2);
</script>

<style scoped lang="scss"></style>
