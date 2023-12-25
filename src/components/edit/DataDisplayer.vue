<template>
  <div>
    <h2>数据展示区</h2>
    <textarea name="" id="" cols="30" rows="10">
            {{ gameDataC }}
        </textarea
    >
  </div>
  <!-- <div>
    保存到关卡
    <input type="text" v-model="level" class="w-16 border border-black" />
    <button class="bg-white border pl-3 pr-3 m-2" @click="setGame">保存</button>
  </div> -->
</template>

<script setup lang="ts">
import {  computed, ref } from "vue";
import { useMapEditStore } from "../../store/edit/mapEdit";
import { useEditPlayerStore } from "../../store/edit/editPlayer";
import { useEditCargoStore } from "../../store/edit/editCargo";
import { useEditTargetStore } from "../../store/edit/editTarget";
import {  gameData } from "../../game/gameData";

function format(data: { x: number; y: number }[]) {
  return data.map(({ x, y }) => {
    return { x, y };
  });
}
const level = ref(0);

const { map } = useMapEditStore();
const { player } = useEditPlayerStore();
const { cargos } = useEditCargoStore();
const { targets } = useEditTargetStore();

const gameDataC: any = computed(() => {
  return {
    map,
    player,
    cargos: format(cargos),
    targets: format(targets),
  };
});

function setGame() {
  gameData.value.splice(level.value - 1, 1, gameDataC.value);
}
</script>

<style scoped lang="scss"></style>
