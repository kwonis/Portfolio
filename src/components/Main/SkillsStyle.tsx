import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f5fa; /* 더 부드러운 배경색 */
  padding: 100px 20px; /* 여백 확장 */
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(180px, 1fr)
  ); /* 그리드 크기 조정 */
  gap: 35px; /* 카드 간 간격 */
  width: 100%;
  max-width: 1200px; /* 최대 너비 제한 */
  margin-top: 20px;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: #ffffff;
  border-radius: 16px; /* 더 둥근 모서리 */
  box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  height: 180px; /* 카드 높이 통일 */

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #e1e8ed;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: rgba(32, 107, 196, 0.2) 0px 15px 30px;

    &:after {
      transform: scaleX(1);
      background: linear-gradient(90deg, #3498db, #2980b9);
    }
  }
`;

export const SkillImage = styled.img`
  width: 75px;
  height: 75px;
  margin-bottom: 18px;
  object-fit: contain;
  transition: transform 0.4s ease;

  ${SkillCard}:hover & {
    transform: scale(1.12);
  }
`;

export const SkillName = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-top: 12px;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
  }

  ${SkillCard}:hover &:after {
    width: 60%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2980b9);
    border-radius: 2px;
  }
`;
