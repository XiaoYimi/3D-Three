import { createRouter, createWebHistory } from 'vue-router';

import ViewRoutesMap  from 'viewroutes/index'

const StaticRoutes = [
	{
		name: '首页',
		path: '/',
		component: () => ViewRoutesMap.homepage,
		meta: {title: '首页'}
	}
];
const DymaicRoutes = [];


const newRouter = () => createRouter({
	history: createWebHistory(),
	routes: StaticRoutes
})

const router = newRouter();

export default router;