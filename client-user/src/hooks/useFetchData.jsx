// import { useEffect, useState } from "react";


// export default function useFetchData(url) {
//     const [items, setItem] = useState([])
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url)
//                 if(!response.ok) {
//                     throw new Error(response.text())
//                 }
//                 const data = await response.json()
//                 setItem(data)
//                 console.log(data)
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchData()
//     },[]) 

//     return {items}
// }

import { useState, useEffect } from "react";

export default function useFetchData(source) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const response = await fetch(source)
                if(!response.ok) {
                    throw new Error(response.text())
                }
                const data = await response.json()
                console.log('masuk')
                console.log(data)
                setItems(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchedData()
    }, [])
    return {items}
}