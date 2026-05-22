/* Shared app data + line icon set for the renewal draft.
   Attached to window so each direction file can use them. */

const RENEWAL_APPS = [
  {
    id: 'proscout',
    name: 'プロスカウト',
    nameEn: 'ProScout',
    category: '野球 / スポーツ',
    icon: 'uploads/IMG_7559 4.PNG',
    catch: 'あなたの成績。プロなら年俸いくら？',
    tagline: '野球成績を簡単入力、自動計算、らくらく管理。',
    desc: 'あなたの野球成績を入力するだけで、もしプロ野球選手だったら年俸がいくらになるか自動計算。成績の記録・管理から、おもしろ機能まで。野球好きのためのお楽しみアプリ。',
    accent: '#C24A1F',
    features: [
      { ico: 'baseball', label: '成績入力 / 自動計算' },
      { ico: 'coin',     label: '年俸査定（NPB & MLB）' },
      { ico: 'dumbbell', label: '練習登録' },
      { ico: 'speed',    label: 'スイング / 投球スピード' },
      { ico: 'chart',    label: '成長グラフ' },
      { ico: 'quiz',     label: '野球ルールクイズ' },
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/%E3%83%97%E3%83%AD%E3%82%B9%E3%82%AB%E3%82%A6%E3%83%88-%E9%87%8E%E7%90%83%E3%82%B9%E3%82%B3%E3%82%A2%E5%B9%B4%E4%BF%B8%E6%9F%BB%E5%AE%9A/id6760993493',
    privacyUrl: 'privacy-proscout.html',
    status: 'available',
  },
  {
    id: 'ganbatta',
    name: 'がんばった帳',
    nameEn: 'Ganbatta-cho',
    category: '家族 / お小遣い',
    icon: 'uploads/IMG_7593 3.PNG',
    catch: 'どんどんがんばる、かしこく使う。',
    tagline: 'がんばることを登録、終わったら承認、おこづかい自動加算。',
    desc: 'やることをリストに登録して、終わったら親に承認してもらう。自動でおこづかいが加算される、子どもも親もうれしいアプリ。お小遣い帳機能で収支管理もできる。',
    accent: '#C44A78',
    features: [
      { ico: 'check',    label: 'がんばること / おこづかい登録' },
      { ico: 'thumb',    label: '承認機能' },
      { ico: 'coin',     label: 'おこづかい自動計算' },
      { ico: 'notebook', label: 'おこづかい帳' },
      { ico: 'list',     label: '履歴確認' },
      { ico: 'family',   label: '５名まで登録可能' },
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/%E3%81%8C%E3%82%93%E3%81%B0%E3%81%A3%E3%81%9F%E5%B8%B3-%E3%81%8A%E3%81%93%E3%81%A5%E3%81%8B%E3%81%84%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id6761584121',
    privacyUrl: 'privacy-ganbatta.html',
    status: 'available',
  },
  {
    id: 'pukapuka',
    name: 'ぷかぷか',
    nameEn: 'Pukapuka',
    category: 'タスク管理',
    icon: 'uploads/IMG_8122 3.PNG',
    catch: 'やること、ぷかぷか見える化。',
    tagline: 'タスクを浮かべて、終わったら壊す。直感的タスク管理。',
    desc: 'その日やること、毎日やること、全部ぷかぷか並べて可視化。終わったら弾けるように壊す爽快感。空き時間とやることを直感で理解できる。',
    accent: '#5B5BC4',
    features: [
      { ico: 'bubble',   label: 'タスクをバブルで可視化' },
      { ico: 'pop',      label: '完了でバブルを破裂' },
      { ico: 'clock',    label: '空き時間の見える化' },
      { ico: 'drag',     label: 'ドラッグで自由に移動' },
      { ico: 'repeat',   label: '繰り返しタスク対応' },
      { ico: 'star',     label: 'ぷかぷかPro' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/%E3%81%B7%E3%81%8B%E3%81%B7%E3%81%8B-%E3%82%86%E3%82%8B-%E3%81%8F%E3%82%BF%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86/id6764020033',
    privacyUrl: 'privacy-pukapuka.html',
    status: 'available',
  },
  {
    id: 'subsuku',
    name: 'サブスク',
    nameEn: 'Subsuku',
    category: 'お金 / 家計',
    icon: 'uploads/icon-subsuku.png',
    catch: '気付けば、ムダが消える。',
    tagline: '毎月のサブスクを見える化する管理アプリ。',
    desc: '100超のサービスをワンタップで登録でき、月額合計、カテゴリ別ドーナツ、請求カレンダー、価値配点診断で、納得できる支出だけに整える。',
    accent: '#2D7A6F',
    features: [
      { ico: 'tap',      label: '100超のプリセットから登録' },
      { ico: 'chart',    label: '月額 / 年額 / カテゴリ可視化' },
      { ico: 'calendar', label: '請求カレンダー & 通知' },
      { ico: 'compass',  label: '価値配点で支出を診断' },
      { ico: 'widget',   label: 'ホーム画面ウィジェット' },
      { ico: 'link',     label: '解約ページへワンタップ' },
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF-%E3%82%89%E3%81%8F%E3%82%89%E3%81%8F%E7%AE%A1%E7%90%86/id6769662848',
    privacyUrl: 'privacy-subsuku.html',
    status: 'available',
  },
  {
    id: 'douga',
    name: '動画de計測',
    nameEn: 'Douga de Keisoku',
    category: '動画 / 計測',
    icon: 'uploads/icon-douga.png',
    catch: '動画に、時間を焼き付ける。',
    tagline: 'ストップウォッチを動画に合成。コマ単位で正確に。',
    desc: '走りも、技も、作業も。動画と一緒に経過時間を記録できるiPhoneアプリ。フレーム単位の精密スクラブが可能。',
    accent: '#1F4FB8',
    features: [
      { ico: 'target',   label: 'フレーム単位の制御' },
      { ico: 'film',     label: '動画にウォッチ合成' },
      { ico: 'wheel',    label: 'iPod風ホイールUI' },
      { ico: 'scissors', label: 'トリミング機能' },
      { ico: 'wave',     label: '音声波形で位置把握' },
      { ico: 'zoom',     label: 'ピンチで拡大' },
    ],
    appStoreUrl: null,
    privacyUrl: 'privacy-douga.html',
    status: 'coming',
  },
];

/* ── Line icon set (1px stroke, currentColor) ──
   All are 24x24 viewBox. Use as <RIcon name="baseball" size={20} /> */
const RIconPaths = {
  baseball: <><circle cx="12" cy="12" r="9" /><path d="M5 7c2 1 3 3 3 5s-1 4-3 5M19 7c-2 1-3 3-3 5s1 4 3 5" /></>,
  coin:     <><circle cx="12" cy="12" r="8" /><path d="M9 10h4.5a1.5 1.5 0 0 1 0 3H9m0 0h5m-3-5v8" /></>,
  dumbbell: <><path d="M3 12h2m14 0h2M6 8v8m12-8v8M9 10v4m6-4v4M9 12h6" /></>,
  speed:    <><path d="M3 17a9 9 0 1 1 18 0" /><path d="M12 17l4-6" /></>,
  chart:    <><path d="M4 4v16h16" /><path d="M7 15l4-4 3 3 5-6" /></>,
  quiz:     <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 16.5h.01" /></>,
  check:    <><path d="M4 12l5 5 11-12" /></>,
  thumb:    <><path d="M7 21V10l4-7c1.5 0 2.5 1 2.5 2.5L13 10h5.5a2 2 0 0 1 2 2.3l-1.3 7a2 2 0 0 1-2 1.7H7zM4 10h3v11H4z" /></>,
  notebook: <><path d="M6 3h12v18H6z" /><path d="M9 3v18M6 8h3M6 12h3M6 16h3" /></>,
  list:     <><path d="M8 6h12M8 12h12M8 18h12" /><circle cx="4" cy="6" r=".7" /><circle cx="4" cy="12" r=".7" /><circle cx="4" cy="18" r=".7" /></>,
  family:   <><circle cx="7" cy="8" r="2.5" /><circle cx="17" cy="8" r="2.5" /><path d="M3 19c0-2.5 2-4 4-4s4 1.5 4 4M13 19c0-2.5 2-4 4-4s4 1.5 4 4" /></>,
  bubble:   <><circle cx="10" cy="10" r="6" /><circle cx="17" cy="16" r="3" /></>,
  pop:      <><path d="M12 4l1.5 3L17 5l-1 4 4 1-3.5 2 2 4-4-1-1 4-2-3.5L8 19l1-4-4-1 3-2.5L6 7l4 1z" /></>,
  clock:    <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  drag:     <><circle cx="9" cy="6" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="9" cy="18" r="1" /><circle cx="15" cy="6" r="1" /><circle cx="15" cy="12" r="1" /><circle cx="15" cy="18" r="1" /></>,
  repeat:   <><path d="M4 8h12l-3-3M20 16H8l3 3" /></>,
  star:     <><path d="M12 3l2.6 5.5 6 .9-4.4 4.3 1 6L12 17l-5.2 2.7 1-6L3.4 9.4l6-.9z" /></>,
  tap:      <><path d="M9 11V6a2 2 0 0 1 4 0v8" /><path d="M13 11l4 2.5c1 .6 1.5 1.5 1.5 2.7V19a2 2 0 0 1-2 2h-5.5c-1.2 0-2-.4-2.7-1.3L7 16.5" /></>,
  calendar: <><rect x="4" y="6" width="16" height="14" rx="1" /><path d="M4 10h16M9 4v4M15 4v4" /></>,
  compass:  <><circle cx="12" cy="12" r="9" /><path d="M15 9l-1.5 4.5L9 15l1.5-4.5z" /></>,
  widget:   <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></>,
  link:     <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  target:   <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  film:     <><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 8h2M4 12h2M4 16h2M18 8h2M18 12h2M18 16h2M9 4v16M15 4v16" /></>,
  wheel:    <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></>,
  scissors: <><circle cx="6" cy="7" r="2.5" /><circle cx="6" cy="17" r="2.5" /><path d="M8 8.5L20 19M8 15.5L20 5" /></>,
  wave:     <><path d="M3 12h2l2-6 3 12 3-10 3 8 2-4h3" /></>,
  zoom:     <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5M9 11h4M11 9v4" /></>,
  arrow:    <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  external: <><path d="M14 5h5v5M19 5l-9 9M12 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6" /></>,
  apple:    <><path d="M16 3.5a3.4 3.4 0 0 1-1 2.5 2.8 2.8 0 0 1-2.3 1c-.1-1 .4-2 1-2.6.7-.7 1.7-1 2.3-.9zM18.6 16.3c-.4 1-1 1.9-1.6 2.7-.9 1-2 2-3.3 2-1.2 0-1.5-.7-3.2-.7s-2 .7-3.2.7c-1.3 0-2.3-1.1-3.2-2.1-1.8-2.1-3.3-6.1-1.4-8.7.9-1.3 2.5-2.2 4.2-2.2 1.3 0 2.5.8 3.3.8.8 0 2.3-1 4-.8.7 0 2.6.3 3.8 2.1-3.3 1.9-2.8 6.7-.4 6.2z" fill="currentColor" stroke="none" /></>,
  mail:     <><rect x="3" y="6" width="18" height="13" rx="1" /><path d="M3 8l9 6 9-6" /></>,
  shield:   <><path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z" /></>,
  plus:     <><path d="M12 5v14M5 12h14" /></>,
  dot:      <><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" /></>,
};

function RIcon({ name, size = 20, stroke = 1.5, style }) {
  const path = RIconPaths[name] || RIconPaths.dot;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

/* Fade-in-on-scroll hook (IntersectionObserver) */
function useReveal() {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '-40px 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, y = 16, style }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, { RENEWAL_APPS, RIcon, Reveal, useReveal });
