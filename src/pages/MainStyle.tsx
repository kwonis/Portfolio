import styled from 'styled-components';

// MainContainer 스타일 정의
export const MainContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

// MainContent 스타일 정의
export const MainContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

// Title 스타일 정의 (스크롤에 따라 동적 스타일 적용)
export const Title = styled.h1<{ scrollY: number }>`
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* 배경색 */
  color: white; /* 텍스트 색상 */
  font-size: 3rem; /* 큰 글자 크기 */
  margin: 0;
  /* 스크롤에 따라 투명도와 위치 변경 */
  opacity: ${({ scrollY }) => Math.max(1 - scrollY / window.innerHeight, 0)};
  transition: opacity 0.3s ease, transform 0.3s ease; /* 부드러운 애니메이션 */
`;

// SectionTitle 스타일 정의
export const SectionTitle = styled.h1`
  font-size: 36px;
  padding: 95px 0 0;
  margin-bottom : 40px;
  text-align: center;
  color: #333;
`;
