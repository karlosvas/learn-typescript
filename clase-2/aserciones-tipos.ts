const canvas = document.getElementById('canvas')
// Gracias a la comporbacion de si canvas era un elemento html ahora lo save.
// A esto se le llama inferebncia devido a que typescript se da cuneta que dentro del if canvas
// va a poder ser un HTMLCanvasElement
if (canvas instanceof HTMLCanvasElement) {
  // Deduciendo que canvas sea un HTMLCanvasElement
  const ctx = canvas.getContext('2D')
}

// typeof => para tipos | string, number, bolean
// instanceof => para instancias | date
