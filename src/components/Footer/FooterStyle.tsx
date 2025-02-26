import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #f9f9f9; /* 부드러운 배경색 */
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid #ddd; /* 상단 구분선 */
  font-family: 'Arial', sans-serif; /* 기본 폰트 */
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ddd; /* 구분선 색상 */
  margin: 0 auto 20px auto; /* 가운데 정렬 및 간격 */
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; /* 아이콘 간 간격 조정 */
  margin-bottom: 15px;
`;

export const IconLink = styled.a`
  color: #333; /* 기본 아이콘 색상 */
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #0077b6; /* 호버 시 색상 변경 */
    transform: scale(1.2); /* 호버 시 확대 효과 */
  }
`;

export const Email = styled.p`
  font-size: 14px;
  color: #555; /* 텍스트 색상 */
`;
