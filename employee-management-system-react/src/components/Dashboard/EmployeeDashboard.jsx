import React from "react";
import Header from "../DashHelp/Header";
import TaskStats from "../DashHelp/TaskStats";
import TasksScroll from "../DashHelp/EmployeeTasksScroll";

const EmployeeDashboard = () => {
	return (
		<>
			<div id="pscroll" className="m-2 p-2 rounded-2xl bg-zinc-900">
				<Header />
				<hr className=" border-zinc-600 " />
				<TaskStats />
				<TasksScroll />
			</div>
		</>
	);
};

export default EmployeeDashboard;
