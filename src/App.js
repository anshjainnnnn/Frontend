import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes.jsx';
import NotFound from './Pages/Notfound.jsx';
import AdminPannel from './Admin/AdminPannel';

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
    </div>
  );
}

export default App;
