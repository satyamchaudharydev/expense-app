export function convertDate(date) {
  if(typeof date === "string") {
    date = new Date(date);
  }
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}