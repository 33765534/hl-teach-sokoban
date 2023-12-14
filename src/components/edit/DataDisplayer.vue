<template>
  <div>
    <h2>数据展示区</h2>
    <textarea name="" id="" cols="30" rows="10">
            {{ gameData }}
        </textarea
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMapEditStore } from "../../store/edit/mapEdit";
import { useEditPlayerStore } from "../../store/edit/editPlayer";
import { useEditCargoStore } from "../../store/edit/editCargo";
import { useEditTargetStore } from "../../store/edit/editTarget";

function format(data: { x: number; y: number }[]) {
  return data.map(({x, y}) => {
    return { x, y };
  });
}

const { map } = useMapEditStore();
const { player } = useEditPlayerStore();
const { cargos } = useEditCargoStore();
const { targets } = useEditTargetStore();

const gameData = computed(() => {
  return {
    map,
    player,
    cargos: format(cargos),
    targets: format(targets),
  };
});
</script>

<style scoped lang="scss"></style>
