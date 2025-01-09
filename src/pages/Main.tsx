import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../Contents/About';
import Skills from '../Contents/Skills';
import Project from '../Contents/Project';
import { projects } from '../Data/projectsData';
import * as Styled from './MainStyle';

const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState(0); // 스크롤 위치 상태

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // 현재 스크롤 위치 저장
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styled.MainContainer>
      <Header title="My Portfolio" />
      <Styled.MainContent>
        {/* 타이틀 섹션 */}
        <Styled.Title scrollY={scrollY}>
          <div>Welcome to My Portfolio</div>
        </Styled.Title>
        {/* About 섹션 */}
        <div id="paragraph1">
          <About />
        </div>
        {/* Skills 섹션 */}
        <div id="paragraph2">
          <Skills />
        </div>
        {/* Projects 섹션 */}
        <div id="paragraph3">
          <Styled.SectionTitle>Projects</Styled.SectionTitle>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              features={project.features}
              skills={project.skills}
              githubLink={project.githubLink}
              homeLink={project.homeLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </Styled.MainContent>

      {/* Footer */}
      <Footer />
    </Styled.MainContainer>
  );
};

export default Main;
