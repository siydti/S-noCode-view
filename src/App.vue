<!--
 * @Description: 请填写简介
 * @Author: 李晨熙
 * @Date: 2024-01-02 16:10:23
-->
<script setup lang="ts">
import initFontSize from "./utils/initFontSize";
initFontSize();
</script>

<template>
  <router-view #="{ Component, route }">
    <component :is="Component" :key="route.path"></component>
  </router-view>
</template>

<style></style>
