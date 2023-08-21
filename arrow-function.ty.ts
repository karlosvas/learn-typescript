// Callback donde le pasamos como parametro una función

const sayHiFromFunction (fn: (name: string) => void) => {
    return fn('Miguel')
}

const sayHi = (name : string) => {
    console.log(`Hola  ${name}`)
    return name
}

sayHiFromFunction(sayHi)

// sayHiFromFunction((name) => {console.log(`Hola  ${name}`)})

// Tipar arrow functions en Typescript
const sumar = (a: number, b : number): number=>{
    return a+b
}

const restar: (a: number, b : number) => number = (a,b) => {
    return a-b
}