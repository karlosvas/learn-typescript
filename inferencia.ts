// Typado de datos TTypescript no se ejecuta en tiempo de ejecución

// 1 Forma declarando tipos en el parametro
function saludar({ name, age }: {name: string, age :number}){
     console.log(`Hola ${name}, tienes ${age} años`)
}

saludar({ name : 'Pepe', age: 19})

// 2 Forma llamando a un objeto
function saludar2(persona: {name : string, age : number}){
     const { name,age } = persona
     console.log(`Hola ${name}, tienes ${age} años`)
}

saludar2({ name : 'Pepe', age: 19})

// 3 Forma automaticamente Typescript a detectado que la funcion edevuelbe un number
function saludar3({ name, age }: {name: string, age :number}){
     console.log(`Hola ${name}, tienes ${age} años`)
     return age
}

let ageUser: number = saludar3({ name : 'Pepe', age: 19})

//tambien podremos declarar de que tipo deve devolber en el paramareo
function saludar4({ name, age }: {name: string, age :number}): string{
     console.log(`Hola ${name}, tienes ${age} años`)
     return age
}

let ageUser2: number = saludar3({ name : 'Pepe', age: 19})