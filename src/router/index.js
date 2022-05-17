import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			meta: {
				keepAlive: false
			},
			component: import('../views/home.vue')
		},
		{
			path: '/mine',
			name: 'mine',
			meta: {
				keepAlive: true
			},
			component: import('../views/mine.vue')
		}
	]
})

export default router