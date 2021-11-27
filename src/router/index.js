import { createWebHistory, createRouter } from "vue-router";
import StartPage from "@/views/StartPage";
import AuthorizationWindow from "@/views/AuthorizationWindow";
import MainPage from "@/views/MainPage";
import SignIn from "@/components/SignIn";
import LogIn from "@/components/LogIn";

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
        children: [
            {
                path: "/auth/signIn",
                component: SignIn,
            },
            {
                path: "/auth/logIn",
                component: LogIn
            }
        ]
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