import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import Logo from '../assets/logo.png'

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const loginHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const message =  await response.json();
      console.log(message, 'ini respo');
      if (!response.ok) {
        throw new Error(message.error);
      }
      localStorage.setItem("access_token", message.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  return (
    <section>
      <div className="h-screen bg-[url('https://awrestaurants.com/sites/default/files/OrangeWallpaper-full.jpg')]">
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 sm:px-10 bg-white rounded-xl">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                  <img
                    src="https://www.awrestaurants.co.id/assets/images/logo.png"
                    className="h-[100px]"
                    alt=""
                  />
                </div>
              </div>

              <h2 className="mt-3 mb-6 text-3xl font-extrabold text-center text-neutral-600">
                Sign in to your account
              </h2>

              <form
                onSubmit={handleSubmit(loginHandler)}
                className="space-y-6"
                action="#"
                method="POST"
              >
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
                      id="emailLogin"
                      {...register("email", { required: "this is required" })}
                      type="email"
                      autoComplete="off"
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
                      id="passLogin"
                      {...register("password", {
                        required: "this is required",
                      })}
                      type="password"
                      autoComplete="off"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
