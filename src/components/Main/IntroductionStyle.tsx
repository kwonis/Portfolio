import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 700;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: #3b82f6;
  }
`;

export const Aboutme = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Name = styled.h2`
  margin-top: 10px;
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  color: #1a202c;
`;

export const BirthDate = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-top: 6px;
  text-align: center;
`;

export const Aboutcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MidleTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1a202c;
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #3b82f6;
  }
`;

export const Bio = styled.div`
  margin-bottom: 40px;
  font-size: 17px;
  line-height: 1.8;

  p {
    margin-bottom: 12px;
    position: relative;
    padding-left: 20px;
    color: #4a5568;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-size: 20px;
    }
  }
`;

export const Bio2 = styled.div`
  margin-bottom: 30px;
  font-size: 17px;
  line-height: 1.8;

  p {
    margin-bottom: 6px;

    &:nth-child(odd) {
      font-weight: 500;
      color: #1a202c;
    }

    &:nth-child(even) {
      color: #718096;
      font-size: 15px;
      margin-bottom: 16px;
      padding-left: 0;
    }
  }
`;
