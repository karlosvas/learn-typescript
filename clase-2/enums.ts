//Si queremos que las tuplas sean totalmete fijas deveremso añadir readonly
type RGB = readonly [number, number, number]

const black: RGB = [0, 0, 0]
const white: RGB = [255, 255, 255]
// white.push(255) => La propiedad push no existe.

// Enums podremos utilizarlo como si fuera un tipo, no utilizar const si vas a utilizarlo desde fuera.
const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
function showMessage(tipoError: ERROR_TYPES) {
  if (tipoError == ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoError == ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienes permiso para acceder')
  } else if (tipoError == ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permiso es prohibido')
  }
}
