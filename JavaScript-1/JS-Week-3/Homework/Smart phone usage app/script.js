const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  const totalActivities = activities.length;
  const totalDuration = activities.reduce(
    (sum, activity) => sum + activity.duration,
    0
  );

  console.log(
    `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`
  );

  if (typeof usageLimit !== "undefined" && totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphone for you!");
  }
}

let usageLimit;

function setUsageLimit(limit) {
  usageLimit = limit;
}

function getMostTimeSpentActivity() {
  if (activities.length === 0) {
    console.log("No activities to analyze.");
    return;
  }

  const activityDurations = activities.reduce((acc, activity) => {
    if (!acc[activity.activity]) {
      acc[activity.activity] = 0;
    }
    acc[activity.activity] += activity.duration;
    return acc;
  }, {});

  let mostTimeSpentActivity = null;
  let maxDuration = 0;

  for (const [activity, duration] of Object.entries(activityDurations)) {
    if (duration > maxDuration) {
      mostTimeSpentActivity = activity;
      maxDuration = duration;
    }
  }

  console.log(
    `The activity you have spent the most time on is ${mostTimeSpentActivity}, with a total of ${maxDuration} minutes.`
  );
}

// Example usage:
addActivity("23/7-18", "Facebook", 30);
addActivity("23/7-18", "Youtube", 20);
addActivity("23/7-18", "Whats App", 28);

setUsageLimit(60);
showStatus();
getMostTimeSpentActivity();
//Created a function for calculating the activity a user has spent the most time on.

function longestActivity(activities) {
  //this ifElse is optional.You can write this function without this ifElse.
  if (!Array.isArray(activities) || activities.length === 0) {
    return null;
  }

  //if you want ,you can start from here
  let maxActivity = activities[0];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].duration > maxActivity.duration) {
      maxActivity = activities[i];
    }
  }

  return maxActivity;
}

const maxActivity = longestActivity(activities);

if (maxActivity) {
  console.log(
    `The activity with the most time spent is: ${maxActivity.activity} (${maxActivity.duration} minutes)`
  );
} else {
  console.log("No activities found.");
}
