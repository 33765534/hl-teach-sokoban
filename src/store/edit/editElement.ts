import { defineStore } from "pinia";
import { Position } from "../../composables/usePosition";
import { MapTile } from "../map";
import { useMapEditStore } from "./mapEdit";
import playerImg from "@/assets/keeper.png";
import wallImg from "@/assets/wall.png";
import floorImg from "@/assets/floor.png";
import cargoImg from "@/assets/cargo.png";
import targetImg from "@/assets/target.png";
import { useEditPlayerStore } from "./editPlayer";
import { ref } from "vue";
import { useEditCargoStore } from "./editCargo";
import { useEditTargetStore } from "./editTarget";

export interface EditElement {
    name: string;
    img: string;
    execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
    name: '墙',
    img: wallImg,
    execute(position) {
        const { map } = useMapEditStore();
        map[position.y][position.x] = MapTile.WALL
    }
}

export const floorEditElement: EditElement = {
    name: '地板',
    img: floorImg,
    execute(position) {
        const { map } = useMapEditStore();
        map[position.y][position.x] = MapTile.FLOOR
    }
}

export const playerEditElement: EditElement = {
    name: '玩家',
    img: playerImg,
    execute(position) {
        const { player } = useEditPlayerStore();
        player.x = position.x;
        player.y = position.y;
    }
}

export const cargoEditElement: EditElement = {
    name: '箱子',
    img: cargoImg,
    execute(position) {
        const { createCargo, addCargo } = useEditCargoStore();
        addCargo(createCargo({ x: position.x, y: position.y }))
    }
}
export const targetEditElement: EditElement = {
    name: '放置点',
    img: targetImg,
    execute(position) {
        const { createTarget, addTarget } = useEditTargetStore();
        addTarget(createTarget({ x: position.x, y: position.y }))
    }
}

export const useEditElementStore = defineStore("edit-element", () => {
    let currentSelectedEditElement = ref<EditElement | undefined>();
    function getCurrentSelectedEditElement() {
        return currentSelectedEditElement.value;
    }
    function setCurrentSelectedEditElement(editElement: EditElement) {
        currentSelectedEditElement.value = editElement;
    }

    return {
        getCurrentSelectedEditElement,
        setCurrentSelectedEditElement
    }
})