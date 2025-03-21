
type DateType = {
    year: number, week: number;
}

export const getFirstDateOfISOWeek = ({ year, week }:DateType) => {
  const simpleDate = new Date(year, 0, 1 + (week - 1) * 7);
  const dayOfWeek = simpleDate.getDay();
  const difference = (dayOfWeek <= 4 ? 1 : 8) - dayOfWeek;
  const monday = new Date(simpleDate.setDate(simpleDate.getDate() + difference));
  return monday;
};


// export const formatMultiIntervalString = (timeSlots: string[]): string => {
//   if (timeSlots.length === 0) return ''; // Return empty if no slots are present

//   // Step 1: Split and sort times
//   const times = timeSlots
//     .map(slot => slot.split('-'))  // Split into start and end times
//     .flat()  // Flatten into a single array of times
//     .sort(); // Sort the times in ascending order

//   const groupedTimes: string[][] = [];  // Will hold groups of times based on their hour part
//   let currentGroup: string[] = [];  // Current group of times

//   // Step 2: Group times by their hour part
//   times.forEach(time => {
//     const hour = time.split(':')[0]; // Extract the hour part of the time
//     if (currentGroup.length === 0 || currentGroup[0].split(':')[0] === hour) {
//       currentGroup.push(time);  // Add time to the current group
//     } else {
//       groupedTimes.push(currentGroup); // Push the previous group to groupedTimes
//       currentGroup = [time];  // Start a new group
//     }
//   });
//   if (currentGroup.length > 0) groupedTimes.push(currentGroup); // Add the last group

//   // Step 3: Find the least and greatest time for each group
//   const intervals = groupedTimes.map(group => {
//     const leastTime = group[0]; // The first time in the sorted group (least time)
//     const greatestTime = group[group.length - 1]; // The last time in the sorted group (greatest time)
//     return `${leastTime}-${greatestTime}`; // Format the interval string
//   });

//   return intervals.join(', '); // Join all intervals with commas
// };

// export const mergeConnectedIntervals = (timeSlots: string[]): string[][] => {

//       if (timeSlots.length === 0) return ''; // Return empty if no slots are present

//   // Step 1: Split and sort times
//   const times = timeSlots
//     .map(slot => slot.split('-'))  // Split into start and end times
//     .flat()  // Flatten into a single array of times
//     .sort(); // Sort the times in ascending order

// console.log('times',times)
//   if (timeSlots.length === 0) return [];

//   // Step 1: Sort times in ascending order
//   const sortedTimes = [...timeSlots].sort();

//   // Step 2: Initialize grouping variables
//   const groupedTimes: string[][] = [];
//   let currentGroup: string[] = [sortedTimes[0]];

//   // Step 3: Iterate through sorted times and merge overlapping ones
//   for (let i = 1; i < sortedTimes.length; i++) {
//     const prevTime = currentGroup[currentGroup.length - 1]; // Last time in current group
//     const currTime = sortedTimes[i];

//     if (prevTime.split(':')[1] === currTime.split(':')[1]) {
//       // Merge if previous end matches new start
//       currentGroup.push(currTime);
//     } else {
//       groupedTimes.push(currentGroup); // Save previous group
//       currentGroup = [currTime]; // Start a new group
//     }
//   }

//   // Step 4: Push the last group into result
//   if (currentGroup.length > 0) groupedTimes.push(currentGroup);
// console.log(groupedTimes)
//   return groupedTimes;
// };

// Example Usage
// const timeSlots = ['16:00', '17:00', '15:00', '16:00', '09:00', '10:00', '08:00', '09:00'];
// console.log(mergeConnectedIntervals(timeSlots));

/*
Expected Output:
[
  ['08:00', '09:00', '09:00', '10:00'], 
  ['15:00', '16:00', '16:00', '17:00']
]
*/


export const formatMultIntervalString = (timeSlots: string[]): string => {
  if (timeSlots.length === 0) return '';

  // Step 1: Convert "08:00-09:00" to tuples ["08:00", "09:00"]
  const intervals = timeSlots.map(slot => slot.split('-')).map(([start, end]) => [start, end]);

  // Step 2: Sort intervals based on start time
  intervals.sort((a, b) => a[0].localeCompare(b[0]));

  // Step 3: Merge intervals where the end time matches the next start time
  const mergedIntervals: string[][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (currentEnd === nextStart) {
      // Merge into the same interval
      currentInterval = [currentStart, nextEnd];
    } else {
      // Push previous interval and start a new one
      mergedIntervals.push(currentInterval);
      currentInterval = [nextStart, nextEnd];
    }
  }

  // Push the last interval
  mergedIntervals.push(currentInterval);

  // Step 4: Format output as "08-10, 12-13"
  return mergedIntervals.map(([start, end]) => `${start.slice(0, 2)}-${end.slice(0, 2)}`).join(', ');
};

export const formatIntervalString = (timeSlots: string[]): string => {
  if (timeSlots.length === 0) return ''; // Return empty if no slots are present

  const times = timeSlots
    .map(slot => slot.split('-'))  // Split into start and end times
    .flat();  // Flatten into a single array of times
console.log('times',times)
  const leastTime = times.reduce((min, time) => (time < min ? time : min)); // Find the earliest time
  const greatestTime = times.reduce((max, time) => (time > max ? time : max)); // Find the latest time

  return `${leastTime}-${greatestTime}`; // Return the formatted interval string
};

      // selectedTimeSlots.forEach((timeSlot) => {
     
  //     // Merge all time slots into a single entry as a joined string
  //   state.rooms[roomId].selectedInterval.push({
  //   selectedTimeSlots: selectedTimeSlots.join(", "), // Combine into a single string
  // });
//     });
  
/**
 * need to consider red days also if weekend we want to see next week instead of past days on current week
 */
export const calculateDayAndWeek = () => {
  const today = new Date();

  // Get current day of the week (0 = Sunday, 1 = Monday, etc.)
  let dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, etc.
  // Get current week number (ISO 8601 week date system)
  const startDate = new Date(today.getFullYear(), 0, 1); // Get the first day of the year
  const days = Math.floor((today.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)); // Calculate the number of days since the start of the year

  let weekOfYear = Math.ceil((days + 1) / 7); // Week is based on the number of days passed, rounded up

    // If it's Saturday (6) or Sunday (0), set it to Monday (1)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    dayOfWeek = 1;
    weekOfYear++
  }

  return {
    dayOfWeek: dayOfWeek,// === 0 ? 7 : dayOfWeek, // Return 7 for Sunday, otherwise return dayOfWeek
    weekOfYear: weekOfYear+1, //start from week 1?
  };
};