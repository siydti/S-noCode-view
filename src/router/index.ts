/*
 * @Author: Siydti 1570297098@qq.com
 * @Date: 2024-07-11 14:42:28
 * @LastEditors: Siydti 1570297098@qq.com
 * @LastEditTime: 2024-07-11 16:25:22
 * @FilePath: \S-noCode-view\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // 进度条样式
import { isMobile } from "@/utils/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(isMobile() ? "@/views/HomeMobile.vue" : "@/views/HomeWeb.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start(); // start progress bar
  return true;
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
