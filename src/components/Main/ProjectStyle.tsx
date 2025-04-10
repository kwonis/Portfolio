import styled from "styled-components";

// 프로젝트 카드 컨테이너
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  padding: 25px;
  width: 90%;
  max-width: 1200px;
  background-color: #ffffff;
  margin: 30px auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 30px;
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 35px;
    border-color: rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 992px) {
    width: 95%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

// 캐러셀 래퍼 스타일
export const CarouselWrapper = styled.div`
  width: 45%;
  height: 320px;
  margin: auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px;

  .carousel {
    height: 100%;
    border-radius: 12px;
  }

  .carousel .slide {
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 12px;
  }

  .pjt-image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .control-arrow {
    opacity: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  &:hover .control-arrow {
    opacity: 0.9;
  }

  .carousel .control-arrow:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  .carousel .control-dots {
    bottom: 15px;

    .dot {
      box-shadow: none;
      background: rgba(255, 255, 255, 0.7);
      opacity: 0.7;
      width: 8px;
      height: 8px;

      &.selected {
        background: #ffffff;
        opacity: 1;
        width: 10px;
        height: 10px;
      }
    }
  }

  @media (max-width: 992px) {
    width: 48%;
    height: 270px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
    margin-bottom: 20px;
  }
`;

// 이미지 스타일
export const ProjectImage = styled.img`
  max-height: 280px;
  max-width: 95%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 992px) {
    max-height: 220px;
  }

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

// 텍스트 컨테이너
export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  width: 55%;

  @media (max-width: 992px) {
    padding: 0 0 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0 0 0;
  }
`;

// 프로젝트 제목 스타일
export const ProjectTitle = styled.h3`
  font-size: calc(18px + 0.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 2px;
  }

  @media (max-width: 992px) {
    font-size: calc(16px + 0.5rem);
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

// 날짜 스타일
export const ProjectDate = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  color: #4a5568;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

// 설명 스타일
export const ProjectDescription = styled.p`
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.6;
  color: #2d3748;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 15px;
  }
`;

// 주요 기능 섹션
export const ProjectFeatures = styled.div`
  margin-bottom: 15px;
  background-color: #f8fafc;
  padding: 12px 15px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
`;

// 성과 섹션
export const Achievements = styled.ul`
  list-style: none;
  padding: 12px 15px;
  margin: 12px 0;
  background-color: #f0f9ff;
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;

  li {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.5;
    color: #334155;
    position: relative;
    padding-left: 20px;

    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #0ea5e9;
      font-weight: bold;
    }

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 컨텐츠 제목
export const Contitle = styled.h3`
  font-size: 17px;
  margin-bottom: 10px;
  color: #1e40af;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

// 기능 목록
export const Featurecontents = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;

  li {
    margin-bottom: 8px;
    font-size: 101x;
    line-height: 1.5;
    color: #334155;
    position: relative;
    padding-left: 20px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-weight: bold;
      font-size: 18px;
    }

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 기술 스택
export const ProjectSkills = styled.p`
  font-size: 15px;
  margin: 15px 0 10px 0;
  padding: 10px 15px;
  background-color: #f1f5f9;
  border-radius: 8px;
  color: #475569;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

// 아이콘 컨테이너
export const Icon = styled.div`
  display: flex;
  margin-top: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// GitHub 링크
export const GitHubLink = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: #1e293b;
  transition: transform 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #f1f5f9;
  border-radius: 50%;

  &:hover {
    color: #3b82f6;
    transform: translateY(-3px);
    background-color: #e2e8f0;
  }
`;

// 홈페이지 링크
export const HomeLink = styled.a`
  text-decoration: none;
  color: #1e293b;
  transition: transform 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #f1f5f9;
  border-radius: 50%;

  &:hover {
    color: #3b82f6;
    transform: translateY(-3px);
    background-color: #e2e8f0;
  }
`;
