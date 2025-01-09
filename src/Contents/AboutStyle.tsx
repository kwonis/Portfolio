import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  padding : 70px 0;
`;

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const Name = styled.h2`
  margin: 0;
  margin-top: 10px;
  font-size: 24px;
`;

export const Bio = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: Arial, sans-serif;
`;

export const Bio2 = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: Arial, sans-serif;
`;

export const MidleTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
`;

export const Aboutme = styled.div`
  display: flex;
  width: 100%;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: column; /* 세로 정렬 */
`;

export const Aboutcon = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 간격을 벌리면서 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: row;
  margin: 10px auto;
  width: 70%; /* 원하는 너비 설정 */
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;
