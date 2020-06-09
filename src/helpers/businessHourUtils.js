const startArray = (businessHour) => [
  businessHour.mon_start,
  businessHour.tue_start,
  businessHour.wed_start,
  businessHour.thu_start,
  businessHour.fri_start,
  businessHour.sat_start,
  businessHour.sun_start,
]
const endArray = (businessHour) => [
  businessHour.mon_end,
  businessHour.tue_end,
  businessHour.wed_end,
  businessHour.thu_end,
  businessHour.fri_end,
  businessHour.sat_end,
  businessHour.sun_end,
]

export const setBusinessHour = (str) => {
  return str.replace(/(\d)(?=(\d\d)+$)/g, '$1:')
}

export function isEqualAllBusinessHour(businessHour) {
  const isEqualStartTime = startArray(businessHour).every(
    (start, index, array) => start && array[0] === start,
  )
  const isEqualEndTime = endArray(businessHour).every(
    (end, index, array) => end && array[0] === end,
  )

  return isEqualStartTime && isEqualEndTime
}
