import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import categoryEdit from '../views/categoryEdit.vue'
import categoryList from '../views/categoryList.vue'
import itemEdit from '../views/ItemEdit.vue'
import itemList from '../views/ItemList.vue'
import heroEdit from '../views/heroEdit.vue'
import heroList from '../views/heroList.vue'

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
    },
  
    {
      path:"/items/create",
      component:itemEdit
    },{
      path:"/items/edit/:id",
      component:itemEdit,
      props:true
    },
    {
      path:"/items/list",
      component:itemList
    },

    {
      path:"/heroes/create",
      component:heroEdit
    },{
      path:"/heroes/edit/:id",
      component:heroEdit,
      props:true
    },
    {
      path:"/heroes/list",
      component:heroList
    }
  ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
