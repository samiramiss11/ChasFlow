
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