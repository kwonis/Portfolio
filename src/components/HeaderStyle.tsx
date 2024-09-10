// HeaderStyle.tsx

import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px 0;
  margin-bottom:20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  text-align: center; /* 헤더의 내용을 중앙 정렬합니다 */
`;


export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0; /* 기본 마진을 제거하여 위쪽 여백을 없앱니다 */
  position: absolute; /* 헤더의 상단에 절대적으로 위치합니다 */
  top: 50%; /* 헤더의 상단으로부터 세로 중앙에 위치하도록 설정합니다 */
  left: 50%; /* 헤더의 좌측으로부터 가로 중앙에 위치하도록 설정합니다 */
  transform: translate(-50%, -50%); /* 수평, 수직 정렬을 위해 좌표 이동합니다 */
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;

      button {
        color: white;
        background-color: transparent;
        border: none;
        font-size: 16px; /* 버튼의 글꼴 크기 */
        padding: 10px 20px; /* 버튼의 패딩 */
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
