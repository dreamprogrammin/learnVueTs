<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'

const myMap = new Map()

const name = myMap.set('name', 'Alex')
const age = myMap.set('age', 30)
</script>

<template>
  <div>name {{ name.get('name') }}</div>
  <div>age {{ age }}</div>
  <el-button @click="$router.back()" type="primary" :icon="ArrowLeft"
    >На главную</el-button
  >
</template>

<style scoped>
/* Ваши стили */
</style>
