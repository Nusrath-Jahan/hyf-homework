function calculateTimeOfTravel(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  const totalHours = destinationDistance / speed;

  const hours = Math.floor(totalHours);
  console.log(hours);

  const minutes = Math.round((totalHours - hours) * 60);
  console.log(minutes);

  const timeString = `${hours} hours and ${minutes} minutes`;
  return timeString;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = calculateTimeOfTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
