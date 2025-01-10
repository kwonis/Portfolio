import styled from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = styled.header<HeaderProps>`
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.5)'};
  color: white;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0px 4px 6px rgba(0,0,0,0.3)' : 'none'};
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 15px;

      button {
        color: white;
        background-color: transparent;
        border: none;
        font-size: 18px; /* 버튼 글꼴 크기 */
        font-weight: bold;
        padding: 10px; /* 버튼 패딩 */
        cursor: pointer;
        border-radius: 5px; /* 버튼 둥근 모서리 */
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2); /* 호버 시 배경색 */
          color: #f8d64e; /* 호버 시 텍스트 색상 */
          transform: scale(1.1); /* 약간 확대 효과 */
        }
      }
    }
  }
`;
