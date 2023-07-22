export function getDateDay() {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("es-ES", options);
 
  return formattedDate;
}

export function getDateHour() {
  const date = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", options);

  return formattedTime;
}


