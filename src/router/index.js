import { createWebHistory, createRouter } from "vue-router";
import StartPage from "@/views/StartPage";
import AuthorizationWindow from "@/views/AuthorizationWindow";
import MainPage from "@/views/MainPage";

const routes = [
    {
        path: "/",
        name: "start",
        component: StartPage,
    },
    {
        path: "/auth/:logged",
        name: "auth",
        component: AuthorizationWindow,
        props: true
    },
    // TODO: в зависимости от выбора кнопки отобрать компонент авторизации или регистрации
    {
        path: "/main",
        name: "main",
        component: MainPage,
        props: true
    }
//    TODO: добавлять в путь идентификатор пользователя в качестве пропа
];

const router = createRouter({
    routes,
    mode: 'history',
    history: createWebHistory()
});

export default router;