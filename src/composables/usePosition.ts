import { computed } from "vue"

export interface Position {
    x: number,
    y: number
}

export const STEP_GAME = 32;
export const STEP_EDIT = 33.5;
export const STEP_EDIT2 = 34;
export function usePosition(pos: Position, setp: number = STEP_GAME) {
    const position = computed(() => {
        return {
            left: pos.x * setp + "px",
            top: pos.y * setp + "px",
        };
    });
    return { position };
}