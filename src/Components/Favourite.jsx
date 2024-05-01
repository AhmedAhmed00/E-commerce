import React from 'react'

export default function Favourite({ isFav, handleAddToWishList, handleDeleteFromWishlist, _id }) {

    return (
        <>
            {
                isFav ?
                    <button onClick={() => handleDeleteFromWishlist(_id)}
                        className='absolute top-3 left-5 rounded-full z-10'>
                        < svg height="40px"
                            viewBox="0 0 24.00 24.00" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#550000"
                        ><g id="SVGRepo_bgCarrier" ></g>
                            <g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"
                            ></g><g id="SVGRepo_iconCarrier">
                                <path fill="#e99696" d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" ></path> </g></svg >
                    </button >

                    :
                    <button onClick={() => handleAddToWishList(_id)} className='absolute top-3 left-5 rounded-full  z-10'>

                        <svg height="40px"
                            viewBox="0 0 24.00 24.00" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#550000"
                        ><g id="SVGRepo_bgCarrier" ></g>
                            <g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"
                            ></g><g id="SVGRepo_iconCarrier">
                                <path fill="" d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" ></path> </g></svg>
                    </button>



            }
        </>
    )
}
