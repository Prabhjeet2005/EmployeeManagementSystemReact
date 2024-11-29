import React from "react";

const TaskStats = () => {
	return (
		<>
			<div className="mt-4 gap-6 flex justify-center flex-wrap mb-4">
				<div className="bg-blue-600 w-[45%] px-10 py-5 rounded-xl">
					<div className="text-3xl">0</div>
					<div className="font-medium">New Task</div>
				</div>
				<div className="bg-yellow-600 w-[45%] px-10 py-5 rounded-xl">
					<div className="text-3xl">2</div>
					<div className="font-medium">Accepted</div>
				</div>
				<div className="bg-green-600 w-[45%] px-10 py-5 rounded-xl">
					<div className="text-3xl">4</div>
					<div className="font-medium">Completed</div>
				</div>
				<div className="bg-red-600 w-[45%] px-10 py-5 rounded-xl">
					<div className="text-3xl">1</div>
					<div className="font-medium">Failed</div>
				</div>
			</div>
		</>
	);
};

export default TaskStats;
