import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import DataComponent from "@/pages/DataComponent.vue";
import MethodComponent from "@/pages/MethodComponent.vue";
import ModelComponent from "@/pages/ModelComponent.vue";
import ListComponent from "@/pages/ListComponent.vue";
import ConditionalComponent from "@/pages/ConditionalComponent.vue";
import SlotComponent from "@/pages/SlotComponent.vue";
import example from "@/components/example.vue";

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
    {
      path: '/slot',
      name: 'slot',
      component: SlotComponent
    },
    {
      path: '/ololo',
      name: 'ololo',
      component: example
    },
  ]
})
