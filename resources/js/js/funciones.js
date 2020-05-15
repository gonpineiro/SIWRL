export const calcularDiasTotales = (fechaA, fechaB) => Math.floor((fechaA - fechaB) / (1000 * 60 * 60 * 24))

export const calcularDiasTotalesParse = (fechaA, fechaB) => Math.floor((Date.parse(fechaA) - Date.parse(fechaB)) / (1000 * 60 * 60 * 24))

export const calcularPorcentaje = (NumeroA, NumeroB) => {
    const porcentaje = Math.floor((NumeroA / NumeroB) * 100)
    if (porcentaje > 100) return 100    
    if (porcentaje <= 100) return porcentaje    
}

export const traerValorSensor = (prototype) => {
    const output_sensor = prototype.sensor.output
    const monitor = prototype.ambiente.monitors[prototype.ambiente.monitors.length - 1]
    return monitor['s' + output_sensor]
  }