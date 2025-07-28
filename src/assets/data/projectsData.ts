import antialarm from "../pjt/antips/alarm.png";
import antirobot from "../pjt/antips/robot.png";
import antilist from "../pjt/antips/list.png";
import miyhlogin from "../pjt/miyh/login.png";
import miyhrecommend from "../pjt/miyh/recommend.png";
import miyhcalendar from "../pjt/miyh/calendar.png";
import miyhsearch from "../pjt/miyh/search.png";
import miyharticle from "../pjt/miyh/article.png";
import miyhmypage from "../pjt/miyh/mypage.png";
import miyhlocation from "../pjt/miyh/location.png";
import ttudologin from "../pjt/ttudo/login.png";
import ttudomypage from "../pjt/ttudo/mypage.png";
import ttudousermodal from "../pjt/ttudo/usermodal.png";
import sosang1 from "../pjt/sosanggomin/salsedata.png";
import sosang2 from "../pjt/sosanggomin/report_2.png";
import sosang3 from "../pjt/sosanggomin/myreview.png";
import sosang4 from "../pjt/sosanggomin/ana.png";
import sosang5 from "../pjt/sosanggomin/recom.png";
import sosang6 from "../pjt/sosanggomin/main.png";
import todak1 from "../pjt/todak/todak1.png";
import todak2 from "../pjt/todak/todak2.png";
import todak3 from "../pjt/todak/todak3.png";
import todak4 from "../pjt/todak/todak4.png";
import todak5 from "../pjt/todak/todak5.png";

export interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink: string; // 홈 링크
  imageUrl: string[]; // 이미지 경로
  achievements: string[]; // 성과 및 배운 점 (선택적)
}

