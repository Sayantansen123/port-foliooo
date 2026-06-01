import React from 'react'

export const About = () => {
    return (
        <section className="about h-screen bg-[url('/bg-white.jpg')] bg-cover bg-center bg-no-repeat " id="about">

            {/* left section */}
            <div>
                <div className="pt-30 pl-6 z-100">
                    <div className='font-bebas text-[70px] md:text-[180px] text-white leading-none'>HE<span className='text-red-900 italic'>LL</span>O</div>
                    <div className='text-[30px] md:text-[90px] outline-texts  leading-none font-bebas'>I'M SAYANTAN.</div>
                    <div className='font-finger text-white md:text-[20px]'>Crafting seamless digital experiences through code and creativitys.</div>
                </div>




            </div>


            <div className='fixed bottom-0 right-0 z-10'>
                <img src="/about-hero.png" alt="" />
            </div>
        </section>
    )
}
