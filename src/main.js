// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VRouter from 'vue-router'
import VResource from 'vue-resource'


import MenuPage from './components/menu'
import DataChart from './components/dataChart'


Vue.use(VRouter),
Vue.use(VResource)



let router=new VRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:MenuPage
		},
		{
			path:'/dataChart',
			component:DataChart
		}

	]
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
