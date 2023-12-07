<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-pink-400">
        <MapEdit />
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
import MapEdit from "@/components/edit/MapEdit.vue";
import EditElementView from "@/components/edit/EditElementView.vue";
</script>

<style scoped lang="scss"></style>
