

function getEventWeekday(daysFromToday) {
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const eventDayIndex = (today + daysFromToday) % 7;

    return `Today is ${daysOfWeek[today]} and the event is in ${daysFromToday} days. Therefore the event will be held on a ${daysOfWeek[eventDayIndex]}`;
}

console.log(getEventWeekday(5)); 

