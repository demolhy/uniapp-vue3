<template>
	<router-view v-slot="{ Component }">
		<keep-alive>
			<transition :name="mainName">
				<component :is="Component" v-if="$route.meta.keepAlive"></component>
			</transition>
		</keep-alive>
		<transition :name="mainName">
			<component :is="Component" v-if="!$route.meta.keepAlive"></component>
		</transition>
	</router-view>
	<transition :name="navName">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
	</transition>
</template>

<script setup>
	console.log(123);
	const isRouterAlive = true
	const mainName = 'fade'
	const active = 0
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
