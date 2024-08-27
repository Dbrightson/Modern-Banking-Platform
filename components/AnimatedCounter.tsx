'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }:{amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimal='2'
        prefix='$'
        end={amount}
        duration={2}
        />
    </div>
  )
}

export default AnimatedCounter