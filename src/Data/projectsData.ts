import stack from '../image/stack.png';
import studyground from '../image/stydyground.png';
import protfolio from '../image/protfolio.png';
import miyh from '../image/miyh.png';
import ttudu from '../image/ttudu.png';

export interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink: string; // 홈 링크
  imageUrl: string; // 이미지 경로
  achievements: string[]; // 성과 및 배운 점 (선택적)
}

export const projects: Project[] = [
  {
    title: 'Stack Overflow 클론코딩',
    date: '2023.08.04 ~ 2023.08.23 (FE 3명 / BE 3명)',
    description: '기존 Stack Overflow의 주요 기능을 학습하고 구현하기 위해 진행한 클론 코딩 프로젝트입니다.',
    features: [
      '로그인 및 회원가입 기능 구현 (JWT 기반 인증)',
      '상태 관리 및 UI 컴포넌트 설계 (React 활용)',
    ],
    skills: 'React.js, JavaScript, Styled-components',
    githubLink: 'https://github.com/codestates-seb/seb45_pre_016',
    homeLink: '', // 홈 링크가 없는 경우 빈 문자열
    imageUrl: stack, // Import된 이미지 사용
    achievements: [
      'JWT 인증 구현 경험을 통해 보안 개념 강화',
      '팀원들과의 협업을 통해 GitHub Flow에 대한 실무 경험 축적',
    ],
  },
  {
    title: 'StudyGround',
    date: '2023.08.24 ~ 2023.09.18 (FE 2명 / BE 4명 / 디자인 1명)',
    description: '자격증 정보를 한눈에 확인하고, 원하는 자격증을 북마크할 수 있는 서비스를 제공하는 프로젝트입니다.',
    features: [
      '카카오 로그인 및 서비스 내 로그인/회원가입',
      '자격증 북마크, 게시글 작성 및 댓글 기능 구현',
      '검색 기능 개발 및 필터링 기능 추가',
      '마이페이지 및 회원정보 수정 기능 구현',
    ],
    skills: 'React, JavaScript,Styled-components',
    githubLink: 'https://github.com/kwonis/seb45_main_016',
    homeLink: '',
    imageUrl: studyground,
    achievements: [
      'OAuth를 활용한 카카오 로그인 연동 경험',
      '검색 기능 개발을 통해 효율적인 데이터 필터링 로직 학습',
      '마이페이지 및 회원정보 수정 기능 구현으로 사용자 경험 향상',
    ],
  },
  {
    title: 'Portfolio',
    date: '2024.07 ~ 2025.01 (1인 개발)',
    description: 'React와 TypeScript를 사용하여 개인 포트폴리오 웹사이트를 개발했습니다. 프로젝트와 기술 스택을 효과적으로 정리하고, 방문자가 쉽게 접근할 수 있도록 설계되었습니다.',
    features: [
      '개인을 위한 포트폴리오 작성 및 관리',
      '프로젝트 사항 기입 및 관리 기능 제공',
      '반응형 웹 디자인 적용으로 다양한 디바이스에서 최적화된 UI 제공',
      'GitHub 및 배포 링크 연결로 프로젝트 접근성 강화',
    ],
    skills: 'React, TypeScript, Styled-components',
    githubLink: 'https://github.com/kwonis/Protfolio',
    homeLink: 'https://kwonis.netlify.app/',
    imageUrl: protfolio, // Import된 이미지 사용
    achievements: [
      'React와 TypeScript를 활용한 컴포넌트 기반 설계 경험',
      'Netlify를 활용한 배포 경험 및 CI/CD 파이프라인 이해도 향상',
      '코드 구조화와 유지보수성을 고려한 설계로 개발 역량 강화',
    ],
  },
  {
    title: 'MIYH(매일영화)',
    date: '2024.11.18 ~ 2024.11.26 (FE : 1명, BE : 1명)',
    description: 'ChatGPT를 활용한 영화 추천 서비스와 나만의 영화 달력을 생성할 수 있는 웹 애플리케이션입니다.',
    features: [
      'ChatGPT를 사용해 날짜 및 사용자의 위치 정보를 기반으로 당일 영화 추천 제공',
      '회원 서비스를 통해 자신만의 영화 달력 생성 기능 구현',
      '마이페이지에서 개인 영화 목록 관리 및 게시글 작성 기능 제공',
      '영화 캘린더 UI 구성 및 동적 렌더링 구현',
      '위도와 경도 데이터를 활용한 사용자 위치 기반 영화 추천',
    ],
    skills: 'Vue.js, JavaScript',
    githubLink: 'https://github.com/kwonis/MIYH',
    homeLink: '', // 홈 링크가 없는 경우 빈 문자열
    imageUrl: miyh, // Import된 이미지 사용
    achievements: [ 
      '🏆삼성 청년 소프트웨어 아카데미 반 프로젝트 경연대회에서 우수상 수상',
      'Vue.js를 활용한 캘린더 UI 구성 및 동적 렌더링 구현 경험',
      '위치 정보(위도·경도)를 활용한 사용자 맞춤형 추천 로직 설계 및 구현',
      '마이페이지와 게시글 관리 기능을 통해 사용자 중심의 인터페이스 설계 경험 강화',
      'ChatGPT API와의 데이터 통신을 통해 비동기 처리 및 API 활용 능력 향상',
    ],
  },
  {
    title: '뚜두(Ttudu)',
    date: '2024.10 ~ 2024.12 (FE : 다수)',
    description: 'Todo 리스트를 공유하고 사용자 간 비교를 지원하는 협업 플랫폼입니다.',
    features: [
      '카카오 및 네이버 SNS 로그인 연동 기능 구현',
      '마이페이지에서 개인 정보 관리 및 팔로우 기능 구현',
      '유저 전체 리스트 조회 및 팔로우/언팔로우 기능 제공',
    ],
    skills: 'React, JavaScript',
    githubLink: 'https://github.com/ssafy-ttudo/ttudo-fe',
    homeLink: '', // 홈 링크가 없는 경우 빈 문자열
    imageUrl: ttudu, // Import된 이미지 사용
    achievements: [
      'OAuth를 활용한 카카오 및 네이버 SNS 로그인 연동 경험',
      'React로 마이페이지 UI 설계 및 사용자 정보 수정 기능 구현',
      '유저 전체 리스트 조회 및 팔로우 기능을 통해 데이터 상태 관리 학습',
      '팀원들과의 협업을 통해 GitHub Flow와 코드 리뷰 프로세스 경험 축적',
    ],
  },
];
