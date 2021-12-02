import {createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import PictureDetails from "./components/PictureDetails.vue";
import Pictures from "./components/Pictures.vue";
import NotFound from "./components/NotFound.vue";
import CommentCreate from "./components/CommentCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", component: Home},
        {
            path: "/account",
            component: Account,
            beforeEnter(to, from, next) {
              if (myStore.state.token) {
                next();
              } else {
                next("/login");
              }
            },
          },
        {path: "/login", component: Login},
        {path: "/pictures", component: Pictures},
        {path: "/picture/:pk", 
            component: PictureDetails, 
            children:[{path: "comment", component: CommentCreate}]},
        {path: "/signup", component: Signup},
        {path: "/:invalidroute(.*)", component: NotFound},
    ],
});

export default router;