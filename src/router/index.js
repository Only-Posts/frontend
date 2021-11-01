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
        path: "/auth/:logged",
        name: "auth",
        component: AuthorizationWindow,
        props: true,
        // children: [
        //     {
        //         path: 'signIn',
        //         component: {
        //             name: signInName,
        //             form: signInForm
        //         }
        //     },
        //     {
        //         path: 'logIn',
        //         component: {
        //             name: logInName,
        //             form: logInForm
        //         }
        //     }
        // ]
    },
];

const router = createRouter({
    routes,
    mode: 'history',
    history: createWebHistory()
});

export default router;