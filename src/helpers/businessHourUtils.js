export const setBusinessHour = str => {
  return str.replace(/(\d)(?=(\d\d)+$)/g, '$1:')
}

export function isEqualAllBusinessHour (businessHour) {
  const startArray = [
    businessHour.mon_start,
    businessHour.tue_start,
    businessHour.wed_start,
    businessHour.thu_start,
    businessHour.fri_start,
    businessHour.sat_start,
    businessHour.sun_start
  ]
  const endArray = [
    businessHour.mon_end,
    businessHour.tue_end,
    businessHour.wed_end,
    businessHour.thu_end,
    businessHour.fri_end,
    businessHour.sat_end,
    businessHour.sun_end
  ]

  const isEqualStartTime = startArray.every(
    (start, index, array) => array[0] === start
  )
  const isEqualEndTime = endArray.every((end, index, array) => array[0] === end)

  return isEqualStartTime && isEqualEndTime
}
