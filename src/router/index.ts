import { createRouter, createWebHashHistory } from "vue-router";
import Game from "@/view/Game.vue";
import Edit from "@/view/Edit.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Game,
        },
        {
            path: "/game",
            component: Game,
            name: "Game"
        },
        {
            path: "/edit",
            component: Edit,
            name: "Edit"
        },
    ]
})
