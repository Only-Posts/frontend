import { createWebHistory, createRouter } from "vue-router";
// import store from "../store/index.js"
import StartPage from "@/views/StartPage";
import AuthorizationWindow from "@/views/AuthorizationWindow";
import MainPage from "@/views/MainPage";
import SignIn from "@/components/SignIn";
import LogIn from "@/components/LogIn";
import Help from "@/components/Help";
import UserProfile from "@/components/UserProfile";
import UserHistory from "@/components/UserHistory";

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
    {
        path: "/main",
        name: "main",
        component: MainPage,
        props: true,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/main/profile',
                name: "profile",
                component: UserProfile
            },
            {
                path: '/main/history',
                name: "history",
                component: UserHistory
            },
            {
                path: '/main/help',
                name: "help",
                component: Help
            }]
    },
];

const router = createRouter({
    routes,
    mode: 'history',
    history: createWebHistory()
});
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
// })
export default router;