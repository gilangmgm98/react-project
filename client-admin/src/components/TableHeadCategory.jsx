// import { Link, Outlet } from "react-router-dom"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFromCategory } from "../actions/creator";
import TableDataCategory from "./TableDataCategory";

export default function TableCategory() {

    const { isLoading, category , error } = useSelector((state) => (state.category))
    // console.log(isLoading,'<<<<<');
    // console.log(foods,'<<<<<');
    const dispatch = useDispatch()

    useEffect(()=>{
        (async ()=>{
            await dispatch(fetchFromCategory());
            console.log(category,'ini category');
        })();
    },[]);
    
    return (
        <>
            <div className="text-5xl flex justify-between">
                <h1>Category List</h1>
                
                
                <Link to='/addcategory' className="btn btn-accent">Add Category</Link >
            </div>
            <div className="flex flex-col">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            No
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Category Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.map((el,i) => {
                                           return <TableDataCategory key={el.id} index={i + 1} data={el}/>
                                        })   
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}