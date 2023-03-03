//추천 shorcut 이미지들
import pointQuiz from '../image/shortcut_pointQuiz.jpg'
import men from '../image/shortcut_men.jpg'
import women from '../image/shortcut_women.jpg'
import welcome from '../image/shortcut_welcome.jpg'
import brand from '../image/shortcut_brand.jpg'
import lowCost from '../image/shortcut_lowCost.jpg'
import popular from '../image/shortcut_popular.jpg'
import event from '../image/shortcut_event.jpg'
import point from '../image/shortcut_point.jpg'
import memberEvent from '../image/shortcut_memberEvent.jpg'
// 남성 shorcut 이미지들
import menshorcut1 from '../image/menshorcut1.jpg'
import menshorcut2 from '../image/menshorcut2.jpg'
import menshorcut3 from '../image/menshorcut3.jpg'
import menshorcut4 from '../image/menshorcut4.jpg'
import menshorcut5 from '../image/menshorcut5.jpg'
// 여성 shorcut 이미지들
import womenshorcut1 from '../image/womenshorcut1.jpg'
import womenshorcut2 from '../image/womenshorcut2.jpg'
import womenshorcut3 from '../image/womenshorcut3.jpg'
import womenshorcut4 from '../image/womenshorcut4.jpg'
import womenshorcut5 from '../image/womenshorcut5.jpg'
import lego from '../image/lego.jpg'
// 브랜드 shorcut 이미지들
import brandshorcut1 from '../image/brandshorcut1.jpg'
import brandshorcut2 from '../image/brandshorcut2.jpg'
import brandshorcut3 from '../image/brandshorcut3.jpg'
import brandshorcut4 from '../image/brandshorcut4.jpg'
import brandshorcut5 from '../image/brandshorcut5.jpg'

export let shortcutItems = [
  {
    title: '포인트 퀴즈',
    itemTitle: 'pointQuiz',
    img: `${pointQuiz}`,
    href: "/exhibitions/payco",
  },
  {
    title: '남성 추천',
    itemTitle: 'men',
    img: `${men}`,
    href: "/exhibitions/남성%20추천",
  },
  {
    title: '여성 추천',
    itemTitle: 'women',
    img: `${women}`,
    href: "/exhibitions/여성%20추천",
  },
  {
    title: '웰컴 추천 크림',
    itemTitle: 'welcome',
    img: `${welcome}`,
    href: "./",
  },
  {
    title: '인기 브랜드',
    itemTitle: 'brand',
    img: `${brand}`,
    href: "/?brand",
  },
  {
    title: '정가 아래',
    itemTitle: 'lowCost',
    img: `${lowCost}`,
    href: "/exhibitions/정가%20아래",
  },
  {
    title: '인기 럭셔리',
    itemTitle: 'popular',
    img: `${popular}`,
    href: "/exhibitions/인기%20럭셔리",
  },
  {
    title: '나이키',
    itemTitle: 'event',
    img: `${event}`,
    href: "exhibitions/스니커즈",
  },
  {
    title: '무조건 포인트',
    itemTitle: 'point',
    img: `${point}`,
    href: "/exhibitions/point",
  },
  {
    title: '토스 캐시백',
    itemTitle: 'memberEvent',
    img: `${memberEvent}`,
    href: "/exhibitions/toss",
  },
]

export let menshortcutItems = [
  {
    title: 'New',
    itemTitle: 'pointQuiz',
    img: `${menshorcut1}`,
    href: "exhibitions/아미",
  },
  {
    title: '인기 신발',
    itemTitle: 'pointQuiz',
    img: `${menshorcut2}`,
    href: "/exhibitions/신발",
  },
  {
    title: '에센셜 아이템',
    itemTitle: 'pointQuiz',
    img: `${menshorcut3}`,
    href: "/exhibitions/니트웨어",
  },
  {
    title: '럭셔리',
    itemTitle: 'pointQuiz',
    img: `${menshorcut4}`,
    href: "/exhibitions/인기%20럭셔리",
  },
  {
    title: '셀럽픽',
    itemTitle: 'pointQuiz',
    img: `${menshorcut5}`,
    href: "./",
  },
]
export let womenshortcutItems = [
  {
    title: '레고',
    itemTitle: 'pointQuiz',
    img: `${lego}`,
    href: "/exhibitions/Lego",
  },
  {
    title: '럭셔리',
    itemTitle: 'pointQuiz',
    img: `${womenshorcut2}`,
    href: "/exhibitions/인기%20럭셔리",
  },
  {
    title: '인기 신발',
    itemTitle: 'pointQuiz',
    img: `${womenshorcut3}`,
    href: "/exhibitions/신발",
  },
  {
    title: '셀럽픽',
    itemTitle: 'pointQuiz',
    img: `${womenshorcut4}`,
    href: "./",
  },
  {
    title: '스몰 럭셔리',
    itemTitle: 'pointQuiz',
    img: `${womenshorcut5}`,
    href: "/exhibitions/인기%20럭셔리",
  },
]
export let brandshortcutItems = [
  {
    title: '모든 브랜드',
    itemTitle: 'pointQuiz',
    img: `${brandshorcut1}`,
    href: "/?brand",
  },
  {
    title: '세일 아이템',
    itemTitle: 'pointQuiz',
    img: `${brandshorcut2}`,
    href: "exhibitions/정가%20아래",
  },
  {
    title: '개강 준비',
    itemTitle: 'pointQuiz',
    img: `${brandshorcut3}`,
    href: "exhibitions/후드",
  },
  {
    title: '간절기 추위 대비',
    itemTitle: 'pointQuiz',
    img: `${brandshorcut4}`,
    href: "exhibitions/패딩",
  },
  {
    title: '테크&라이프',
    itemTitle: 'pointQuiz',
    img: `${brandshorcut5}`,
    href: "exhibitions/Apple",
  },
]