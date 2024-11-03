<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
</script>

<template>
  <div class="ajv-form">
    <div>ajvForm</div>
    <el-button @click="$router.back()" type="primary" :icon="ArrowLeft"
      >На главную</el-button
    >
  </div>
</template>

<style scoped>
.ajv-form {
  display: flex;
}
</style>
