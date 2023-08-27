import React from "react"
import { useSelector} from "react-redux"

export default function Moviecards({Title,Year,Runtime,Poster}) {
    const theme = useSelector((state)=>state.Theme);
    return(
        <div className={`card-div p-4 m-2 w-[300px] shadow-md ${theme.theme === 'light'?`bg-black shadow-black`:`bg-white shadow-black`} `}>
            <div className="card-heading my-4 mx-2 w-full">
                <h1 className={`text-xl ${theme.theme === 'light'?`text-white`:`text-black`}`}>{Title}</h1>
            </div>
            <div className="card-poster my-4  w-full flex justify-center items-center">
                <img src={Poster} alt="Poster" className="w-[80%]" />
            </div>
            <div className="year-div my-4 mx-2 w-full">
                <h1 className={` ${theme.theme === 'light'?`text-white`:`text-black`}`}>{Year}</h1>
            </div>
            <div className="runtime-div my-4 mx-2 w-full">
                <h1 className={` ${theme.theme === 'light'?`text-white`:`text-black`}`}>{Runtime}</h1>
            </div>
        </div>
    )
};