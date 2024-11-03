<script setup lang="ts">
import { useJson } from '@/composables/json'

const { json, obj } = useJson()
</script>

<template>
  <div>stringiFy {{ typeof json }}</div>
  <div>object {{ typeof obj }}</div>
</template>

<style scoped>
/* Ваши стили */
</style>
