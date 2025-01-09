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
        // 조금 위에서부터 배경색이 변경되도록 기준 위치를 설정합니다.
        const targetPosition = targetElement.offsetTop - 90; // 여기서 100은 조정할 값입니다.

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
      element.scrollIntoView({ behavior: "smooth" });
      setIsScrolled(true); // 스크롤이 발생했으므로 배경색 변경
    }
  };

  return (
    <HeaderStyle.Header 
      style={{ 
        backgroundColor: isScrolled ? '#555' : 'rgba(0,0,0,0)', 
        opacity: isScrolled ? 1 : 0 // 스크롤 여부에 따라 투명도 변경
      }}
    >
      <HeaderStyle.Nav>
        <ul>
          <li><button style={{color: isScrolled ? '#fff' : 'rgba(0,0,0,1)' }} onClick={() => scrollToParagraph("paragraph1")}>About</button></li>
          <li><button style={{color: isScrolled ? '#fff' : 'rgba(0,0,0,1)' }} onClick={() => scrollToParagraph("paragraph2")}>Skills</button></li>
          <li><button style={{color: isScrolled ? '#fff' : 'rgba(0,0,0,1)' }} onClick={() => scrollToParagraph("paragraph3")}>Projects</button></li>
        </ul>
      </HeaderStyle.Nav>
    </HeaderStyle.Header>
  );
};

export default Header;
