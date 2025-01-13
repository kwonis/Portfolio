import styled from 'styled-components';

// 프로젝트 카드 컨테이너
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 이미지와 텍스트를 양쪽 정렬 */
  align-items: flex-start; /* 아이템을 위쪽 정렬 */
  border-radius: 16px; /* 둥근 모서리 */
  padding: 20px;
  width: 80%; /* 카드 너비 */
  background-color: #ffffff; /* 카드 배경색 */
  margin: 20px auto; /* 중앙 정렬 및 여백 */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; /* 기본 그림자 효과 */

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* 호버 시 위로 이동 */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px; /* 호버 시 그림자 강화 */
    background-color: #f7fafc; /* 호버 시 밝은 파란색 배경 */
    cursor: pointer;
`;


// 이미지 스타일
export const ProjectImage = styled.img`
  margin : auto 0 ;
  width: 50%; /* 이미지 너비 */
  height: 100%; /* 비율 유지 */
`;
// 텍스트 컨테이너
export const ProjectContent = styled.div`
display:flex;
padding : 0 20px;
flex-direction :column;
width : 100%
`;

export const ProjectTitle = styled.h3`
font-size :calc(18px +1rem);
font-weight:bold ;
color:#2d3748 ;
`;

// 날짜 스타일
export const ProjectDate = styled.p`
  font-size: small;
`;


// 설명 스타일
export const ProjectDescription = styled.p`
  margin: 10px 0; /* 위아래 여백 */
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
