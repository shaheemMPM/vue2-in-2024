import Vue from "vue";
import Router from 'vue-router';
import SkillsComponent from './components/SkillsComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SkillsComponent',
      component: SkillsComponent
    },
    {
      path: '/about',
      name: 'AboutComponent',
      component: AboutComponent
    },
  ]
})