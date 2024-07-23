import React, { useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    userServices
      .saveUser(user)
      .then((response) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">
            Create New Account
          </p>

          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              required
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              required
              value={user.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              onClick={saveUser}
            >
              Register
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/login"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Already Have an Account?
              <span className="text-blue-700"> Log In</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
