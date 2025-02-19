// components/AvailabilityCalendar.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AvailabilityCalendar({ onAvailabilityChange }) {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleDateSelect = (date) => {
    const newSlots = [...selectedSlots, date];
    setSelectedSlots(newSlots);
    onAvailabilityChange(newSlots);
  };

  return (
    <div>
      <DatePicker
        selected={null}
        onChange={handleDateSelect}
        showTimeSelect
        timeIntervals={15}
        minTime={new Date(0, 0, 0, 9, 0)} // 9 AM
        maxTime={new Date(0, 0, 0, 17, 0)} // 5 PM
        dateFormat="MMMM d, yyyy h:mm aa"
        inline
      />
      <div className="mt-4">
        <h3 className="font-bold">Selected Slots:</h3>
        {selectedSlots.map((slot, index) => (
          <div key={index}>{slot.toLocaleString()}</div>
        ))}
      </div>
    </div>
  );
}
