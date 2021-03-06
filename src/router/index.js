import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1,
    props: {
      currentPage: 'page1'
    }
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
    props: {
      currentPage: 'page2'
    }
  }
  ]
})
