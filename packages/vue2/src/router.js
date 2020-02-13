import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/vue2',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
