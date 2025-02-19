// components/AdminDashboard.jsx
export default function AdminDashboard() {
  // Mock data (replace with API calls)
  const appointments = [
    { id: 1, customer: "John Doe", service: "Haircut", time: "2023-10-05T10:00:00" },
    { id: 2, customer: "Jane Smith", service: "Checkup", time: "2023-10-05T14:30:00" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      <div className="space-y-2">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border p-2 rounded">
            <div>{appointment.customer}</div>
            <div>{appointment.service}</div>
            <div>{new Date(appointment.time).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
