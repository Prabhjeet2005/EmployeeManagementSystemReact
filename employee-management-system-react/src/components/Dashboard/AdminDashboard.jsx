import React from "react";
import Header from "../DashHelp/Header";
import AdminTasks from "../DashHelp/AdminTasks";
import AdminTasksScroll from "../DashHelp/AdminTasksScroll";

const AdminDashboard = () => {
	return (
		<>
			<div id="pscroll" className="m-2 p-2 rounded-2xl h-screen bg-zinc-900">
				<Header />
				<hr className=" border-zinc-600 " />
				<AdminTasks />
				<AdminTasksScroll />
			</div>
		</>
	);
};

export default AdminDashboard;
