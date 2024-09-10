import pro1 from '../image/stack.png';
import pro2 from '../image/stydyground.png';

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
    description: '복잡한 상황에서의 N빵 계산을 도와 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다...',
    features: [
      '참석자의 이름, 부담 금액, 비중 입력참석자의 이름, 부담 금액, 비중 입력',
      '최소한으로 이체하는 방법 계산'
    ],
    skills: 'js',
    githubLink: 'https://github.com/codestates-seb/seb45_pre_016',
    homeLink: 'https://github.com/codestates-seb/seb45_pre_016',
    imageUrl: pro1 // Import된 이미지 사용
  },
  {
    title: 'StudyGround',
    date: '2023. 08 .24 ~ 2023. 09.18(FE 2명 / BE 4명 / 디자인 1명)',
    description: '복잡한 상황에서의 N빵 계산을 도와 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다...',
    features: [
      '참석자의 이름, 부담 금액, 비중 입력',
      '최소한으로 이체하는 방법 계산'
    ],
    skills: 'js',
    githubLink: 'https://github.com/hjcdg1/dutch-pay-calculator',
    homeLink: 'https://github.com/codestates-seb/seb45_pre_016',
    imageUrl: pro2 // Import된 이미지 사용
  },
  {
    title: '똑똑하게 N빵하기',
    date: '2022.02 (1人 개인 프로젝트)',
    description: '복잡한 상황에서의 N빵 계산을 도와 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다...',
    features: [
      '참석자의 이름, 부담 금액, 비중 입력',
      '최소한으로 이체하는 방법 계산'
    ],
    skills: 'js',
    githubLink: 'https://github.com/hjcdg1/dutch-pay-calculator',
    homeLink: 'https://github.com/codestates-seb/seb45_pre_016',
    imageUrl: pro2 // Import된 이미지 사용
  },
  // 다른 프로젝트들 추가
];
