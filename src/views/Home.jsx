import React from 'react'
import Section from '../components/Sections/Section'

const Home = () => {
  return (
    <div className='grid gap-y-8 pb-[182px]'>
      <Section title="Recently played" more="./seeall"/>
      <Section title="Popular radio" more="./seeall"/>
      <Section title="Daily mix" more="./seeall"/>
    </div>
  )
}

export default Home