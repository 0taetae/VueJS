import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserProfile from "@/components/user/UserProfile.vue"
import UserPosts from "@/components/user/UserPosts.vue"
import UserHome from "@/components/user/UserHome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      redirect: {name:'user-home'},
      // 중첩된 라우트
      // children의 path는 /로 시작하면 안된다
      children: [
        {
          // "/user/:id"로 왔을 때 보이도록 
          path: "",
          name: "user-home",
          //name: "user",
          component: UserHome
        },
        {
          path: "profile",
          name: "user-profile",
          component: UserProfile
        },
        {
          path: "posts/:no",
          name: "user-posts",
          component: UserPosts
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
