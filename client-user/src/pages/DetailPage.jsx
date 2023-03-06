import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchFromFoodDetail } from "../actions/creator";
// import useFetchData from "../hooks/useFetchData";

export default function Detail() {
  const { id } = useParams();
  const {isLoading, error, food} = useSelector((state) => (state.detailFood));
  const dispatch = useDispatch()

  useEffect(() =>{
    (async () => {
      await dispatch(fetchFromFoodDetail(id));
      // console.log(food);
    })();
  },[])
  
  // const { items } = useFetchData(`http://localhost:3000/Items/${id}`);
  return (
    <div className="h-screen  bg-[url('https://awrestaurants.com/sites/default/files/OrangeWallpaper-full.jpg')]">
      <div className="flex justify-center">
        <div className="mt-[100px] w-[500px] bg-slate-200 border border-black rounded-md shadow-xl">
          <div className="flex justify-center">
            <img className="rounded-t-lg w-full" src={food.imgUrl} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {food.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {food.description}
            </p>
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
              Rp.{food.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
