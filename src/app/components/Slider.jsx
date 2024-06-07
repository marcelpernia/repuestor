import Image from 'next/image'
export default function Slider() {
  return (
    <Image src="/banner_web_repuestor.png" 
      alt="Slider" 
      width={1920} 
      height={1080} 
      className='min-h-[150px] w-full object-cover'
    />
  )
}