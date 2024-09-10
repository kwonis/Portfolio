import React from 'react';
import { FaGithub } from 'react-icons/fa'; // GitHub 아이콘 추가
import { FiHome } from 'react-icons/fi'; // 집 아이콘 추가
import * as Styled from './ProjectStyle';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink: string; // 수정된 부분: HomeLink props 대신 homeLink props 사용
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, date, description, features, skills, githubLink, homeLink, imageUrl }) => {
  return (
    <Styled.ProjectContainer>
      <Styled.ProjectImage src={imageUrl} alt={title} />
      <Styled.ProjectContent>
        <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
        <Styled.ProjectDate>{date}</Styled.ProjectDate>
        <Styled.ProjectDescription>{description}</Styled.ProjectDescription>
        <Styled.HorizontalLine /> {/* 수평선 추가 */}
        <Styled.ProjectFeatures>
          <Styled.Contitle>주요 기능</Styled.Contitle>
          <Styled.Featurecontents> {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}</Styled.Featurecontents>
         
        </Styled.ProjectFeatures>
        <Styled.ProjectSkills>{skills}</Styled.ProjectSkills>
        <Styled.Icon>
          <Styled.GitHubLink href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} color="black" /> {/* GitHub 아이콘 */}
          </Styled.GitHubLink>
          <Styled.HomeLink href={homeLink} target="_blank" rel="noopener noreferrer">
            <FiHome size={40} color="black" /> {/* 집 아이콘 */}
          </Styled.HomeLink>
        </Styled.Icon>
      </Styled.ProjectContent>
    </Styled.ProjectContainer>
  );
};

export default Project;
