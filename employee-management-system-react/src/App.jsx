import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/DashHelp/Header";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

	const [user, setUser] = useState(null);

	const LoginHandler = (email, password) => {
		if (email == 'admin@gmail.com' && password=='123') {
			setUser('admin');
		} else if (email == 'employee@gmail.com' && password=='123') {
			setUser('employee')
		} else {
			alert("Invalid");
		}
	}


	return (
		<>
			{!user ? <Login LoginHandler={LoginHandler}/> : '' }
			{user == 'admin' ? <AdminDashboard /> : ''}
			{user == 'employee'?<EmployeeDashboard/>:''}
		</>
	);
};

export default App;
