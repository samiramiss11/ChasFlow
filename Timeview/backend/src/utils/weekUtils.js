// utils/weekUtils to Date Conversion Logic
function getISOWeekDate(year, week, day) {
  const dayOffsets = {
    'Monday': 0,
    'Tuesday': 1,
    'Wednesday': 2,
    'Thursday': 3,
    'Friday': 4,
    'Saturday': 5,
    'Sunday': 6
  };
  const simpleDate = new Date(year, 0, 1 + (week - 1) * 7);
  const dayOfWeek = simpleDate.getDay();
  const ISOweekStart = simpleDate;
  if (dayOfWeek <= 4) {
      ISOweekStart.setDate(simpleDate.getDate() - simpleDate.getDay() + 1);
  } else {
      ISOweekStart.setDate(simpleDate.getDate() + 8 - simpleDate.getDay());
  }
  ISOweekStart.setDate(ISOweekStart.getDate() + dayOffsets[day]);
  return ISOweekStart;
}
module.exports = getISOWeekDate;

/* function getMondayOfISOWeek(year, week) {
    const simpleDate = new Date(year, 0, 1 + (week - 1) * 7);
    const dayOfWeek = simpleDate.getDay();
    const difference = (dayOfWeek <= 4 ? 1 : 8) - dayOfWeek;
    const monday = new Date(simpleDate.setDate(simpleDate.getDate() + difference));
    return monday;
  }
  
  module.exports = getMondayOfISOWeek;  */

