import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import Logo from '../assets/logo.png'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const registerHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      const resp = await response.json();
      if (!response.ok) {
        throw new Error(resp.error);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="">
        {/* <div className="h-fit bg-[url('https://awrestaurants.com/sites/default/files/OrangeWallpaper-full.jpg')]"> */}
        <div className="flex flex-col justify sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 sm:px-10 bg-white rounded-xl">
              <h2 className="mt-3 mb-6 text-3xl font-extrabold text-center text-neutral-600">
                Sign up to your account
              </h2>

              <form onSubmit={handleSubmit(registerHandler)} className="space-y-6" action="#">
                <div>
                  <label
                    for="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      {...register("username", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      {...register("email", { required: "this is required" })}
                      type="email"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      {...register("password", { required: "this is required" })}
                      type="password"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="phoneNumber"
                      {...register("phoneNumber", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      {...register("address", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
