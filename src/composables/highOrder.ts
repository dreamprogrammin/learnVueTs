import { computed, ref } from 'vue'

export function useHighOrder() {
  const num = ref<Array<number>>([1, 2, 3, 4, 5, 6])

  function pushSum(item: number): void {
    num.value.push(item)
  }

  const dubbleNumber = computed((): number[] =>
    num.value.map(index => index * 2),
  )

  const evenNumber = computed((): number[] =>
    num.value.filter(index => index % 2 === 0),
  )

  const sum = computed((): number =>
    num.value.reduce((acc, index) => acc + index, 2),
  )
  return {
    num,
    dubbleNumber,
    evenNumber,
    sum,
    pushSum,
  }
}
