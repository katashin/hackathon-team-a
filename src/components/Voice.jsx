import Image from 'next/image';
import ValuesCard from './ValuesCard';

export default function Voice() {
  return (
    <div className='mb-8'>
      <div className='text-center' id='values'>
        <div className='inline-block'>
          <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
            1期生の声（起業に向けて邁進中！）
          </span>
        </div>
      </div>
      <div className='text-center'>
        <div className='inline-block mt-6 w-10/12 bg-white'>
          <div className='flex h-full'>
            <ValuesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
