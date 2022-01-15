import Image from 'next/image';

export default function ValuesCard(props) {
  return (
    <>
      <div className='w-1/3 h-full' style={{ borderRight: '3px solid #6bc2c3' }}>
        <div>
          <div className='inline-block'>
            <Image
              src='/image/man1.png'
              width={160}
              height={160}
              objectFit='contain'
              alt='価値観を表す画像'
            />
          </div>
          <div>
            <span className='inline-block mt-1 font-bold'>片山真介</span>
            <br />
            <span className='font-bold'>（かたやましんすけ）</span>
          </div>
          <div className='inline-block mt-3 w-10/12 h-40 text-left break-words'>
            <p className='font-bold'>■参加形式</p>
            <p>仕事を続けながら、オンライン参加</p>
            <p className='mt-6 font-bold'>■応募理由</p>
            <p>
              起業を成功させるために本気で挑戦し、人生を変えていける場であることが、吉崎さんからの説明で伝わってきたことが大きな要因です。
            </p>
            <p className='mt-6 font-bold'>■現時点での感想</p>
            <p>
              環境が異なる仲間との出会いから、新しい世界、価値観、情報に触れる機会がとても増えました。毎日がとても刺激的で、今までに感じたことのないワクワクを感じています。
            </p>
          </div>
        </div>
      </div>

      <div className='w-1/3 h-full' style={{ borderRight: '3px solid #6bc2c3' }}>
        <div>
          <div className='inline-block'>
            <Image
              src='/image/man2.png'
              width={160}
              height={160}
              objectFit='contain'
              alt='価値観を表す画像'
            />
          </div>
          <div>
            <span className='inline-block mt-1 font-bold'>八木圭輔</span>
            <br />
            <span className='font-bold'>（やぎけいすけ）</span>
          </div>
          <div className='inline-block mt-3 w-10/12 h-40 text-left break-words'>
            <p className='font-bold'>■参加形式</p>
            <p>仕事を続けながら、オンライン参加</p>
            <p className='mt-6 font-bold'>■応募理由</p>
            <p>
              自分で社会を動かすためにはスキルを徹底的に鍛える必要があり、その環境としてfywydは最適と考えました。仕事を続けながらというのも魅力でした。
            </p>
            <p className='mt-6 font-bold'>■現時点での感想</p>
            <p>
              皆さんの意識が高く、良い刺激を受けてモチベーションを維持できています。プログラミングスキルはまだ始めたばかりですが、助け合える環境があるので、成長スピードが段違いと感じています。
            </p>
          </div>
        </div>
      </div>

      <div className='w-1/3 h-full'>
        <div>
          <div className='inline-block'>
            <Image
              src='/image/man3.png'
              width={160}
              height={160}
              objectFit='contain'
              alt='価値観を表す画像'
            />
          </div>
          <div>
            <span className='inline-block mt-1 font-bold'>米勝矢</span>
            <br />
            <span className='font-bold'>（よねかつや）</span>
          </div>
          <div className='inline-block mt-3 w-10/12 h-40 text-left break-words'>
            <p className='font-bold '>■参加形式</p>
            <p>淡路島に移住して、フルコミット</p>
            <p className='mt-6 font-bold'>■応募理由</p>
            <p>
              淡路島に移住して、仲間と共に本気で起業に挑戦することで、起業の成功確率を高められると感じました。また吉崎さんの教育にかける想いに、強く共感しました。
            </p>
            <p className='mt-6 font-bold'>■現時点での感想</p>
            <p>
              主体的で本気の方々と日々過ごすことで、自分自身の意識が大きく変わりました。
              「仲間と共に、絶対に起業を成功させる」という、更に強い意識を持つようになりました。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
