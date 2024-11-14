import Image from 'next/image'
export default function Slider () {
  return (
    <>
      <Image
        src='/banner_web_repuestor.png'
        alt='Slider'
        width={1350}
        height={350}
        className='h-[350px] w-full object-cover hidden md:block'
      />
      <Image
        src='/banner_web_repuestor.png'
        alt='Slider'
        width={675}
        height={150}
        className='h-[150px] w-full object-cover md:hidden block'
      />
    </>
  )
}
