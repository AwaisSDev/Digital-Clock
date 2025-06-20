function updateClock() {
  const now = new Date(); // Create a new Date object to get current time

  let hours = now.getHours(); // Get current hour (0-23)
  let minutes = now.getMinutes(); // Get current minute (0-59)
  let seconds = now.getSeconds(); // Get current second (0-59)

  // Set AM or PM
  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) hours -= 12; // Convert 13–23 hours to 1–11
  }
  if (hours === 0) hours = 12; // Convert 0 (midnight) to 12

  // Add leading 0 if number is single-digit
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  // Combine all into one string like 10:32:15 AM
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Show the time string inside the <h1 id="time"> element
  document.getElementById("time").textContent = timeString;
}

// Call updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Call it once immediately so user doesn’t see 00:00:00
updateClock();
