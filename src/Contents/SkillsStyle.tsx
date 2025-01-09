import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  background-color: #f0f0f0; /* 밝은 회색 배경색 */
  flex-direction: column;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  padding : 70px 0;
`;

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;  // 여러 개의 스킬 카드를 배치할 수 있도록 유연하게 배치
    justify-content: center;  // 수평 중앙 정렬
    margin : 0 auto;
    background-color: #f0f0f0; /* 밝은 회색 배경색 */
`;

export const SkillCard = styled.div`
    display: flex;
    flex-direction: column;  // 스킬 이미지, 이름, 설명을 세로로 배치
    align-items: center;  // 모든 요소를 중앙 정렬
    width: 200px;  // 스킬 카드의 너비
    margin: 10px;  // 카드 간 간격
    padding: 10px;  // 카드 내 패딩
    border: 1px solid #ddd;  // 카드 테두리
    border-radius: 8px;  // 테두리 모서리 반경
    background-color: #fff;  // 카드 배경색
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  // 카드 그림자
    transition: transform 0.3s, box-shadow 0.3s;  // 카드 호버 시 부드러운 전환
    &:hover {
        transform: translateY(-5px);  // 호버 시 위로 이동
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);  // 호버 시 그림자 강화
    }
`;

export const SkillImage = styled.img`
    width: 100px;  // 이미지 너비
    height: 100px;  // 이미지 높이
    margin-bottom: 10px;  // 아래쪽 간격
`;

export const SkillName = styled.h3`
    margin: 0;  // 여백 제거
    font-size: 18px;  // 글꼴 크기 조정
    text-align: center;  // 중앙 정렬
    margin-bottom: 5px;  // 아래쪽 간격
`;

export const SkillDescription = styled.p`
    margin: 5px 0;  // 위, 아래 간격
    font-size: 14px;  // 글꼴 크기 조정
    text-align: center;  // 중앙 정렬
    color: #666;  // 글자 색상 조정
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;
