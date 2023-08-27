import React from "react"

export default function Moviecards({Title,Year,Runtime,Poster}) {
    return(
        <div className="card-div p-4 m-2 w-[300px] bg-black">
            <div className="card-heading my-4 mx-2 w-full">
                <h1 className="text-xl text-white">{Title}</h1>
            </div>
            <div className="card-poster my-4  w-full flex justify-center items-center">
                <img src={Poster} alt="Poster" className="w-[80%]" />
            </div>
            <div className="year-div my-4 mx-2 w-full">
                <h1 className="text-white">{Year}</h1>
            </div>
            <div className="runtime-div my-4 mx-2 w-full">
                <h1 className="text-white">{Runtime}</h1>
            </div>
        </div>
    )
};