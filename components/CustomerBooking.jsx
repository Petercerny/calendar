// components/CustomerBooking.jsx
import { useState } from 'react';
import AvailabilityCalendar from './AvailabilityCalendar';

export default function CustomerBooking() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleBooking = () => {
    // Send data to your backend API here
    console.log('Booked:', { selectedSlot, customerDetails });
    alert('Appointment booked!');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
      <AvailabilityCalendar onAvailabilityChange={(slots) => setSelectedSlot(slots[0])} />
      {selectedSlot && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 mb-2 w-full"
            onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 mb-2 w-full"
            onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 mb-2 w-full"
            onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
          />
          <button onClick={handleBooking} className="bg-green-500 text-white p-2 rounded w-full">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
