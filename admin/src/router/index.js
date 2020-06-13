import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import categoryEdit from '../views/categoryEdit.vue'
import categoryList from '../views/categoryList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[{
      path:"/categories/create",
      component:categoryEdit
    },{
      path:"/categories/edit/:id",
      component:categoryEdit,
      props:true
    },
    {
      path:"/categories/list",
      component:categoryList
    }]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
