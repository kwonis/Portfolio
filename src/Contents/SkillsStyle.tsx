import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #edf2f7; /* 부드러운 파란색 배경 */
  padding: 80px 20px; /* 여백 추가 */
  border-radius: 8px;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 반응형 그리드 */
  gap: 30px; /* 카드 간 간격 */
  width: 100%;
  max-width: 1200px; /* 최대 너비 제한 */
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 이미지와 텍스트 간 간격 유지 */
  padding: 20px;
  background-color: #ffffff; /* 카드 배경색 */
  border-radius: 12px; /* 둥근 모서리 */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; /* 그림자 효과 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* 호버 시 위로 이동 */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px; /* 호버 시 그림자 강화 */
    background-color: #e2e8f0; /* 호버 시 밝은 파란색 배경 */
    cursor: pointer; /* 마우스 포인터 변경 */
    scale :1.2 ;
}
`;

export const SkillImage = styled.img`
width :80px ; /* 이미지 너비 고정 */
height :80px ; /* 이미지 높이 고정 */
margin-bottom :10px ; /* 이미지와 텍스트 간 간격 설정 */
object-fit :contain ; /* 비율을 유지하며 이미지가 잘리지 않도록 설정 */
`;

export const SkillName = styled.h3`
font-size :16px ;
font-weight:bold ;
color:#333 ;
text-align:center ;
margin-top :10px ; /* 이미지와 텍스트 간 일정한 간격 유지 */

min-height :30px ;/* 스킬명 고정 높이 설정*/
display:flex ;
align-items:center ;
justify-content:center ;

`;

export const Title = styled.h1`
font-size :calc(20px +2 rem);
font-weight:bold ;
color:#2d3748 ;
margin-bottom :40px ;

`;
