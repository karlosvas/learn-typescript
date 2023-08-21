// Objetos 
let hero = {
    name: 'thor',
    age: 1500
}
// nos crea un contrato y no nos deja acceder a nuevas propiedades
// hero.power = 100
function createHero(name: string, age: number) {
    return { name, age }
}

const thor = createHero('Thor', 1500)