import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFromFood } from '../actions/creator'
import CardMenu from '../components/CardMenu'
import NavMenu from '../components/navMenu'
// import useFetchData from '../hooks/useFetchData'



export default function HomePage() {
    const { isLoading, foods , error } = useSelector((state) => (state.food))
    // console.log(isLoading,'<<<<<');
    // console.log(foods,'<<<<<');
    const dispatch = useDispatch()

    useEffect(()=>{
        (async ()=>{
            await dispatch(fetchFromFood());
        })();
    },[]);
        

    return(
        <div className="h-fit  bg-[url('https://awrestaurants.com/sites/default/files/OrangeWallpaper-full.jpg')]">
            <div className='flex justify-center'>
                <NavMenu/>
            </div>
           <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-5 mb-9 mt-9'>
                    {foods.map(el => {
                        return <CardMenu key={el.id} el={el}/>
                    })}                    
                </div>
           </div>
        </div>
    )
}