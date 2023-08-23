// Objetos
// Cuando crear tipos propios se hacen en pascalcal EstoEsPascal
import { HeroID } from './union-types'

export type Hero = {
  readonly id?: HeroID
  name: string
  age: number
  isActive?: boolean
}

export let hero: Hero = {
  name: 'thor',
  age: 1500,
}

// Nos crea un contrato y no nos deja acceder a nuevas propiedades
// hero.power = 100
function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return { name, age, isActive: true }
}

// Objet.frezze combierte el codigo a inmutable poor lo que no se podra editar
const thor = Object.freeze(createHero({ name: 'Thor', age: 1500 }))

// Con ?? le damos un valor por defecto.
thor.id ?? 'no tiene id'

// Optional properties, pregunta si la id existe o no
thor.id?.toString()
try {
  // thor.id = 281634712736789126;
  console.log('ID de Thor:', thor.id)
} catch (error) {
  console.error('Es solo de lectura:', error)
}
