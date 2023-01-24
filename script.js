function updateClock() {

  const myDate = new Date();
  const militaryHours = myDate.getHours();
  let hours = militaryHours > 12 ? militaryHours - 12 : militaryHours;
  hours = hours === 00 ? 12 : hours.toString().padStart(2, '0');
  const minutes = myDate.getMinutes().toString().padStart(2, '0');
  const seconds = myDate.getSeconds().toString().padStart(2, '0');
  const month = myDate.getMonth();
  const date = myDate.getDate();
  const day = myDate.getDay();
  const year = myDate.getFullYear();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const ordinal = getOrdinal(date);
  const ampm = militaryHours > 12 ? 'PM' : 'AM';

  const timeDisplay = document.getElementById("time")
  const dateDisplay = document.getElementById("date")
  timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
  dateDisplay.textContent = `${days[day]}, ${months[month]} ${date}${ordinal} ${year}`
}

function getOrdinal(date) {
  if (date > 3 && date < 21) return 'th';

  switch (date % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
  }
}

updateClock();
setInterval(updateClock, 1000);