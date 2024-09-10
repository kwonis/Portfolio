import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center; /* 이미지와 텍스트를 세로 중앙 정렬 */
  border-radius: 8px; /* 테두리 반경 */
  padding:20px;
  width: 70%;
  background-color: #f0f0f0; /* 밝은 회색 배경색 */
  margin: 0 auto; /* 수평 가운데 정렬 */

  /* 첫 번째 프로젝트 컨테이너의 위쪽에만 마진 추가 */
  &:first-child {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  /* 마지막 프로젝트 컨테이너의 아래쪽에만 마진 추가 */
  &:last-child {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  /* 나머지 모든 프로젝트 컨테이너 사이에만 마진 추가 */
  &:not(:first-child) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;


// 나머지 스타일은 동일하게 유지
export const ProjectImage = styled.img`
  width: 50%;
  height: 100%;
  margin-right: 20px;
  object-fit: contain; /* 이미지가 왜곡되지 않고 적절한 크기로 표시됩니다. */
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px; /* 이미지와 텍스트 사이의 간격 조정 */
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`;

export const ProjectDate = styled.p`
  margin: 5px 0;
  color: #666;
`;

export const ProjectDescription = styled.p`
  margin: 10px 0;
`;

export const ProjectFeatures = styled.div`
  display: flex;
  flex-direction: row; /* 요소들을 가로로 정렬 */
`;

export const Contitle = styled.div`
  color: red;
`;

export const Featurecontents = styled.ul`
  margin: 5px 0; /* 간격 수정 */
  color: #333; /* 주요 기능 내용의 색상을 수정 */
`;

export const ProjectSkills = styled.p`
  margin: 10px 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const GitHubLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 20px;
  color: blue; /* 링크 색상 수정 */
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HomeLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 8px;
  color: blue; /* 링크 색상 수정 */
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HorizontalLine = styled.hr`
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: black; /* 아이콘 색상을 검정색으로 설정 */
`;
