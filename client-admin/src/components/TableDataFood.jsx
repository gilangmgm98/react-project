import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFromFood } from "../actions/creator";

export default function TableDataFood({ data, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleteFoodHandler = async (id) => {
    await fetch(`http://localhost:3000/item/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    console.log('berhasil delete');
    await dispatch(fetchFromFood())
  };

  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.name}
      </td>
      <td className="w-[125px] whitespace-nowrap">
        <img src={data.imgUrl} alt="" />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data?.price)}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div>
          <button onClick={() => {navigate(`/edit/${data?.id}`)}} className="btn btn-primary">Edit</button>
          <button onClick={() => {deleteFoodHandler(data?.id)}} className="btn btn-secondary ml-2">Delete</button>
        </div>
      </td>
    </tr>
  );
}






