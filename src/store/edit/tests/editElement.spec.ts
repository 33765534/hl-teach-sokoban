import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useMapEditStore } from "../mapEdit";
import { cargoEditElement, floorEditElement, playerEditElement, targetEditElement, useEditElementStore, wallEditElement } from "../editElement";
import { MapTile } from "../../map";
import { useEditPlayerStore } from "../editPlayer";
import { useEditCargoStore } from "../editCargo";
import { useEditTargetStore } from "../editTarget";

describe("editElement", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        const { initMap } = useMapEditStore();
        initMap()
    })
    it("should change to wall when current selected element is wall", () => {
        const { map } = useMapEditStore();
        const { getCurrentSelectedEditElement,
            setCurrentSelectedEditElement } = useEditElementStore();
        setCurrentSelectedEditElement(wallEditElement);

        getCurrentSelectedEditElement()!.execute({ x: 1, y: 1 })

        expect(map[1][1]).toBe(MapTile.WALL);
    })
    it("should change to floor when current selected element is floor", () => {
        const { map } = useMapEditStore();
        const { getCurrentSelectedEditElement,
            setCurrentSelectedEditElement } = useEditElementStore();
        setCurrentSelectedEditElement(floorEditElement);

        getCurrentSelectedEditElement()!.execute({ x: 1, y: 1 })

        expect(map[1][1]).toBe(MapTile.FLOOR);
    })

    it("should update position of player when current selected element is player", () => {
        const { player } = useEditPlayerStore();
        const { getCurrentSelectedEditElement,
            setCurrentSelectedEditElement } = useEditElementStore();
        setCurrentSelectedEditElement(playerEditElement);

        const position = {
            x: 1,
            y: 1,
        }
        getCurrentSelectedEditElement()!.execute(position)

        expect(player.x).toBe(position.x);
        expect(player.y).toBe(position.y);
    })

    it("should add a cargo when current selected element is cargo", () => {
        const { cargos } = useEditCargoStore();
        const { getCurrentSelectedEditElement,
            setCurrentSelectedEditElement } = useEditElementStore();
        setCurrentSelectedEditElement(cargoEditElement);

        const position = {
            x: 1,
            y: 1,
        }
        getCurrentSelectedEditElement()!.execute(position)

        expect(cargos[0].x).toBe(position.x);
        expect(cargos[0].y).toBe(position.y);
    })
    it("should add a target when current selected element is target", () => {
        const { targets } = useEditTargetStore();
        const { getCurrentSelectedEditElement,
            setCurrentSelectedEditElement } = useEditElementStore();
        setCurrentSelectedEditElement(targetEditElement);

        const position = {
            x: 1,
            y: 1,
        }
        getCurrentSelectedEditElement()!.execute(position)

        expect(targets[0].x).toBe(position.x);
        expect(targets[0].y).toBe(position.y);
    })
})