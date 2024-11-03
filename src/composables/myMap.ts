export function UseMyMap() {
  const myMap = new Map()

  const name = myMap.set('name', 'Alex')
  const age = myMap.set('age', 30)

  return {
    name,
    age,
    myMap,
  }
}
