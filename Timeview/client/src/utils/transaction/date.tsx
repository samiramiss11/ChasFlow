
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