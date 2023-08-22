type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

// Al acceder a el tipo address, deveremos poner todas sus properties.
const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}

// Type from value, el typeof te permite crear copdigo a partir de codigo que ya tengas.
const address = {
    planet: 'Earth',
    city: 'Madrid'
}

// typeof extrae los tipos de objetos funciones.
type Address = typeof address
const addressGithiub: Address = {
    planet: 'Mars',
    city: 'Github'
}

function createAddres() {
    return {
        planet: 'Earth',
        city: 'Asturias'
    }
}
// Type from function return
// Utility return type, se utiliza para recuperar el tipo de lo que devuelbe una función.
type AddressType = ReturnType<typeof createAddres>
