// Main.tsx

import React from 'react';
import Header from '../components/Header';
import * as MainStyle from './MainStyle';

const Main: React.FC = () => {
  return (
    <MainStyle.MainContainer>
      <Header title="My Portfolio" />
      <MainStyle.MainContent>
        <MainStyle.Title>Welcome to My Portfolio</MainStyle.Title>
        <div id="paragraph1">
        <MainStyle.Paragraph1s>여1</MainStyle.Paragraph1s>
        </div>
        <div>
          <MainStyle.Paragraph1>Paragraph 1 Content</MainStyle.Paragraph1>
        </div>
        <div id="paragraph2">
        <MainStyle.Paragraph2s>여백2</MainStyle.Paragraph2s>
        </div>
        <div>
          <MainStyle.Paragraph2>Paragraph 2 Content</MainStyle.Paragraph2>
        </div>
        <div id="paragraph3">
        <MainStyle.Paragraph3s>여백3</MainStyle.Paragraph3s>
        </div>
        <div>
          <MainStyle.Paragraph3>Paragraph 3 Content</MainStyle.Paragraph3>
        </div>
        <div id="paragraph4">
        <MainStyle.Paragraph4s>여백4</MainStyle.Paragraph4s>
        </div>
        <div>
          <MainStyle.Paragraph4>Paragraph 4 Content</MainStyle.Paragraph4>
        </div>
      </MainStyle.MainContent>
    </MainStyle.MainContainer>
  );
};

export default Main;
