import React from 'react'

const AdminTasksScroll = () => {
  return (
		<div className='mt-14'> 
			<h2 className="text-center text-3xl font-bold">Assigned Tasks 📝</h2>
			<div
				id="tscroll"
				className="flex flex-col h-32 overflow-y-auto bg-zinc-800 p-3 rounded-2xl mt-6 ">
				<div className="bg-pink-400 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
				<div className="bg-yellow-600 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
				<div className="bg-blue-600 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
				<div className="bg-blue-600 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div><div className="bg-blue-600 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
				<div className="bg-pink-400 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
				<div className="bg-red-400 flex mb-1 justify-between rounded-md py-1 px-2">
					<div>Name</div>
					<div>Task</div>
					<div>Status</div>
				</div>
			</div>
		</div>
	);
}

export default AdminTasksScroll