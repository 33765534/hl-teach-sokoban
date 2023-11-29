<template>
  <Map></Map>
  <template v-for="item in targets">
    <Target :x="item.x" :y="item.y" />
  </template>
  <Player />
  <template v-for="item in cargos" :key="item.id">
    <Cargo :cargo="item" />
  </template>
  <div v-if="game.isGameCompleted">
    <button @click="handleToNextLevel">下一关</button>
  </div>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import Target from "./Target.vue";
import { useCargoStore } from "../../store/cargo.ts";
import { useTargetStore } from "../../store/target.ts";
import { useGameStore } from "../../store/game.ts";
import { gameData } from "../../game/gameData";

const { game, setupGame, toNextLevel } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTargetStore();

setupGame(gameData);

function handleToNextLevel() {
  toNextLevel();
}
</script>

<style scoped lang="scss"></style>
