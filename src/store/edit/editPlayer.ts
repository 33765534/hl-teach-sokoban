import { defineStore } from "pinia";
import { reactive } from "vue";

interface EditPlayer {
    x: number;
    y: number;
}
export const useEditPlayerStore = defineStore("edit-player", () => {
    const player = reactive<EditPlayer>({
        x: -1,
        y: -1,
    })

    return { player }
})