import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e9ecef;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const IconLink = styled.a`
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #0077b6; /* Hover 색상 */
  }
`;

export const Email = styled.p`
  font-size: 14px;
  color: #6c757d;
`;
