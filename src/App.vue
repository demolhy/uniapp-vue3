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
	<transition :name="mainName">
		<van-tabbar v-if="!$route.meta.navShow" v-model="active" @change="onChange" route>
			<van-tabbar-item name="home" icon="home-o" replace to="/home">首页</van-tabbar-item>
			<van-tabbar-item name="search" icon="search" replace to="/search">搜索</van-tabbar-item>
			<van-tabbar-item name="friend" icon="friends-o" replace to="/friend">通讯录</van-tabbar-item>
			<van-tabbar-item name="setting" icon="setting-o" replace to="/setting">设置</van-tabbar-item>
		</van-tabbar>
	</transition>
</template>

<script setup>
	console.log(123);
	const isRouterAlive = true
	const mainName = 'fade'
	const active = 'home'
	const onChange = index => {
		console.log(index);
	}
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
