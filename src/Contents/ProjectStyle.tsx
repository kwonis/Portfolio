import styled from 'styled-components';

// 프로젝트 카드 컨테이너
export const ProjectContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  padding: 20px;
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
    flex-direction: column; /* 모바일에서는 세로 정렬 */
    width: 90%; /* 카드 너비를 줄임 */
    padding: 15px;
    margin-bottom: 30px; /* 요소 간 간격 추가 */
  }
`;


// 이미지 스타일
export const ProjectImage = styled.img`
  margin: auto;
  width: 50%;
  height: auto; /* 비율 유지 */

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 전체 너비 사용 */
    margin-bottom: 15px; /* 이미지와 텍스트 간 간격 추가 */
  }
`;
// 텍스트 컨테이너
export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: calc(50% - 20px); /* 이미지와 텍스트 공간 분리 */

  @media (max-width: 768px) {
    width: auto; /* 모바일에서는 전체 너비 사용 */
    padding: 0;
    text-align: center; /* 텍스트를 가운데 정렬 */
  }
`;


export const ProjectTitle = styled.h3`
font-size :calc(18px +1rem);
font-weight:bold ;
color:#2d3748 ;

@media (max-width :400){
font-size small}

`;

// 날짜 스타일
export const ProjectDate = styled.p`
font-size :small;

`


// 설명 스타일
export const ProjectDescription = styled.p`
  margin:auto
  font-size: 16px; /* 글자 크기 */
  line-height: 1.6; /* 줄 간격 */
`;

// 주요 기능 섹션
export const ProjectFeatures = styled.div`
`;

export const Achievements = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0;
  margin: 10px auto; /* Center align horizontally */
  width: fit-content; /* Adjust width based on content */
  min-width: 200px; /* Ensure it doesn't shrink too much */
  max-width: 600px; /* Limit maximum width */

  li {
    margin-bottom: 8px; /* Add spacing between list items */
    font-size: 16px; /* Set font size */
    line-height: 1.5; /* Improve readability */
    color: #333; /* Darker text color for better contrast */
  }

  @media (max-width: 768px) {
    width: 100%; /* Make it full width on smaller screens */
    text-align: center; /* Center align text for smaller screens */
  }
`;

export const Contitle = styled.h3`
`;

export const Featurecontents = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0;
  margin: 10px auto; /* Center align horizontally */
  width: fit-content; /* Adjust width based on content */
  min-width: 200px; /* Ensure it doesn't shrink too much */
  max-width: 600px; /* Limit maximum width */


  li {
    margin-bottom: 8px; /* Add spacing between list items */
    font-size: 16px; /* Set font size */
    line-height: 1.5; /* Improve readability */
    color: #333; /* Darker text color for better contrast */
  }

  @media (max-width: 768px) {
    width: 100%; /* Make it full width on smaller screens */
    text-align: center; /* Center align text for smaller screens */
  }
`;

export const ProjectSkills = styled.p`
`;

export const Icon =styled.div``

export const GitHubLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 15px;
  color: #000; /* 기본 검정색 */
  
  &:hover {
    color: #0077b6; /* 호버 시 파란색 */
    text-decoration: underline; /* 호버 시 밑줄 */
  }
`;

export const HomeLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  margin-right: 15px;
  color: #000; /* 기본 검정색 */
  
  &:hover {
    color: #0077b6; /* 호버 시 파란색 */
    text-decoration: underline; /* 호버 시 밑줄 */
  }
`;
