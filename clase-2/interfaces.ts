type PhoneType = {
  id: string
  name: string
  date: Date
  saludar: () => void
}

interface PhoneInterface {
  id: string
  name: string
  date: Date
  saludar: () => void
}

const PhoneT: PhoneType = {
  id: '1',
  name: 'Nothong',
  date: new Date(),
  saludar: () => {
    console.log('Hola')
  },
}
const PhoneI: PhoneInterface = {
  id: '1',
  name: 'Nothong',
  date: new Date(),
  saludar: () => {
    console.log('Hola')
  },
}

//////////
interface Producto {
  id: string
  name: string
  price: number
  quantity: number
}

interface Zapatilla extends Producto {
  talla: number
}

interface ShoppingCart {
  totalPrice: number
  productos: (Producto | Zapatilla)[]
}

/*
Estas dos interfaces que hacen exactamente lo mismo, conb las interfaces también
podremos escribirlas mas de una vez. y al llamarla se juntaran y se aplicaran los tipos
de las dos llamadas aunque no puedes duplicarse, pero es una mala práctica.

interface carryOps {
  add: (product: Producto) => void
  remove: (id: number) => void
  clear: () => void
}

interface carryOps2 {
  add(product: Producto): void
  remove(id: number): void
  clear(): void
}
*/

const carry: ShoppingCart = {
  totalPrice: 100,
  productos: [
    {
      id: '1',
      name: 'Nothing',
      price: 100,
      quantity: 1,
      talla: 5,
    },
  ],
}

// Las interfaces se utilizan unicamente para objetos.
type color = `#${string}` | `${number},${number},${number}`
type RGB = {
  resultado: color
}

const colorHex: RGB = {
  resultado: '#fff38748',
}

const colorDeciamal: RGB = {
  resultado: '255,255,255',
}
