import styled from 'styled-components';

// 프로젝트 카드 컨테이너
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Items are pushed to the edges with space in between */
  align-items: flex-start; /* Align items at the top */
  border-radius: 12px; /* Rounded corners */
  padding: 20px;
  width: 80%; /* Card width */
  background-color: #ffffff; /* White background */
  margin: 20px auto; /* Center horizontally with vertical spacing */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    transform: translateY(-10px); /* Slight lift on hover */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    background-color: #f9f9f9; /* Slightly lighter background on hover */
    cursor: pointer;
  }
`;




// 이미지 스타일
export const ProjectImage = styled.img`
  margin : auto 0 ;
  width: 45%; /* 이미지 너비 */
  height: 100%; /* 비율 유지 */
`;

// 텍스트 컨테이너
export const ProjectContent = styled.div`
  display: flex;
  width : 50%;
  flex-direction: column;
`;

// 제목 스타일
export const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

// 날짜 스타일
export const ProjectDate = styled.p`
  font-size: small;
`;

// 상태 스타일
export const ProjectStatus = styled.p`
  font-size: small;
`;

// 설명 스타일
export const ProjectDescription = styled.p`
  text-align: center; /* 텍스트를 가운데 정렬 */
  margin: 10px 0; /* 위아래 여백 */
  font-size: 16px; /* 글자 크기 */
  line-height: 1.6; /* 줄 간격 */
`;

// 주요 기능 섹션
export const ProjectFeatures = styled.div`
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
  text-align: left; /* Align text to the left for readability */

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
