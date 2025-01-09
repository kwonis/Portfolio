import stack from '../image/stack.png';
import studyground from '../image/stydyground.png';
import protfolio from '../image/protfolio.png';
import miyh from '../image/miyh.png'
import ttudu from '../image/ttudu.png'
export interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink: string;
  imageUrl: string; // Relative path to the image
}

export const projects: Project[] = [
  {
    title: 'Stack Overflow 클론코딩',
    date: '2023. 08 .04 ~ 2023. 08.23(FE 3명 / BE 3명)',
    description: '기존 Stack Overflow를 따라 만드는 클론 코딩 프로젝트입니다. ',
    features: [
      '로그인, 회원 가입',
      '게시글 작성, 댓글 작성'
    ],
    skills: 'React,JavaScript',
    githubLink: 'https://github.com/codestates-seb/seb45_pre_016',
    homeLink: '',
    imageUrl: stack // Import된 이미지 사용
  },
  {
    title: 'StudyGround',
    date: '2023. 08 .24 ~ 2023. 09.18(FE 2명 / BE 4명 / 디자인 1명)',
    description: '자격증 정보를 한눈에 자기가 원하는 자격증에 대한 북마크 서비스',
    features: [
      '카카오 로그인 및 서비스 내 로그인/회원가입',
      '자격증 북마크, 게시글 작성 및 댓글'
    ],
    skills: 'React,JavaScript',
    githubLink: 'https://github.com/kwonis/seb45_main_016',
    homeLink: '',
    imageUrl: studyground // Import된 이미지 사용
  },
  {
    title: 'Portfolio',
    date: '2024.07 / 25.01 (1인 개발)',
    description: '타입 스크립트를 사용한 개인 포트폴리오 작성',
    features: [
      '개인을 위한 포트폴리오 작성',
      '프로젝트 사항 기입'
    ],
    skills: 'React,TypeScript',
    githubLink: 'https://github.com/kwonis/Protfolio',
    homeLink: 'https://kwonis.netlify.app/',
    imageUrl: protfolio // Import된 이미지 사용
  },
  {
    title: 'MIYH(매일영화)',
    date: '2024.11.18 ~ 2024.11.26 (FE : 1명, BE : 1명)',
    description: 'ChatGPt를 사용한 영화 추천 및 영화 선택으로 만들어가는 나만의 달력',
    features: [
      'ChatGPT를 사용해 날짜 및 사용자의 위치 정보를 통해 당일 영화 추천',
      '회원 서비스를 통해 자기만의 영화 달력 만들기'
    ],
    skills: 'Vue,JavaScript',
    githubLink: 'https://github.com/kwonis/MIYH',
    homeLink: '',
    imageUrl: miyh // Import된 이미지 사용
  },
  {
    title: '뚜두(Ttudu)',
    date: '2024.10 ~ 24.12',
    description: 'Todo 공유 및 사용자끼리 비교 사이트트',
    features: [
      '카카오,네이버 sns 로그인 사용',
      'Todo 리스트 작성과 팔로우 기능을 이용한 친구들과의 비교교'
    ],
    skills: 'React,JavaScript',
    githubLink: 'https://github.com/ssafy-ttudo/ttudo-fe',
    homeLink: '',
    imageUrl: ttudu // Import된 이미지 사용
  },
  // 다른 프로젝트들 추가
];
