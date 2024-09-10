import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: #f8f9fa; /* 배경색을 원하는 색상으로 변경 */
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 20px; /* 아이콘 간의 간격 조정 */
`;

export const IconLink = styled.a`
    color: #000; /* 아이콘 색상을 원하는 색상으로 변경 */
    text-decoration: none;
    
    &:hover {
        color: #007bff; /* 호버 시 색상 변경 */
    }
`;
