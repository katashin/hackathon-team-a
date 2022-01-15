import Image from 'next/image';
import Link from 'next/link';
import MenuList from './MenuList';

const headerMenu = [
  ['応募について', 'about'],
  ['企画者の想い', 'skills'],
  ['参加者の声', 'values'],
];

export default function PageHeader() {
  return (
    <div>
      <div className='flex justify-between h-20'>
        <div className='w-full'>
          <Link href='/'>
            <a>
              <Image
                src='/image/logo.png'
                width={160}
                height={80}
                objectFit='contain'
                alt='ヘッダーアイコン'
                className='hover:opacity-75 hover:cursor-pointer'
              />
            </a>
          </Link>
        </div>
        <div className='flex justify-end w-full'>
          {headerMenu.map((value) => (
            <>
              <MenuList text={value[0]} id={value[1]} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
