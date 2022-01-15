import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

export default function PageFooter() {
  return (
    <div className='py-10 text-center text-white bg-black-base'>
      <div className='flex justify-center items-center'>
        <p className='text-sm uppercase'>created by</p>
        <p className='ml-5 text-2xl font-bold'>サンプル 太郎</p>
      </div>
      <div className='pt-5 hover:opacity-70 cursor-pointer'>
        <Image src='/logo_white.png' width={100} height={120} alt='フッダーロゴ'></Image>
      </div>
      <p className='pt-5'>© 2021.01.15 team-a</p>
    </div>
  );
}
``;
