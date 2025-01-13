import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 0;
  background-color: #f9f9f9; /* 부드러운 배경색 */
`;

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 150px; /* 프로필 이미지 크기 */
  height: 150px;
  border-radius: 50%; /* 원형 이미지 */
  object-fit: cover; /* 이미지 비율 유지 */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px; /* 그림자 효과 */
`;

export const Name = styled.h2`
  margin-top: 15px;
  font-size: 24px;
`;

export const BirthDate = styled.p`
  font-size: 14px;
  color: #555; /* 부드러운 색상 */
`;

export const Bio = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
`;

export const Bio2 = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const MidleTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Aboutme = styled.div`
  display: flex;
  width: calc(100% -40px);
  
flex-wrap : wrap ;
flex-direction :column ;
justify-content :center ;

align-items:center ;
`;

export const Aboutcon = styled.div`
display:flex ;
flex-wrap :wrap ;
justify-content:center ;
gap :20px;
margin:auto ;
width :50%;
`;

export const Title = styled.h1`
font-size :calc(20px +2 rem);
color:#333 ;
`;
