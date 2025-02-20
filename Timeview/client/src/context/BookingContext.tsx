//BookingContext.tsx keep this
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface BookingContextType {
  bookings: any[];
  consultantID: string | null;
  courseID: string | null;
  selectedYear: number | null;
  selectedWeek: number | null;
  selectedDay: string | null;
  selectedRoom: string | null;
  selectedTimeSlots: string[];
  setConsultantID: (id: string) => void;
  setCourseID: (id: string) => void;
  setSelectedYear: (year: number) => void;
  setSelectedWeek: (week: number) => void;
  setSelectedDay: (day: string) => void;
  setSelectedRoom: (room: string) => void;
  setSelectedTimeSlots: (slots: string[]) => void;
  addBooking: (booking: any) => void;
  setBookings: (bookings: any[]) => void;
}

const defaultYear = new Date().getFullYear(); // Current year
const defaultWeek = Math.ceil(new Date().getDate() / 7);

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
// Define the props for the BookingProvider, explicitly typing the `children` prop
interface BookingProviderProps {
  children: ReactNode;
}


export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [consultantID, setConsultantID] = useState<string | null>(null);
  const [courseID, setCourseID] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(new Date().getFullYear());
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const addBooking = (booking: any) => {
    setBookings([...bookings, booking]);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        consultantID,
        courseID,
        selectedYear,
        selectedWeek,
        selectedDay,
        selectedRoom,
        selectedTimeSlots,
        setConsultantID,
        setCourseID,
        setSelectedYear,
        setSelectedWeek,
        setSelectedDay,
        setSelectedRoom,
        setSelectedTimeSlots,
        addBooking,
        setBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};