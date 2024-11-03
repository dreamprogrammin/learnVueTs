<script setup lang="ts">
import { useProductsPrice } from '@/composables/ProductsPrice'

const { sortedProducts } = useProductsPrice()
</script>

<template>
  <div>1: {{ sortedProducts }}</div>
</template>

<style scoped>
/* Ваши стили */
</style>
