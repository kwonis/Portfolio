import React, { useEffect, useState } from 'react';
import * as HeaderStyle from './HeaderStyle';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetElement = document.getElementById('paragraph1');

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - 90; // 기준 위치 설정
        if (scrollPosition >= targetPosition) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToParagraph = (paragraphId: string) => {
    const element = document.getElementById(paragraphId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsScrolled(true); // 스크롤 발생 시 배경색 변경
    }
  };

  return (
    <HeaderStyle.Header isScrolled={isScrolled}>
      <HeaderStyle.Nav>
        <ul>
          <li>
            <button onClick={() => scrollToParagraph('paragraph1')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToParagraph('paragraph2')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToParagraph('paragraph3')}>Projects</button>
          </li>
        </ul>
      </HeaderStyle.Nav>
    </HeaderStyle.Header>
  );
};

export default Header;
