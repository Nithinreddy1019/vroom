
import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {

    const date = new Date();

    const time = date.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'})
    const today = (new Intl.DateTimeFormat('en-IN', {dateStyle: 'full'})).format(date);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>

        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
            <div className='h-full flex flex-col justify-between p-10 max-md:px-5 max-md:py-8 lg:p-11'>
                <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 1:00 PM</h2>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-extrabold lg:text-7xl'>
                        {time}
                    </h1>
                    <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                        {today}
                    </p>

                </div>

            </div>

        </div>

        <MeetingTypeList />
    </section>
  )
}

export default Home
