import React from 'react'

function Reservation({ date, date2, date3, p, p2, p3, img, img2, img3 }) {
    return (
        <>
            <div className='w-[90%] m-auto flex justify-between'>
                <div className='flex flex-col gap-[20px] p-[39px_33px] w-[380px] bg-[#FFF] rounded-[15px]'>
                    <img src={img} className='w-[318px]' alt="" />
                    <div className='flex flex-col gap-[20px] items-start '>
                        <h3 className='text-[#263057] text-[18px] font-[Circe] font-bold not-italic'>{date}</h3>
                        <p className='text-[#263057] text-[16px] font-[Circe] font-normal not-italic'>
                            {p}
                        </p>
                        <button className='text-[#6984F0] text-[16px] font-[Manrope] font-medium not-italic'>Подробнее</button>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] p-[39px_33px] w-[380px] bg-[#FFF] rounded-[15px]'>
                    <img src={img2} className='w-[318px]' alt="" />
                    <div className='flex flex-col gap-[20px] items-start '>
                        <h3 className='text-[#263057] text-[18px] font-[Circe] font-bold not-italic'>{date2}</h3>
                        <p className='text-[#263057] text-[16px] font-[Circe] font-normal not-italic'>
                            {p2}
                        </p>
                        <button className='text-[#6984F0] text-[16px] font-[Manrope] font-medium not-italic'>Подробнее</button>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] p-[39px_33px] w-[380px] bg-[#FFF] rounded-[15px]'>
                    <img src={img3} className='w-[318px]' alt="" />
                    <div className='flex flex-col gap-[20px] items-start '>
                        <h3 className='text-[#263057] text-[18px] font-[Circe] font-bold not-italic'>{date3}</h3>
                        <p className='text-[#263057] text-[16px] font-[Circe] font-normal not-italic'>
                            {p3}
                        </p>
                        <button className='text-[#6984F0] text-[16px] font-[Manrope] font-medium not-italic'>Подробнее</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation