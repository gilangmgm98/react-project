// import { Link, Outlet } from "react-router-dom"
import TableDataFood from "./TableDataFood";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromFood } from "../actions/creator";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableData() {
  const { isLoading, foods, error } = useSelector((state) => state.food);
  // console.log(isLoading,'<<<<<');
  // console.log(foods,'<<<<<');
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchFromFood());
      console.log(foods, "ini foods");
    })();
  }, []);

  return (
    <>
      <div className="text-5xl flex justify-between">
        <h1>Food List</h1>

        <Link to="/addfood" className="btn btn-accent">
          Add Food
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Food Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                      {/* {JSON.stringify(foods)} */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {foods.map((el, i) => {
                    return (
                      <TableDataFood key={el.id} data={el} index={i + 1} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
