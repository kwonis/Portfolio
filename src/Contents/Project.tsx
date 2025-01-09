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
  homeLink?: string; // 선택적 홈 링크
  imageUrl: string;
  status?: string; // 프로젝트 상태 (예: "완료", "진행 중")
}

const Project: React.FC<ProjectProps> = ({
  title,
  date,
  description,
  features,
  skills,
  githubLink,
  homeLink = '', // 기본값은 빈 문자열
  imageUrl,
  status = "완료", // 기본값은 "완료"
}) => {
  return (
    <Styled.ProjectContainer>
      <Styled.ProjectImage src={imageUrl} alt={title} />
      <Styled.ProjectContent>
        <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
        <Styled.ProjectDate>{date}</Styled.ProjectDate>
        <Styled.ProjectStatus>{`상태: ${status}`}</Styled.ProjectStatus>
        <Styled.ProjectDescription>{description}</Styled.ProjectDescription>

        <Styled.ProjectFeatures>
          <Styled.Contitle>주요 기능</Styled.Contitle>
          <Styled.Featurecontents>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </Styled.Featurecontents>

        </Styled.ProjectFeatures>
        <Styled.ProjectSkills>사용 기술 : {skills}</Styled.ProjectSkills>
        <Styled.Icon>
          {/* GitHub 링크는 항상 표시 */}
          {githubLink && (
            <Styled.GitHubLink href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} /> {/* GitHub 아이콘 */}
            </Styled.GitHubLink>
          )}
          {/* Home 링크는 homeLink가 빈 문자열이 아닐 때만 표시 */}
          {homeLink && homeLink.trim() !== '' && (
            <Styled.HomeLink href={homeLink} target="_blank" rel="noopener noreferrer">
              <FiHome size={30} /> {/* Home 아이콘 */}
            </Styled.HomeLink>
          )}
        </Styled.Icon>
      </Styled.ProjectContent>
    </Styled.ProjectContainer>
  );
};

export default Project;
