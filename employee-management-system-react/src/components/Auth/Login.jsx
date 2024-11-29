import React, { useState } from "react";

const Login = ({LoginHandler}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    LoginHandler(email, password);

    setemail("");
    setPassword("");
    
  }
  

	return (
    <>
      <div className="text-5xl font-semibold text-center mt-10 mb-28 ">Employee Management System</div>
      <form
        onSubmit={submitHandler}
        className="flex items-center flex-col  w-screen">
				<div className=" border bg-zinc-950 flex flex-col p-16 rounded-2xl">
          <input
            value={email}
            onChange={
              (e) => {
                setemail(e.target.value);
              }
            }
            type="email"
            required
						placeholder="Enter Email"
						className="rounded-xl bg-zinc-800 outline-none px-4 py-2"
					/>

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
						type="password"
						placeholder="Enter Password"
						className="rounded-xl bg-zinc-800 outline-none mt-3 mb-5 px-4 py-2"
					/>

					<button className="p-2 rounded-lg text-black bg-yellow-600">
						Login
					</button>
				</div>
			</form>
		</>
	);
};

export default Login;
