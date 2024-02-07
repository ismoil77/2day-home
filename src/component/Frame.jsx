import React from 'react'

function Frame() {
    return (
        <>
            <div className='w-[90%] flex flex-col gap-[30px] m-auto mt-[30px] '>
                <div className='bg-[#263057] flex flex-col gap-[20px] rounded-[15px] p-[30px_50px]'>
                    <h1 className='text-[#FFF] text-[38px] font-[Circe] font-bold not-italic'>Трудно выбрать? Мы поможем! </h1>
                    <div className='flex gap-[30px]'>
                        <input className='w-[390px] p-[10px_20px] h-[46px] rounded-[5px] bg-[#FFF]' type="text" placeholder='+7 (___) ___-__-__ *' />
                        <input className='w-[390px] p-[10px_20px] h-[46px] rounded-[5px] bg-[#FFF]' type="text" placeholder='Как Вас зовут? *'/>
                        <button className='rounded-[60px] bg-[#6984F0] text-[#FFF] text-[18px] font-[Circe] font-normal not-italic w-[221px] h-[46.23px] '>Жду звонка</button>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" />
                        <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
                    </div>
                </div>
                <div className='bg-[#263057] flex flex-col gap-[20px] rounded-[15px] p-[30px_50px]'>
                    <h1 className='text-[#FFF] text-[38px] font-[Circe] font-bold not-italic'>Проверить возможность подключения по вашему адресу </h1>
                    <div className='flex gap-[30px]'>
                        <img src="./src/img/Group 800.png" alt="" />
                        <input className='w-[390px] p-[10px_20px]  h-[46px] rounded-[5px] bg-[#FFF]' placeholder='Улица' type="text" />
                        <input className='w-[390px] p-[10px_20px]  h-[46px] rounded-[5px] bg-[#FFF]' placeholder='Дом' type="text" />
                        <button className='rounded-[60px] bg-[#6984F0] text-[#FFF] text-[18px] font-[Circe] font-normal not-italic w-[221px] h-[46.23px] '>Проверить</button>
                    </div>
                </div>
                <div className='bg-[#263057] flex flex-col gap-[20px] rounded-[15px] p-[50px_50px]'>
                    <div className='flex items-center justify-between gap-[30px]'>
                        <h1 className='text-[#FFF] text-[38px] font-[Circe] font-bold not-italic'>Проверить скорость интернета</h1>
                        <button className='rounded-[60px] bg-[#6984F0] text-[#FFF] text-[18px] font-[Circe] font-normal not-italic w-[221px] h-[46.23px] '>Проверить</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame