import { createWebHistory, createRouter } from "vue-router";
import StartPage from "@/views/StartPage";
import AuthorizationWindow from "@/views/AuthorizationWindow";

const routes = [
    {
        path: "/",
        name: "start",
        component: StartPage,
    },
    {
        path: "/auth",
        name: "auth",
        component: AuthorizationWindow,
        props: true
    },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router;