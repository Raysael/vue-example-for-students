import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import DataComponent from "@/components/DataComponent.vue";
import MethodComponent from "@/components/MethodComponent.vue";
import ModelComponent from "@/components/ModelComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import ConditionalComponent from "@/components/ConditionalComponent.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data',
      name: 'data',
      component: DataComponent
    },
    {
      path: '/method',
      name: 'method',
      component: MethodComponent
    },
    {
      path: '/model',
      name: 'model',
      component: ModelComponent
    },
    {
      path: '/list',
      name: 'list',
      component: ListComponent
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: ConditionalComponent
    },
  ]
})
