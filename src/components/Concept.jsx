import Image from 'next/image';

export default function Concept() {
  return (
    <div className='text-black-base bg-cover bg-concept'>
      <div className='flex items-center py-10 mx-auto w-[90%]'>
        <div>
          <h2 className='mb-5 text-3xl font-bold text-left'>企画者の想い</h2>
          <Image src='/yoshizaki.png' width={600} height={1000} alt='吉崎さん写真'></Image>
        </div>
        <div className='ml-10'>
          <div className='text-lg tracking-wider leading-6'>
            <p>次世代の起業家たちの本気で挑戦する姿を最前線で応援したい。</p>
            <p>起業家育成の実現は私にとって夢のひとつでした。</p>
            <p>夢に満ち溢れた本気の人達に囲まれて強烈な刺激を受けながら過ごせる日々。</p>
            <p>私はまだ大きく成功した起業家でも投資家でもありません。</p>
            <p>だからこそ、みなさんへ等身大のアドバイスができると信じています。</p>
            <p>起業とは「心の火をけさない」こと。</p>
            <p>私が起業初期にかけてほしかった言葉を皆さんに届けます。</p>
            <p>
              挑戦しないことこそリスクの時代に、市場価値の上がる挑戦を私と一緒に取り組みましょう。
            </p>
          </div>
          <div className='p-3 mt-5 rounded-md border border-base-green border-solid'>
            <p className='text-xl font-bold'>吉崎 亮介</p>
            <p className='text-base-green'>RYOSUKE YOSHIZAKI</p>
            <p>株式会社キカガク 代表取締役会長</p>
            <p className='pt-5'>
              1991年生まれ、30歳。舞鶴高専専攻科、京都大学大学院を修了し、新卒でベンチャー企業へ就職。その後、友人と３人での起業を経て、2017年に株式会社キカガクを１人で創業。
              創業５期目の現在、創業から全ての期を黒字で経営し、社員は35名を超える。
              26歳から東京大学で非常勤講師として教鞭を執るなど教育の改革を目指す。
              得意なことは難しいことをわかりやすく伝えること。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
