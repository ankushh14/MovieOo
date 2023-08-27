import React from 'react';

export default function Home(){
    return(
        <div className="home w-full h-[90vh] bg-cover bg-[url('https://images.pexels.com/photos/7234304/pexels-photo-7234304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:bg-[url('https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <div className="text-3xl w-full h-[70%] flex justify-center items-center text-white p-4 pt-4 md:px-8">
                <p className='text-center font-bold italic w-full'>A captivating blend of storytelling, visuals, and emotion that transport audiences to new worlds and perspectives.
                </p>
            </div>
        </div>
    )
};