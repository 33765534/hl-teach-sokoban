import { createPinia, setActivePinia } from "pinia"
import { it, describe, expect, beforeEach } from "vitest"
import { useCargoStore } from "../cargo"
import { useTargetStore } from "../target"
import { useMapStore } from "../map"

describe("cargo", () => {

    beforeEach(() => {
        setActivePinia(createPinia())
        let map = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]
        const { setupMap } = useMapStore();
        setupMap(map)
    })

    it("should add a cargo", () => {
        const { addCargo, createCargo, cargos } = useCargoStore();
        addCargo(createCargo({ x: 2, y: 1 }))
        expect(cargos.length).toBe(1);
    })

    describe("on target", () => {
        it("shift in", () => {
            const { addCargo, createCargo, moveCargo } = useCargoStore();
            const cargo = createCargo({ x: 2, y: 1 })
            addCargo(cargo)

            const { addTarget, createTarget } = useTargetStore();
            addTarget(createTarget({ x: 3, y: 1 }))

            moveCargo(cargo, 1, 0);

            expect(cargo.onTarget).toBe(true);
        })
        it("shift out", () => {
            const { addCargo, createCargo, moveCargo } = useCargoStore();
            const cargo = createCargo({ x: 2, y: 1 })
            addCargo(cargo)

            const { addTarget, createTarget } = useTargetStore();
            addTarget(createTarget({ x: 3, y: 1 }))

            moveCargo(cargo, 1, 0);
            moveCargo(cargo, 1, 0);

            expect(cargo.onTarget).toBe(false);
        })
    })
    it("should clean all cargo", () => {
        const { addCargo, createCargo, cargos, cleanAllCargo } = useCargoStore();
        addCargo(createCargo({ x: 2, y: 1 }))

        cleanAllCargo();
        expect(cargos.length).toBe(0);
    })
})