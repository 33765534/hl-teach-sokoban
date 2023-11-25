import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore, type Map } from "./map"
import { useTargetStore } from "./target";
import { usePlayerStore } from "./player";
import { LevelGameData } from "../game/gameData";

interface Game {
    isGameCompleted: boolean
}

export const useGameStore = defineStore("game", () => {
    const game = reactive<Game>({
        isGameCompleted: false
    })
    function detectionGameCompleted() {
        const { cargos } = useCargoStore();
        game.isGameCompleted = cargos.every(e => e.onTarget)
    }

    function setupGame(levelGameData: LevelGameData) {
        const { addCargo, createCargo } = useCargoStore();
        const { addTarget, createTarget } = useTargetStore();
        const { setupMap } = useMapStore();
        const { player } = usePlayerStore();

        setupMap(levelGameData.map);
        player.x = levelGameData.player.x;
        player.y = levelGameData.player.y;

        levelGameData.cargos.forEach(c => {
            addCargo(createCargo({ x: c.x, y: c.y }))
        });
        levelGameData.targets.forEach(t => {
            addTarget(createTarget({ x: t.x, y: t.y }))
        });

    }
    return {
        game,
        setupGame,
        detectionGameCompleted
    }
})