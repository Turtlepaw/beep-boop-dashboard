import type { NextPage } from 'next'
import Image from 'next/image'
import { Link } from '../components/Link'

export default function Home(){
  return (
    <>
      <div className='circutbg clip pl-16 pt-16'>
        <div className='title'>Keeping Server<br/> Management Easy</div>
        <p className='font-semibold poppins'>We're making Discord server management easy</p>
      </div>
      <div className='poppins text-center py-10 pb-20'>
        <div className='font-bold text-5xl'>This project is under constuction.</div>
        <p className='text-xl font-medium text-light pt-3'>While we work on it, you can get updates in our <Link href='/support'>Discord server</Link></p>
      </div>
    </>
  )
}
