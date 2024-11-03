export function useFunctionHight() {
  const arr: Array<number> = [1, 2, 3, 4, 5, 6]

  function forArr(arr: Array<number>, callback: (item: number) => void): void {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i])
    }
  }

  function parrametr(item: number): void {
    console.log(item)
  }

  forArr(arr, parrametr)
}
