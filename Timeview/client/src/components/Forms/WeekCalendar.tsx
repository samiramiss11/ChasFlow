/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';

// Define props interface
interface WeekCalendarProps {
  onWeekChange: (week: number, year: number) => void;
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({ onWeekChange }) => {
  const { selectedWeek, selectedYear, setSelectedWeek, setSelectedYear } = useBooking();
  const navigate = useNavigate();

  const handleWeekChange = (shift: number) => {
    if (selectedWeek === null || selectedYear === null) {
      console.error("Week or year is not selected. Cannot change week.");
      return;
    }

    let newWeek = selectedWeek + shift;
    let newYear = selectedYear;

    if (newWeek > 52) {
      newWeek = 1;
      newYear += 1;
    } else if (newWeek < 1) {
      newWeek = 52;
      newYear -= 1;
    }

    setSelectedWeek(newWeek);
    setSelectedYear(newYear);
    onWeekChange(newWeek, newYear);  // This function will handle additional changes in the parent component
    navigate(`/${newYear}/veckor/${newWeek}`);
  };

  return (
    <div>
      <button onClick={() => handleWeekChange(-1)}>Previous Week</button>
      <span>Week {selectedWeek} of {selectedYear}</span>
      <button onClick={() => handleWeekChange(1)}>Next Week</button>
    </div>
  );
};

export default WeekCalendar;*/
