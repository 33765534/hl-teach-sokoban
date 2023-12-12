<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-pink-400">
        <MapEdit />
        <EditPlayer />
        <template v-for="cargo in cargos" :key="cargo.id">
          <EditCargo :cargo="cargo" />
        </template>
      </div>
      <div>数据展示区</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EditPlayer from "@/components/edit/EditPlayer.vue";
import MapEdit from "@/components/edit/MapEdit.vue";
import EditElementView from "@/components/edit/EditElementView.vue";
import EditCargo from "@/components/edit/EditCargo.vue";
import { useEditCargoStore } from "@/store/edit/editCargo.ts";

const { cargos } = useEditCargoStore();
</script>

<style scoped lang="scss"></style>
