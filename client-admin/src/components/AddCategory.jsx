import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function AddCategory() {
    const { register, handleSubmit, errors } = useForm()
    const navigate = useNavigate()
    const addCategory = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/category',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.getItem('access_token'),
                },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            const resp = await response.json()
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <section>
          <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              {/* <div className="flex justify-center">
                <img
                  src="https://www.awrestaurants.co.id/assets/images/logo.png"
                  className="h-[100px]"
                  alt=""
                />
              </div> */}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="px-4 py-8 sm:px-10 bg-white rounded-xl">
                <h2 className="mt-3 mb-6 text-4xl font-extrabold text-center text-neutral-600">
                  Add New Category
                </h2>

                <form onSubmit={handleSubmit(addCategory)} className="space-y-6">
                  <div>
                    <label
                      for="name"
                      className="text-center block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Category Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id=""
                        {...register("name", { required: "this is required" })}
                        type="text"
                        autocomplete="off"
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
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
