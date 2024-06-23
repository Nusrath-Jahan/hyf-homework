const seriesDurations = [
  {
    title: "Squid Game ",
    days: 0,
    hours: 8,
    minutes: 0,
  },
  {
    title: "House of the Dragon",
    days: 9,
    hours: 7,
    minutes: 22,
  },
  {
    title: "Game of Thrones",
    days: 12,
    hours: 3,
    minutes: 30,
  },
];
function calculateLifeSpentOnSeries(seriesDurations) {
  const averageLifespanYears = 80;
  const averageLifespanMinutes = averageLifespanYears * 365 * 24 * 60;

  function seriesDurationInMinutes(series) {
    const { days, hours, minutes } = series;
    return days * 24 * 60 + hours * 60 + minutes;
  }

  let totalMinutesWatched = 0;
  let seriesPercentages = seriesDurations.map((series) => {
    const minutesWatched = seriesDurationInMinutes(series);
    const percentageOfLifeSpent =
      (minutesWatched / averageLifespanMinutes) * 100;
    totalMinutesWatched += minutesWatched;
    return {
      title: series.title,
      percentage: percentageOfLifeSpent.toFixed(3),
    };
  });

  const totalPercentageOfLifeSpent =
    (totalMinutesWatched / averageLifespanMinutes) * 100;

  seriesPercentages.forEach((series) => {
    console.log(`${series.title} took ${series.percentage}% of my life`);
  });

  console.log(
    `In total that is ${totalPercentageOfLifeSpent.toFixed(3)}% of my life`
  );
}

calculateLifeSpentOnSeries(seriesDurations);
