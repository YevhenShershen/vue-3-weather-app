const PRESSURE_INUTS = 0.750062
export const capitalizeFirstLetter = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_INUTS)
}

export const getTime = (second) => {
  return new Date(second * 1000).toLocaleTimeString('pl-PL', { timeZone: 'Atlantic/Reykjavik' })
}

