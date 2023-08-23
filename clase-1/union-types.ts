//##Template union types
import { Hero } from './objetos.ty'

// Intersection types
interface extendHero extends Hero {
  powerScale?: HeroPowerScale
}

function createHeros(hero: Hero): extendHero {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  }
}

export type HeroID = `${string}-${string}-${string}-${string}-${string}`
export type HeroPowerScale = 'local' | 'planetario' | 'galactico'

const batman = createHeros({ name: 'batnman', age: 25 })
batman.powerScale = 'planetario'

// De esta manera podremos asignarle mas de un tipo
let ann: number | string
ann = 123223

// Encadenar properties
type Hexadecimal = {
  data: string
}
type Color = {
  num: number
}

type HexadecimalColor = Hexadecimal & Color

const colores: HexadecimalColor = {
  data: '#',
  num: 12342,
}

console.log(colores.data + colores.num)
