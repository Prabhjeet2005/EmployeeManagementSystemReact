import React from "react";

const TasksScroll = () => {
	return (
		<>
			<h2 className="text-center text-4xl font-extrabold">Tasks 🎯</h2>
			<div
				id="taskScroll"
				className=" items-center text-black overflow-x-auto flex gap-5 flex-nowrap mt-1 min-h-[225px]">
				<div className=" rounded-2xl flex-shrink-0 p-5 text-black bg-purple-600 min-h-[200px] w-[250px]">
					<div className="flex justify-between">
						<button disabled className="bg-rose-600 text-sm p-1 rounded">
							Priority
						</button>
						<h3 className="text-sm">20 Nov 2024</h3>
					</div>
					<h3 className="text-center font-semibold text-lg">Task</h3>
					<hr className="mt-1 border-yellow-400" />
					<div className="text-xs mt-1">
						m ipsum dolor sit, amet consectetur adipisicing elit. Debitis ad
						vero omnis. Nam natus odit voluptates fuga expedita deleniti.
					</div>
				</div>
				<div className=" rounded-2xl flex-shrink-0 p-5 text-black bg-purple-600 min-h-[200px] w-[250px]">
					<div className="flex justify-between">
						<button disabled className="bg-rose-600 text-sm p-1 rounded">
							Priority
						</button>
						<h3 className="text-sm">20 Nov 2024</h3>
					</div>
					<h3 className="text-center font-semibold text-lg">Task</h3>
					<hr className="mt-1 border-yellow-400" />
					<div className="text-xs mt-1">
						m ipsum dolor sit, amet consectetur adipisicing elit. Debitis ad
						vero omnis. Nam natus odit voluptates fuga expedita deleniti.
					</div>
				</div>
				<div className=" rounded-2xl flex-shrink-0 p-5 text-black bg-purple-600 min-h-[200px] w-[250px]">
					<div className="flex justify-between">
						<button disabled className="bg-rose-600 text-sm p-1 rounded">
							Priority
						</button>
						<h3 className="text-sm">20 Nov 2024</h3>
					</div>
					<h3 className="text-center font-semibold text-lg">Task</h3>
					<hr className="mt-1 border-yellow-400" />
					<div className="text-xs mt-1">
						m ipsum dolor sit, amet consectetur adipisicing elit. Debitis ad
						vero omnis. Nam natus odit voluptates fuga expedita deleniti.
					</div>
				</div>
			</div>
		</>
	);
};

export default TasksScroll;
