import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFromCategory } from "../actions/creator";

export default function AddFood() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, error, category } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      await dispatch(fetchFromCategory());
    };
  }, []);

  const addFood = async (data) => {
    try {
      const inputData = {
        name: data.name,
        description: data.description,
        price: data.price,
        imgUrl: data.imgUrl,
        categoryId: data.categoryId,
        ingredient: [data.ingredient, data.ingredient2, data.ingredient3],
      };

      const response = await fetch("http://localhost:3000/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(inputData),
      });

      const message = await response.json();
      if (!response.ok) {
        throw new Error(message);
      }
      // swall
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div className="flex flex-col justify-center  sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <div className="flex justify-center">
                <img
                  src="https://www.awrestaurants.co.id/assets/images/logo.png"
                  className="h-[100px]"
                  alt=""
                />
              </div> */}
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="sm:px-10 bg-white rounded-xl">
              <h2 className="mt-3 mb-6 text-4xl font-extrabold text-center text-neutral-600">
                Add New Food
              </h2>

              <form onSubmit={handleSubmit(addFood)} className="space-y-1">
                <div>
                  <label
                    for="name"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Food Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("name", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="description"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("description", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="price"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Price{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("price", { required: "this is required" })}
                      type="number"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="imgUrl"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    imgUrl{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("imgUrl", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="category"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Category{" "}
                  </label>
                  <div className="mt-1">
                    <select className="select select-bordered w-full ">
                      <option value="">Select Category</option>
                      {category.map((category) => (
                        <option {...register("email")} value={category._id}>{category.name}</option>

                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    for="ingredient"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Ingredient{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("ingredient", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="ingredient"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Ingredient{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("ingredient2", { required: "this is required" })}
                      type="text"
                      autoComplete="off"
                      required=""
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-black rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="ingredient"
                    className="text-center block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Ingredient{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      {...register("ingredient3", { required: "this is required" })}
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
                    className="mt-5 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
