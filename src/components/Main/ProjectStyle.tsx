import styled from 'styled-components';

// 프로젝트 카드 컨테이너
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  padding: 30px;
  width: 80%;
  background-color: #ffffff;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
    background-color: #f7fafc;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

// 캐러셀 래퍼 스타일 - 크기 조절 기능 추가
export const CarouselWrapper = styled.div`
  width: 50%;
  height: 350px; /* 캐러셀 높이 고정 */
  margin: auto;
  position: relative;
  
  .carousel {
    height: 100%; /* 캐러셀이 래퍼 높이를 채우도록 설정 */
  }
  
  .carousel .slide {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; /* 슬라이드가 캐러셀 높이를 채우도록 설정 */
  }
  
  .pjt-image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel .control-arrow {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  
  .carousel .control-prev.control-arrow {
    left: 10px;
  }
  
  .carousel .control-next.control-arrow {
    right: 10px;
  }
  
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #fff;
  }
  
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #fff;
  }
  
  .carousel .control-dots {
    margin: 10px 0;
    
    .dot {
      box-shadow: none;
      background: #ccc;
      opacity: 0.5;
      
      &.selected {
        background: #333;
        opacity: 1;
      }
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 250px; /* 모바일에서 높이 조정 */
    margin-bottom: 20px;
  }
`;

// 이미지 스타일 - 크기 조절 기능 강화
export const ProjectImage = styled.img`
  max-height: 300px; /* 최대 높이 설정 */
  max-width: 100%; /* 최대 너비 설정 */
  width: auto; /* 원본 비율 유지 */
  height: auto; /* 원본 비율 유지 */
  object-fit: contain; /* 이미지가 컨테이너에 맞게 조정되면서 비율 유지 */
  display: block; /* 인라인 요소의 하단 여백 제거 */
  margin: 0 auto; /* 중앙 정렬 */
  
  @media (max-width: 768px) {
    max-height: 200px; /* 모바일에서 이미지 높이 조정 */
  }
`;

// 이미지 캡션 스타일
export const ImageCaption = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

// 이미지 인디케이터 스타일
export const ImageIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    border: none;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    
    &.active {
      background: #333;
    }
  }
`;

// 텍스트 컨테이너
export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0 0 0;
    text-align: center;
  }
`;

// 프로젝트 제목 스타일
export const ProjectTitle = styled.h3`
  font-size: calc(18px + 1rem);
  font-weight: bold;
  color: #2d3748;

  @media (max-width: 400px) {
    font-size: small;
  }
`;

// 날짜 스타일
export const ProjectDate = styled.p`
  font-size: small;
`;

// 설명 스타일
export const ProjectDescription = styled.p`
  margin: auto;
  font-size: 20px;
  line-height: 1.6;
`;

// 주요 기능 섹션
export const ProjectFeatures = styled.div``;

// 성과 섹션
export const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px auto;
  width: fit-content;
  min-width: 200px;
  max-width: 600px;

  li {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.5;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// 컨텐츠 제목
export const Contitle = styled.h3``;

// 기능 목록
export const Featurecontents = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px auto;
  width: fit-content;
  min-width: 200px;
  max-width: 600px;

  li {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.5;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// 기술 스택
export const ProjectSkills = styled.p``;

// 아이콘 컨테이너
export const Icon = styled.div``;

// GitHub 링크
export const GitHubLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 15px;
  color: #000;
  
  &:hover {
    color: #0077b6;
    text-decoration: underline;
  }
`;

// 홈페이지 링크
export const HomeLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 15px;
  color: #000;
  
  &:hover {
    color: #0077b6;
    text-decoration: underline;
  }
`;