export const projects: Project[] = [
{
  title: "토닥",
  date: "2024.04.14 ~ 2024.05.22 (FE 1명 / BE 3명 / Mobile 2명)",
  description: "경계선 지능인과 보호자를 위한 AI 통합 플랫폼",
  features: [
    "전체 학생 조회 및 개별 특이사항 정보 관리",
    "학생별 캘린더를 통한 일정 확인 및 등록",
    "생성형 AI를 활용한 맞춤형 미션 생성 및 진행상황 확인",
    "업체별 레시피 제작 및 관리 시스템",
    "학생 진행상황 모니터링 대시보드"
  ],
  skills: "React + Vite, TypeScript, Tailwind CSS",
  githubLink: "https://github.com/TodakService/Todak",
  homeLink: "",
  imageUrl: [todak1, todak2, todak3, todak4, todak5],
  achievements: [
    "삼성 청년 소프트웨어 AI 아카데미 프로젝트 발표회 🏆전체 3등 수상🏆",
    "이미지와 이모티콘을 활용한 시각적 UI 설계로 대량 정보의 가독성 향상 및 관리자 피로도 감소",
    "Calendar 컴포넌트를 활용한 직관적인 일정 관리 시스템 구현으로 사용자 편의성 증대",
    "카카오 주소 API 연동 및 전화번호 유효성 검사 규칙 적용을 통한 데이터 입력 오류율 최소화",
    "Lazy Loading 기법 적용으로 레시피 단계 전환 시 렌더링 시간 약 1초 단축 및 사용자 경험 개선",
    "React + Vite 환경에서 TypeScript 기반 타입 안전성 확보 및 개발 생산성 향상",
    "Tailwind CSS 활용으로 일관된 디자인 시스템 구축 및 반응형 레이아웃 구현"
  ]
},
 {
  title: "소상고민",
  date: "2024.03.04 ~ 2024.04.11 (FE 3명 / BE 3명)",
  description: "소상공인을 위한 데이터 분석 플랫폼 소상고민",
  features: [
    "가게명 입력을 통한 가게 등록 및 대표 가게 설정",
    "서울시 각 동별 상권분석 전체 및 상세 정보 제공",
    "선택 조건에 따른 맞춤형 입지 추천 서비스",
    "소상공인 대상 맞춤 뉴스 및 커뮤니티 소통 공간",
    "지도 기반 상권 데이터 시각화 및 분석 리포트"
  ],
  skills: "React + Vite, TypeScript, PWA, Tailwind CSS, Zustand",
  githubLink: "https://github.com/kwonis/Sosanggomin",
  homeLink: "",
  imageUrl: [sosang6, sosang4, sosang5, sosang1, sosang1, sosang2, sosang3],
  achievements: [
    "삼성 청년 소프트웨어 AI 아카데미 프로젝트 경연대회 빅데이터 부분 🏆1등 수상🏆",
    "카카오맵 API 연동을 통한 직관적인 가게 등록 시스템 구현으로 사용자 편의성 향상",
    "GeoJSON 폴리곤 기능을 활용한 지도 기반 인구 분포 시각화 및 상권 분석 기능 개발",
    "Chart.js를 활용한 동별 상세 모달 구현으로 데이터 시각화 품질 향상 및 사용자 이해도 증대",
    "실시간 조건 변경에 따른 동적 폴리곤 생성 기능으로 페이지 전환 없는 즉시 결과 확인 구현",
    "PWA 기술 적용으로 모바일 환경에서의 앱 수준 사용자 경험 제공",
    "Zustand 상태 관리 라이브러리를 활용한 효율적인 전역 상태 관리 및 성능 최적화"
  ]
},
{
  title: "Anti-ps",
  date: "2024.01.06 ~ 2024.02.21 (FE 1명 / BE 1명 / EM 4명)",
  description: "격리병동에서 사용하는 로봇과 환자 관리 서비스",
  features: [
    "로봇 실시간 카메라 피드 및 현재 상황 모니터링 대시보드",
    "IoT 기기 연동 실시간 알림 확인 시스템",
    "환자 데이터 및 의료 기록 관리 페이지",
    "로봇 원격 제어 및 자율 주행 기능",
    "격리병동 내 환경 모니터링 및 상태 관리"
  ],
  skills: "React + Vite, TypeScript, PWA",
  githubLink: "https://github.com/kwonis/Anti-ps",
  homeLink: "",
  imageUrl: [antialarm, antirobot, antilist],
  achievements: [
    "roslibjs 라이브러리 활용으로 로봇 제어 시스템 구현 및 WebSocket 통신 기술 습득",
    "SSE(Server-Sent Events)와 PWA 기술 통합으로 실시간 알림 시스템 구축 및 오프라인 지원 기능 개발",
    "React 컴포넌트 기반 아키텍처와 TypeScript 타입 안정성을 통한 코드 품질 향상 및 유지보수성 증대",
    "의료 환경 특화 UX/UI 설계로 직관적인 사용자 인터페이스 구현 및 업무 효율성 향상",
    "PWA 기술 적용으로 모바일 환경에서의 앱 수준 사용자 경험 제공 및 오프라인 접근성 확보",
    "실시간 데이터 스트리밍 및 상태 관리 최적화를 통한 시스템 안정성 향상"
  ]
},
 {
  title: "MIYH(매일영화)",
  date: "2024.11.18 ~ 2024.11.26 (FE 1명 / BE 1명)",
  description: "생성형 AI를 활용한 영화 추천 서비스와 나만의 영화 달력을 생성할 수 있는 웹 애플리케이션",
  features: [
    "오늘의 추천 영화 확인 및 월별 영화 달력 기능",
    "영화 검색을 통한 전체 영화 목록 및 상세 정보 제공",
    "사용자 간 소통을 위한 커뮤니티 게시판",
    "개인 맞춤형 영화 추천 서비스",
    "마이페이지를 통한 개인 영화 기록 관리"
  ],
  skills: "Vue.js, JavaScript",
  githubLink: "https://github.com/kwonis/MIYH",
  homeLink: "",
  imageUrl: [
    miyhlogin,
    miyhrecommend,
    miyhcalendar,
    miyhsearch,
    miyharticle,
    miyhmypage,
    miyhlocation,
  ],
  achievements: [
    "삼성 청년 소프트웨어 아카데미 프로젝트 경연대회 🏆우수상 수상🏆",
    "Vue.js를 활용한 캘린더 UI 구성 및 동적 렌더링 구현으로 사용자 경험 향상",
    "위치 정보(위도·경도) 기반 사용자 맞춤형 추천 로직 설계 및 구현",
    "ChatGPT API 연동을 통한 비동기 처리 및 AI 기반 추천 시스템 개발",
    "마이페이지와 게시글 관리 기능을 통한 사용자 중심 인터페이스 설계 경험 강화",
    "Vue.js 프레임워크를 활용한 컴포넌트 기반 개발 및 상태 관리 최적화"
  ]
},
 {
  title: "Ttudo",
  date: "2024.10.01 ~ 2024.12.31 (FE 1명 / BE 1명 / EM 4명)",
  description: "Todo 리스트를 공유하고 사용자 간 비교를 지원하는 협업 플랫폼",
  features: [
    "카테고리별 Todo 내용 확인 및 관리",
    "개인 정보 관리 및 팔로우 현황 확인",
    "사용자 전체 리스트 조회 및 팔로우/언팔로우",
    "카카오 및 네이버 SNS 로그인 기능",
    "사용자 간 Todo 진행 상황 비교 및 공유"
  ],
  skills: "React + Vite, JavaScript",
  githubLink: "https://github.com/ssafy-ttudo/ttudo-fe",
  homeLink: "",
  imageUrl: [ttudologin, ttudomypage, ttudousermodal],
  achievements: [
    "OAuth access token과 서버 발급 JWT token 간의 혼동 문제 식별 및 해결을 통한 인증 시스템 이해도 향상",
    "카카오 및 네이버 OAuth 2.0 연동을 통한 소셜 로그인 시스템 구현 경험 습득",
    "React를 활용한 마이페이지 UI 설계 및 사용자 정보 수정 기능 구현으로 사용자 경험 향상",
    "사용자 리스트 조회 및 팔로우 기능을 통한 React 상태 관리 및 API 통신 최적화",
    "React + Vite 환경에서의 빠른 개발 환경 구축 및 개발 생산성 향상 경험",
    "컴포넌트 기반 아키텍처를 통한 재사용 가능한 UI 요소 설계 및 구현"
  ]
}
];
