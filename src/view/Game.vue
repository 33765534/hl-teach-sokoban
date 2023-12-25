<template>
  <div class="bg-custom">
    <div class="relative">
      <Map></Map>
      <template v-for="item in targets">
        <Target :x="item.x" :y="item.y" />
      </template>
      <Player />
      <template v-for="item in cargos" :key="item.id">
        <Cargo :cargo="item" />
      </template>
      <div v-if="game.isGameCompleted" class="absolute ml-16 mt-5">
        <button @click="handleToNextLevel" class="bg-next"></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from "@/components/game/Map.vue";
import Player from "@/components/game/Player.vue";
import Cargo from "@/components/game/Cargo.vue";
import Target from "@/components/game/Target.vue";
import { useCargoStore } from "@/store/cargo.ts";
import { useTargetStore } from "@/store/target.ts";
import { useGameStore } from "@/store/game.ts";
import { gameData } from "@/game/gameData";

const { game, setupGame, toNextLevel } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTargetStore();

setupGame(gameData.value);

function handleToNextLevel() {
  toNextLevel();
}
</script>

<style scoped>
.bg-custom {
  background-image: url("@/assets/bg.jpg");
  height: 450px;
  width: 600px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-next {
  background-image: url("@/assets/next.png");
  width: 100px;
  height: 33px;
  border-radius: 20px;
}
</style>
