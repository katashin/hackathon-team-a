export default function Content() {
  return (
    <div className='mx-auto w-[80%] text-black-base mt-10'>
      <h2 className='text-3xl font-bold'>応募について</h2>
      <div className='text-2xl'>
        <div className='pt-8'>
          <p>・募集期間：2022年4月1日〜2022年8月31日</p>
        </div>
        <div className='pt-8'>
          <p>・スキル：志、起業への熱い想いを重視します</p>
        </div>
        <div className='pt-8'>
          <p>・募集エントリー：以下のフォームからエントリーシートを提出してください</p>
        </div>
      </div>
      <div className='my-10'>
        <a href='https://fwywd.com/awaji' target={'_blank'} rel='noreferrer'>
          <button className='p-2 text-sm font-bold text-white bg-base-green rounded-md border hover:opacity-70'>
            詳しい説明はこちらから
          </button>
        </a>
      </div>
    </div>
  );
}
