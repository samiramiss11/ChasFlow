
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

export const formatIntervalString = (timeSlots: string[]): string => {
  if (timeSlots.length === 0) return ''; // Return empty if no slots are present

  const times = timeSlots
    .map(slot => slot.split('-'))  // Split into start and end times
    .flat();  // Flatten into a single array of times

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
    weekOfYear: weekOfYear,
  };
};