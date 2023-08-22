// El tipo never se utiliza para funciones que saves que nunca vana  devolber nada

function throwError(message: string): never {
    throw new Error(message)
}

function logMessage(message: string): void {
    console.log(message)
    throw new Error(message)
    process.exit(1)
    //return implicito ( No devuelbe nada )
}

/*
Inferencia de funciones continuas segun el contexto
En este caso Typescript sabe que es un string al estar haciendo el recorrido de un forech,
ya que e sun recorrido de strings, esto pasa con todas las funciones de arrays como .map
*/
const superheroes = ['Batman','La masa', 'fin']
superheroes.forEach(function( superheroes ){
    console.log(superheroes.toUpperCase())
})