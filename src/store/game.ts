import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore } from "./map"
import { useTargetStore } from "./target";
import { usePlayerStore } from "./player";
import { LevelGameData } from "../game/gameData";

interface Game {
    isGameCompleted: boolean;
    level: number
}

export type GameData = LevelGameData[];

export const useGameStore = defineStore("game", () => {
    const game = reactive<Game>({
        isGameCompleted: false,
        level: 1
    })

    let _gameData: GameData;
    function detectionGameCompleted() {
        const { cargos } = useCargoStore();
        game.isGameCompleted = cargos.every(e => e.onTarget)
    }

    function setupGame(gameData: GameData) {
        _gameData = gameData;
        setupLevel();
    }

    function toNextLevel() {
        game.level += 1;
        game.isGameCompleted = false
        setupLevel();
    }

    function setupLevel() {
        const levelGameData = _gameData[game.level - 1]
        const { addCargo, createCargo, cleanAllCargo } = useCargoStore();
        const { addTarget, createTarget, cleanAllTarget } = useTargetStore();
        const { setupMap } = useMapStore();
        const { player } = usePlayerStore();

        setupMap(levelGameData.map);
        player.x = levelGameData.player.x;
        player.y = levelGameData.player.y;
        cleanAllCargo();
        levelGameData.cargos.forEach(c => {
            addCargo(createCargo({ x: c.x, y: c.y }))
        });
        cleanAllTarget();
        levelGameData.targets.forEach(t => {
            addTarget(createTarget({ x: t.x, y: t.y }))
        });
    }
    return {
        game,
        toNextLevel,
        setupGame,
        detectionGameCompleted
    }
})