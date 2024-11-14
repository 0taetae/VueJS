import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import UserHome from "@/components/user/UserHome.vue";
import UserProfile from "@/components/user/UserProfile.vue";
import UserPosts from "@/components/user/UserPosts.vue";
import LoginView from "@/views/LoginView.vue";

const isAuthenticated = true;

// const checkLogin = () => {
//   console.log("토큰 보내서 로그인 여부 확인할거에요.");
//   if (!isAuthenticated) return { name: "login" };
// };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
      redirect: { name: "user-home" },
      // beforeEnter: (to, from) => {
      //   return checkLogin();
      // },
      children: [
        // { path: "", name: "user", component: UserHome },
        { path: "", name: "user-home", component: UserHome },
        { path: "profile", name: "user-profile", component: UserProfile },
        { path: "posts", name: "user-posts", component: UserPosts },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      // beforeEnter: (to, from) => {
      //   if (isAuthenticated) {
      //     console.log("이미 로그인 중입니다.");
      //     return { name: "home" };  // 이동할 페이지 
      //   }
      // },
    },
  ],
});

// Global Router Guard : 모든 곳에서 로그인이 필요할 때
// router.beforeEach((to, from) => {
//   console.log(to);
//   // console.log(from);

//   let isAuthenticated = false;
//   if (!isAuthenticated && to.name !== "login") {
//     console.log("로그인이 필요합니다.");
//     return { name: "login" };
//   }
// });

export default router;
