<script setup lang="ts">
import { useHighOrder } from '@/composables/highOrder'
import { ref } from 'vue'

const valueNumber = ref<number>(2)

function numberChange(): void {
  pushSum(valueNumber.value)
}

const { dubbleNumber, evenNumber, sum, num, pushSum } = useHighOrder()
</script>

<template>
  <div>
    <input type="number" v-model="valueNumber" @click="numberChange" />
    {{ valueNumber }}
    <h2>Стоковый массив {{ num }}</h2>
    <h3>Удвоение числа {{ dubbleNumber }}</h3>
    <h3>Четные числа {{ evenNumber }}</h3>
    <h3>Числа {{ sum }}</h3>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
