import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import AddEditCompany from './AddEditCompany';
import EmployeeFormSubmission from './EmployeeFormSubmission';
import Index from '../Container/Index';
import Form8850 from '../Container/Form';

// const PrivateRoute = ({ children }) => {
//     return localStorage.getItem('token') ? children : <Navigate to="/login" />;
// };
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
  };

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <AdminDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin/edit/:id"
                element={
                    <PrivateRoute>
                        <AddEditCompany />
                    </PrivateRoute>
                }
            />
             <Route path="/company/:short_Code/form" element={<EmployeeFormSubmission />} />
             {/* <Route path="/form" element={<Form8850 />} /> */}
        </Routes>
    </Router>
);

export default AppRouter;