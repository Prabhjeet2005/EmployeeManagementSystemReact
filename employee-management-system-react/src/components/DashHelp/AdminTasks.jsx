import React from "react";

const AdminTasks = () => {
	return (
		<div className="m-5">
			<form className="flex flex-wrap gap-3 justify-between bg-zinc-800 p-5 rounded-2xl border ">
				<div className="">
					<div className="font-light text-sm">Task</div>
					<input
						type="text"
						className="rounded bg-transparent mb-2 w-64 text-sm p-1 border outline-none"
						placeholder="Enter Task"
					/>
					<div className="font-light text-sm">Date</div>
					<input
						type="date"
						className="rounded bg-transparent mb-2 w-64 text-sm p-1 border outline-none"
						placeholder="Enter Task"
					/>
					<div className="font-light text-sm">Assign To</div>
					<input
						type="text"
						className="rounded bg-transparent mb-2 w-64 text-sm p-1 border outline-none"
						placeholder="Employee"
					/>
					<div className="font-light text-sm">Category</div>
					<input
						className="rounded bg-transparent mb-2 w-64 text-sm p-1 border outline-none"
						placeholder="developer, designer, etc"
					/>
				</div>
				<div className="flex flex-col">
					<div className="font-light text-sm">Description</div>
					<textarea
						type="text"
						className="rounded resize-none bg-transparent h-[70%] p-3 mb-2 w-64 text-sm border outline-none"
						placeholder="Enter Task"
					/>
					<button className="bg-teal-600 p-1 rounded-lg">Assign</button>
				</div>
			</form>
		</div>
	);
};

export default AdminTasks;
