class Mosnter {
  readonly name: string // Solo se puede leer.
  #poweScore: number // Tranformando a typo privado forma JS.
  private wonBattles = 0 // Tranformando a typo privado forma TS.
  public age: number = 0
  protected key: number

  constructor(name: string, poweScore: number) {
    this.name = name
    this.#poweScore = poweScore
  }

  get FullName() {
    return `${this.name}, de poder ${this.#poweScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.power = newPower
    } else {
      throw new Error('Power score cannor be more than 100')
    }
  }
}

const goron = new Mosnter('Anciano Goron', 100)

/*
No tiene sentido poder mutar las clases como por ejemplo con:
gorom.name = 'Joven Goron'

Para impedirlo podremos utilizar por ejemoplo la propiedad readonly:
readonly name: string

Para hacer un tipo privado podremos utilizar el has # esat es la forma oficial de JS.
#poweScore: number

Poodremos acerlas privadas con private, y podremos acceder a ella sin necesidad de
utilizar el has dentro de la clase para referirnos a ella. Pero lo malo es que el private
no lo va a trasnpilar, por lo que al pasarlo a js no es privado. (Privado solo en tiempo de compilación)
private wonBattles = 0

Por defecto TS utiliza el tipo public.
public age: number = 0

Existe el protected, funciona igual que el tipo privado pero puedes acceder a clases que heredan de la clase.
protected key: number
*/
