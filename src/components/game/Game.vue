<template>
  <Map></Map>
  <template v-for="item in targets">
    <Target :x="item.x" :y="item.y" />
  </template>
  <Player />
  <template v-for="item in cargos">
    <Cargo :cargo="item" />
  </template>
  <div v-if="game.isGameCompleted">
    <button>下一关</button>
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
import { levelGameData } from "../../game/gameData";

const { setupGame } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTargetStore();
const { game } = useGameStore();


setupGame(levelGameData);
</script>

<style scoped lang="scss"></style>
