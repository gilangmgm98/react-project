// import { Link, Outlet } from "react-router-dom"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromCategory } from "../actions/creator";

export default function TableDataCategory({ data, index }) {
  const { isLoading, error, category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      await dispatch(fetchFromCategory(category.id));
    };
  }, []);
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw { error: "Data Not Found" };
      }
      dispatch(fetchFromCategory())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div>
          <button onClick={() => {deleteCategory(data.id)}} className="btn btn-secondary ml-2">Delete</button>
        </div>
      </td>
    </tr>
  );
}
