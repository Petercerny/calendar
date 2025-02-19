// App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessOnboarding from './components/BusinessOnboarding';
import CustomerBooking from './components/CustomerBooking';

function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">BookSmart</h1>
      <p className="mb-8">Modern scheduling for small businesses.</p>
      <div className="space-y-4">
        <Link to="/business/signup" className="block bg-blue-500 text-white p-2 rounded">
          I’m a Business
        </Link>
        <Link to="/customer/book" className="block bg-green-500 text-white p-2 rounded">
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business/signup" element={<BusinessOnboarding />} />
        <Route path="/customer/book" element={<CustomerBooking />} />
      </Routes>
    </Router>
  );
}
