import Link from 'next/link';
import Image from 'next/link';
import MenuList from './MenuList';

const headerMenu = [
  ['ABOUT', 'about'],
  ['SKILLS', 'skills'],
  ['VALUES', 'values'],
  ['FUTURE', 'future'],
];

export default function PageHeader() {
  return (
    <div>
      <div className='flex justify-between h-20'>
        <div className='w-full'>
          <Link href='/'>
            <a></a>
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
