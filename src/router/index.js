import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import NewPost from '../views/Posts/NewPost.vue'
import DetailsPost from '../views/Posts/DetailsPostView.vue'
import Users from '../views/Users/Users.vue'
import AddUser from '../views/Users/AddUserView.vue'
import UserDetailsView from '../views/Users/UserDetails.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-post/:id',
    name: 'add-post',
    component: NewPost
  },
  {
    path: '/posts/:id',
    name: 'post-details',
    component: DetailsPost,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUser,
  },
  {
    path: '/users/:id',
    name: 'user-details',
    component: UserDetailsView,
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;