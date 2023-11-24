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

const { cargos, addCargo, createCargo } = useCargoStore();
addCargo(createCargo({ x: 2, y: 2 }));

const { targets,addTarget,createTarget } = useTargetStore();
const { game } = useGameStore();

// 创建放置点
addTarget(createTarget({ x: 4, y: 3 }))
</script>

<style scoped lang="scss"></style>
