// Header.tsx

import React from 'react';
import * as HeaderStyle from './HeaderStyle';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const scrollToParagraph = (paragraphId: string) => {
    const element = document.getElementById(paragraphId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderStyle.Header>
      <HeaderStyle.Logo>{title}</HeaderStyle.Logo>
      <HeaderStyle.Nav>
        <ul>
          <li><button onClick={() => scrollToParagraph("paragraph1")}>Paragraph 1</button></li>
          <li><button onClick={() => scrollToParagraph("paragraph2")}>Paragraph 2</button></li>
          <li><button onClick={() => scrollToParagraph("paragraph3")}>Paragraph 3</button></li>
          <li><button onClick={() => scrollToParagraph("paragraph4")}>Paragraph 4</button></li>
        </ul>
      </HeaderStyle.Nav>
    </HeaderStyle.Header>
  );
};

export default Header;
