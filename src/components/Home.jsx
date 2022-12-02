import React from 'react'
import Particle from './Particle'
import Particle2 from './Particle2'

export default function Home() {
    return (
        // <div className='w-screen h-screen bg-black' >
        <div className='h-screen'>
            <div className='  h-screen bg-black ' >
                <Particle />
                <h1>Home</h1>
            </div>
            <div className='  h-screen bg-yellow-600 ' >
                <Particle2 />
            </div>
        </div>

    )
}
