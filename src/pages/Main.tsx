import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../Contents/About';
import Skills from '../Contents/Skills';
import Project from '../Contents/Project';
import { projects } from '../Data/projectsData';
import * as Styled from './MainStyle';

const Main: React.FC = () => {
  return (
    <Styled.MainContainer>
      <Header title="My Portfolio" />
      <Styled.MainContent>
        <Styled.Title>
          <div>Welcome to My Portfolio</div>
          <div>Welcome to My Portfolio</div>
          <div>Welcome to My Portfolio</div>
          <div>Welcome to My Portfolio</div>
          <div>Welcome to My Portfolio</div>
        </Styled.Title>
      
        <div id="paragraph1">
          <Styled.Paragraph1s>여백1</Styled.Paragraph1s>
        </div>
        <div>
          <About/>
        </div>
        <div id="paragraph2">
          <Styled.Paragraph2s>여백2</Styled.Paragraph2s>
        </div>
        <div>
          <Skills/>
        </div>
        <div id="paragraph3">
          <Styled.Paragraph3s>여백3</Styled.Paragraph3s>
        </div>
        <div>
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
      <Footer/>
    </Styled.MainContainer>
  );
};

export default Main;
