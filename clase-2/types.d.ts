export interface Producto {
  id: string
  name: string
  price: number
  quantity: number
}

export interface Zapatilla extends Producto {
  talla: number
}

export interface ShoppingCart {
  totalPrice: number
  productos: (Producto | Zapatilla)[]
}

// Los puntos .d.ts se utiliza como convección donde guardar las definiciones.
// Todo declaraciones, interfaces,types (no código), al importarlo deveremos utilizar el código:
// import { type Producto, Zapatilla, ShoppingCat } from './file.d'
