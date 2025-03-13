// Helper function to parse time ranges and extract start & end times
const getTimes = (selectedTimeSlots: string[]): string[][] => {
  return (selectedTimeSlots ?? [])
    .filter(Boolean) // Filter out any falsy values
    .map((interval) => interval.split('-')); // Split into start and end times
};

// Helper function to find the smallest time (earliest start time)
const getSmallestTime = (times: string[][]): string => {
  return times.length > 0
    ? times.reduce((a, b) => (a[0] < b[0] ? a : b))[0]
    : '23:59'; // Default to latest possible time
};

// Helper function to find the greatest time (latest end time)
const getGreatestTime = (times: string[][]): string => {
  return times.length > 0
    ? times.reduce((a, b) => (a[1] > b[1] ? a : b))[1]
    : '00:00'; // Default to earliest possible time
};

// Helper function to format the time slice for start and end
const getFormattedTime = (time: string, isStart: boolean): string => {
  const halfLength = Math.floor(time.length / 2);
  return isStart ? time.slice(0, halfLength) : time.slice(halfLength);
};

export { getTimes, getSmallestTime, getGreatestTime, getFormattedTime };


//     // const firstTime =
//                     //   selectedInterval[0]?.replace('-', '') || ''
//                     // const lastTime =
//                     //   selectedInterval[selectedInterval.length - 1]?.replace(
//                     //     '-',
//                     //     ''
//                     //   ) || ''
//                     const times: string[][] = (selectedInterval.selectedTimeSlots ?? [].filter(Boolean)).map((interval: string) =>
//   interval.split('-')
//); // Extract start & end times
// // const smallestTime = times.reduce((a, b) => (a[0] < b[0] ? a : b))[0]; // Get earliest start time
// // const greatestTime = times.reduce((a, b) => (a[1] > b[1] ? a : b))[1]; // Get latest end time
// const smallestTime =
//   times.length > 0
//     ? times.reduce((a, b) => (a[0] < b[0] ? a : b))[0]
//     : '23:59'; // Default latest possible time

// const greatestTime =
//   times.length > 0
//     ? times.reduce((a, b) => (a[1] > b[1] ? a : b))[1]
//     : '00:00'; // Default earliest possible time
// console.log("Start Time:", smallestTime);
// console.log("End Time:", greatestTime);

//                     const startTime = smallestTime?.slice(
//                       0,
//                       Math.floor(smallestTime.length / 2)
//                     ) // First half
//                     const endTime = greatestTime?.slice(
//                       Math.ceil(greatestTime.length / 2)
//                     )