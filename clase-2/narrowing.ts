// Narrrowing es asegurarse de que vas periendo los tipos que no puede utilizar esn ese punto.
// Asegurarse de que tengo el tipo corerrecto cuiando se compila la función
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto == 'string') {
    return objeto.length
  }
  return objeto.toString()
}

console.log(mostrarLongitud('1'))

interface Fin {
  name: 'fin'
  lastname: string
  age: number
  sword: () => void
}

interface Jake {
  name: 'jake'
  lastname: string
  age: number
  extend: () => void
}

type Personaje = Fin | Jake
// function play(personaje: Personaje) {
//   if (personaje.name == 'jake') {
//     personaje.extend()
//   }
//   if (personaje.name == 'fin') {
//     personaje.sword()
//   }
// }

// Forma correcta ##Type guard.
// Comprueba si el personaje es el que dice ser, determina si es el personajke buscado. Esto hay que evitarlo
// siempre que se pueda.
function isFin(personaje: Personaje): personaje is Fin {
  return (personaje as Fin).sword !== undefined
}
function isJake(personaje: Personaje): personaje is Jake {
  return (personaje as Jake).extend() !== undefined
}
//

function play(personaje: Personaje) {
  if (isFin(personaje)) {
    personaje.sword()
  }
  if (isJake(personaje)) {
    personaje.extend()
  }
}
