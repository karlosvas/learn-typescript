// Definir el typo de la array.

// 1 Forma.
const lenguages: string[] = []
lenguages.push('JavaScript')
// lenguages.push(1323443) => Esto daria error.

// 2 Forma.
const lenguages2: Array<number> = []
lenguages2.push(19)
// lenguages2.push('JavaScript') => Esto daria error.

// Array todo de numeros o array topdo de strings.
const lenguages3: string[] | number[] = []
// lenguages3.push("Este array tendra typo never")

// Array de string o de number a la vez.
const lenguages4: (string | number)[] = []
lenguages4.push('Texto')
lenguages4.push(19)
// lenguages4.push(true) => Definimos que es string o number por lo que no puede ser bolean.

// Array de arrays
type CellValue = 'X' | 'O' | ''
const gameBoard: CellValue[][] = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'O'],
]

//Tuplas, Una tupla es un array que tiene un limite fijado de longitud.
type CellValue2 = 'X' | 'O' | ''
type Tuple = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
]
const gameBoardTuple: Tuple = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'O'],
]
/* Usestage devuelbe u na tupla, se utiliza en react, permite a los componentes funcionales
mantener y administrar su propio estado interno.
userState es una tupla, en este caso que consta de dos parametros el elemento con el
estado actual, y setHero que es una funcion utilizada para actualizar el elemento principal.

type State = [string, (newName: string)=>void]
const [hero, setHero]: State = userState('Jake')
setHero('Batman) => Ahora el hero es = a Batman

*/

type RGB = [number, number, number]
const rgb: RGB = [2, 3, 6]
