<script setup lang="ts">
import { useFormatCurrent } from '@/composables/formatCurrent'
import { ElInput } from 'element-plus'
import { ref, type Ref } from 'vue'

const { enterFormat } = useFormatCurrent()

const amount: Ref<number> = ref<number>(0)

console.log(enterFormat(amount.value))
</script>

<template>
  <div>
    <el-input v-model.number="amount" />

    <h3>Валюта которую вы ввели {{ enterFormat(amount) }}</h3>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
