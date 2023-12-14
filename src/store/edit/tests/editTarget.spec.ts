import { beforeEach, describe, expect, it } from "vitest";
import { useEditTargetStore } from "../editTarget";
import { createPinia, setActivePinia } from "pinia";


describe("editTarget", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })
    it("should remove a target", () => {
        const { removeTarget, addTarget, createTarget, targets } = useEditTargetStore();

        const target = createTarget({ x: 1, y: 1 });
        addTarget(target);

        removeTarget(target);

        expect(targets.length).toBe(0);

    })
})