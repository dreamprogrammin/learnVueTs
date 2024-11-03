export function useJson() {
  interface IPerson {
    name: string
    age: number
    city: string
  }

  const person: IPerson = {
    name: 'Alex',
    age: 30,
    city: 'Nur-Sultan',
  }

  const json: string = JSON.stringify(person)

  const obj: IPerson = JSON.parse(json)

  function getPersonData() {
    return {
      json,
      obj,
    }
  }
}
