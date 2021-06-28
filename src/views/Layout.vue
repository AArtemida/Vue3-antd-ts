<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view :key="$route.fullPath"></router-view>
    </el-main>
  </el-container>
</template>