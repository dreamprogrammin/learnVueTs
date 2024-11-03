export function useFormatCurrent() {
  const format = new Intl.NumberFormat('kz-KZ', {
    style: 'currency',
    currency: 'KZT',
  })

  const enterFormat = (number: number): string => format.format(number)
  return { enterFormat }
}
