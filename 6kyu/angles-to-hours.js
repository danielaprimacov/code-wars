var whatTimeIsIt = function(angle) {
  // Your code here
  // Each hour represents 30 degrees (360 degrees / 12 hours)
    let hours = Math.floor(angle / 30);
    let minutes = Math.floor((angle % 30) * 2);
    
    // Handle 0 degrees as 12:00 instead of 00:00
    if (hours === 0) {
        hours = 12;
    }
    
    // Format hours and minutes as HH:MM
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}