// This context will manage the booking data, including selections of consultants, courses, and time slots.
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the context data
interface BookingContextType {
  consultantID: string | null;
  courseID: string | null;
  week: number | null;
  day: string | null;
  roomID: string | null;
  timeSlotID: string | null;
  setConsultantID: (id: string) => void;
  setCourseID: (id: string) => void;
  setWeek: (week: number) => void;
  setDay: (day: string) => void;
  setRoomID: (id: string) => void;
  setTimeSlotID: (id: string) => void;
  bookings: any[];  // Array of bookings (or specific booking type)
  addBooking: (booking: any) => void;
  setBookings: (bookings: any[]) => void;
}

// Create the context with the appropriate typing
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Custom hook to use the context
export const useBooking = (): BookingContextType => {
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

// BookingProvider component using the 3rd method (with `React.FC` and typed `children`)
export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [consultantID, setConsultantID] = useState<string | null>(null);
  const [courseID, setCourseID] = useState<string | null>(null);
  const [week, setWeek] = useState<number | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [roomID, setRoomID] = useState<string | null>(null);
  const [timeSlotID, setTimeSlotID] = useState<string | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  
  const addBooking = (booking: any) => {
    setBookings([...bookings, booking]);
  };

  return (
    <BookingContext.Provider
      value={{
        consultantID,
        courseID,
        week,
        day,
        roomID,
        timeSlotID,
        setConsultantID,
        setCourseID,
        setWeek,
        setDay,
        setRoomID,
        setTimeSlotID,
        bookings,
        addBooking,
        setBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
