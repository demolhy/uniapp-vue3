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
				keepAlive: true
			},
			component: () => import('../views/home.vue')
		},
		{
			path: '/setting',
			name: 'setting',
			meta: {
				keepAlive: true
			},
			component: () => import('../views/setting.vue')
		},
		{
			path: '/search',
			name: 'search',
			meta: {
				keepAlive: true
			},
			component: () => import('../views/search.vue')
		},
		{
			path: '/friend',
			name: 'friend',
			meta: {
				keepAlive: true
			},
			component: () => import('../views/friend.vue')
		},
		{
			path: '/detail',
			name: 'detail',
			meta: {
				keepAlive: true,
				navShow: true
			},
			component: () => import('../views/detail.vue') 
		}
	]
})

export default router