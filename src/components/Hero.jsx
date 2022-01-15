import Image from 'next/image';

export default function Hero() {
  return (
    <div className={'flex h-[500px] bg-cover bg-hero'}>
      <div className='flex w-7/12 tracking-widest'>
        <div className='pl-24 mt-16 w-full'>
          <div className='text-4xl font-bold'>fwywd in 淡路：2期生募集</div>
          <div className='mt-6 w-10/12 text-lg'>
            起業を志す仲間と共に働き、学び、起業を目指す
            <br />
            協働・共創型ベンチャー育成プログラム
          </div>
          <div className='mt-20 text-2xl font-bold text-black-base'>
            応募形式
            <p className='mt-4'>1. 淡路島に移住してフルコミット</p>
            <p>2. 淡路島には移住せず、オンラインでフルコミット</p>
            <p>3. 今の仕事を継続しながら、オンライン参加</p>
          </div>
        </div>
      </div>
      <div className='w-6/12'>
        <div className='pl-24'></div>
      </div>
    </div>
  );
}
