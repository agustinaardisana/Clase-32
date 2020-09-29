const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");




// pasaFiltros -> param card -> return true o false 
// revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// revisar si hay algo chequeado en los radio // true / false 
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false 


const pasaFiltros = (card) => {
  if (pasaFiltrosInput(card) && pasaFiltrosRadio(card) && pasaFiltrosCheckbox(card)) {
    return true
  }
  else {
    return false
  }
}

const pasaFiltrosInput = (card) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
      return true
    }
    return false
  }
  return true
}

const pasaFiltrosRadio = (card) => {
  if (hayAlgunRadioChequeado()) {
    if (compararSexoConTarjeta(card)) {
      return true
    }
    return false
  }
  return true
}

const pasaFiltrosCheckbox = (card) => {
  if (hayAlgunCheckBoxChequeado()) {
    if (compararColorConTarjeta(card)) {
      return true
    }
    return false
  }
  return true
}

const compararColorConTarjeta = (card) => {
  for (checkbox of filtroColor) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.color || checkbox.value === "todos") {
        return true
      }
    }
  }
  return false
}

const compararSexoConTarjeta = (card) => {
  for (radio of filtroSexo) {
    if (radio.checked) {
      if (radio.value === card.dataset.sexo || radio.value === "i") {
        return true
      }
    }
  }
  return false
}

const ocultarTarjeta = (card) => {
  return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
  return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta(card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
}


const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}


const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}

const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      return true
    }
  }
  return false
}

const hayAlgoEscritoEnElInput = () => {
  return Boolean(filtroBusqueda.value)
}

filtroBusqueda.oninput = () => {
  filtrarTarjetas()

}


for (let checkbox of filtroColor) {
  checkbox.oninput = () => {
    filtrarTarjetas()
  }
}

for (let radio of filtroSexo) {
  radio.oninput = () => {
    filtrarTarjetas()
  }
}



