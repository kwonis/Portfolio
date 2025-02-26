import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 20px;
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

export const Aboutme = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top : 50px;
  width: 40%;
  max-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Name = styled.h2`
  margin-top: 10px;
  font-size: 28px;
  text-align: center;
`;

export const BirthDate = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 5px;
  text-align: center;
  font-family:bold;
`;

export const Aboutcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 600px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MidleTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2a2a2a;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #555;
  }
`;

export const Bio = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.8;
  
  p {
    margin-bottom: 10px;
  }
`;

export const Bio2 = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.8;
  
  p {
    margin-bottom: 8px;
    &:nth-child(even) {
      color: #666;
      font-size: 14px;
      margin-bottom: 15px;
    }
  }
`;
