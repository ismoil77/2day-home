import React from 'react'

function Card({ Base, Base2, Base3, Base4, Base5, month, month2, month3, month4, month5, pl, pl2, pl3, pl4, pl5 }) {
    return (
        <>
            <div className='bg-[#FFF] flex flex-col gap-[30px] p-[50px_0px] mt-[50px] w-[90%] m-auto'>
                <div className='flex justify-center'>
                    <ul className='flex gap-[100px]'>
                        <li className='text-[#263057] text-[20px] font-[Circe] not-italic font-bold'>Интернет</li>
                        <li className='text-[#263057] text-[20px] font-[Circe] not-italic font-normal'>Интернет + Кабельное ТВ <span>ХИТ</span></li>
                        <li className='text-[#263057] text-[20px] font-[Circe] not-italic font-normal'>Интернет + Smart TV</li>
                        <li className='text-[#263057] text-[20px] font-[Circe] not-italic font-normal'>Интернет + Телефония</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-[228px]  p-[15px_20px] rounded-[30px] flex flex-col gap-[10px]'>
                        <div className='border-b-[1px] flex flex-col gap-[10px]'>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{Base}</h1>
                            <h2 className='ml-[20px] text-[24px] text-[#263057] font-[Circe] font-bold not-italic'>{month}</h2>
                            <h4 className='mb-[10px] text-[18px] text-[#263057] font-[Circe] font-normal not-italic'>Подробнее</h4>
                        </div>
                        <div>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{pl} <span className='text-[18px] text-[#263057] font-[Circe] font-normal not-italic'> ₽/мес</span></h1>
                            <button className='rounded-[30px] bg-[#6984F0] shadow-xl w-[191px] h-[35px] '>Подключить</button>
                        </div>
                    </div>
                    <div className='w-[228px] p-[15px_20px] rounded-[30px] flex flex-col gap-[10px]'>
                        <div className='border-b-[1px] flex flex-col gap-[10px]'>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{Base2}</h1>
                            <h2 className='ml-[20px] text-[24px] text-[#263057] font-[Circe] font-bold not-italic'>{month2}</h2>
                            <h4 className='mb-[10px] text-[18px] text-[#263057] font-[Circe] font-normal not-italic'>Подробнее</h4>
                        </div>
                        <div>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{pl2} <span className='text-[18px] text-[#263057] font-[Circe] font-normal not-italic'> ₽/мес</span></h1>
                            <button className='rounded-[30px] bg-[#6984F0] shadow-xl w-[191px] h-[35px] '>Подключить</button>
                        </div>
                    </div>
                    <div className='w-[228px] bg-[#273158] p-[15px_20px] rounded-[30px] flex flex-col gap-[10px]'>
                        <div className='border-b-[1px] flex flex-col gap-[10px]'>
                            <h1 className='text-[#FFF] text-[30px] font-[Circe] font-bold not-italic'>{Base3}</h1>
                            <h2 className='ml-[20px] text-[24px] text-[#FFF] font-[Circe] font-bold not-italic'>{month3}</h2>
                            <h4 className='mb-[10px] text-[18px] text-[#FFF] font-[Circe] font-normal not-italic'>Подробнее</h4>
                        </div>
                        <div>
                            <h1 className='text-[#FFF] text-[30px] font-[Circe] font-bold not-italic'>{pl3} <span className='text-[18px] text-[#FFF] font-[Circe] font-normal not-italic'> ₽/мес</span></h1>
                            <button className='rounded-[30px] bg-[#6984F0] shadow-xl w-[191px] h-[35px] '>Подключить</button>
                        </div>
                    </div>
                    <div className='w-[228px] p-[15px_20px] rounded-[30px] flex flex-col gap-[10px]'>
                        <div className='border-b-[1px] flex flex-col gap-[10px]'>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{Base4}</h1>
                            <h2 className='ml-[20px] text-[24px] text-[#263057] font-[Circe] font-bold not-italic'>{month4}</h2>
                            <h4 className='mb-[10px] text-[18px] text-[#263057] font-[Circe] font-normal not-italic'>Подробнее</h4>
                        </div>
                        <div>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{pl4} <span className='text-[18px] text-[#263057] font-[Circe] font-normal not-italic'> ₽/мес</span></h1>
                            <button className='rounded-[30px] bg-[#6984F0] shadow-xl w-[191px] h-[35px] '>Подключить</button>
                        </div>
                    </div>
                    <div className='w-[228px]  p-[15px_20px] rounded-[30px] flex flex-col gap-[10px]'>
                        <div className='border-b-[1px] flex flex-col gap-[10px]'>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{Base5}</h1>
                            <h2 className='ml-[20px] text-[24px] text-[#263057] font-[Circe] font-bold not-italic'>{month5}</h2>
                            <h4 className='mb-[10px] text-[18px] text-[#263057] font-[Circe] font-normal not-italic'>Подробнее</h4>
                        </div>
                        <div>
                            <h1 className='text-[#263057] text-[30px] font-[Circe] font-bold not-italic'>{pl5} <span className='text-[18px] text-[#263057] font-[Circe] font-normal not-italic'> ₽/мес</span></h1>
                            <button className='rounded-[30px] bg-[#6984F0] shadow-xl w-[191px] h-[35px] '>Подключить</button>
                        </div>
                    </div>
                </div>
                <button className='text-[#FFF] text-[18px] font-[Circe] font-normal not-italic w-[250px] h-[48px] bg-[#6984F0] rounded-[60px] m-auto'>Все тарифы</button>
            </div>
        </>
    )
}

export default Card