<script setup lang="ts">
import { useMathRandom } from '@/composables/mathRandom'
import { ElButton } from 'element-plus'
import { ref } from 'vue'

const { randomNumber } = useMathRandom()

const getRandom = ref<number | null>(null)

function getNumber(): void {
  getRandom.value = randomNumber(1, 100)
}
</script>

<template>
  <div>
    <el-button @click="getNumber">Random</el-button>

    {{ getRandom }}
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
