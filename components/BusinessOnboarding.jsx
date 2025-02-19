// components/BusinessOnboarding.jsx
import { useState } from 'react';
import AvailabilityCalendar from './AvailabilityCalendar';

export default function BusinessOnboarding() {
  const [step, setStep] = useState(1);
  const [businessData, setBusinessData] = useState({
    name: '',
    services: [],
    availability: [],
  });

  // Step 1: Basic business info
  const Step1 = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Business Setup</h2>
      <input
        type="text"
        placeholder="Business Name"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setBusinessData({ ...businessData, name: e.target.value })}
      />
      <button onClick={() => setStep(2)} className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  );

  // Step 2: Define services
  const Step2 = () => {
    const [newService, setNewService] = useState({ name: '', duration: 30, price: 0 });

    const addService = () => {
      setBusinessData({
        ...businessData,
        services: [...businessData.services, newService],
      });
      setNewService({ name: '', duration: 30, price: 0 });
    };

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Add Services</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Service Name"
            className="border p-2 mb-2 w-full"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            className="border p-2 mb-2 w-full"
            value={newService.duration}
            onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
          />
          <button onClick={addService} className="bg-blue-500 text-white p-2 rounded">
            Add Service
          </button>
        </div>
        <button onClick={() => setStep(3)} className="bg-blue-500 text-white p-2 rounded">
          Next
        </button>
      </div>
    );
  };

  // Step 3: Set availability
  const Step3 = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Set Availability</h2>
      <AvailabilityCalendar
        onAvailabilityChange={(slots) => setBusinessData({ ...businessData, availability: slots })}
      />
      <button onClick={() => console.log('Submit:', businessData)} className="bg-blue-500 text-white p-2 rounded">
        Finish Setup
      </button>
    </div>
  );

  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </div>
  );
}
