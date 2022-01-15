export default function Content() {
  return (
    <div className='mx-auto w-[80%] text-black-base'>
      <h2 className='text-3xl font-bold'>内容</h2>
      <div className='text-2xl'>
        <div className='pt-8'>
          <p>・募集期間：2022年4月1日〜2022年8月31日</p>
        </div>
        <div className='pt-8'>
          <p>
            ・スキル：基本的不問。プログラミングスキルはあった方が良いですが、それより人柄、起業の志を重視します
          </p>
        </div>
        <div className='pt-8'>
          <p>・募集エントリー：以下のフォームからエントリーシートを提出してください</p>
        </div>
      </div>
      <div className="my-10">
        <button className='p-2 text-sm text-white bg-base-green rounded-md border hover:opacity-70'>
          応募はこちらから
        </button>
      </div>
    </div>
  );
}
