export const convertDate = function (date) {
  const newDate = new Date(date)
  return newDate.toLocaleDateString()
}
