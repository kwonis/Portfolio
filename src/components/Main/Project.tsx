import React from 'react';
import { FaGithub } from 'react-icons/fa'; // GitHub 아이콘
import { FiHome } from 'react-icons/fi'; // Home 아이콘
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as Styled from './ProjectStyle';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink?: string; // 선택적 홈 링크
  imageUrl: string | string[]; // 단일 이미지 또는 이미지 배열
  status?: string; // 프로젝트 상태 (예: "완료", "진행 중")
  achievements?: string[]; // 성과 및 배운 점
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
  achievements = [], // 기본값은 빈 배열
}) => {
  // 이미지가 배열인지 확인
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  return (
    <Styled.ProjectContainer>
      <Styled.CarouselWrapper>
        <Carousel 
          showArrows={true} 
          showStatus={false} 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={false}
          useKeyboardArrows={true}
        >
          {images.map((img, index) => (
            <div className='pjt-image' key={index}>
              <Styled.ProjectImage 
                src={img} 
                alt={`${title} 프로젝트 이미지 ${index + 1}`} 
              />
            </div>
          ))}
        </Carousel>
      </Styled.CarouselWrapper>

      <Styled.ProjectContent>
        <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
        <Styled.ProjectDate>{date}</Styled.ProjectDate>
        <Styled.ProjectDescription>{description}</Styled.ProjectDescription>
        <Styled.ProjectFeatures>
          <Styled.Contitle>담당 역할</Styled.Contitle>
          <Styled.Featurecontents>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </Styled.Featurecontents>
        </Styled.ProjectFeatures>
        {achievements && achievements.length > 0 && (
          <Styled.Achievements>
            <Styled.Contitle>성과 및 배운 점</Styled.Contitle>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </Styled.Achievements>
        )}

        <Styled.ProjectSkills>사용 기술 : {skills}</Styled.ProjectSkills>

        {/* GitHub 및 Home 링크 */}
        <Styled.Icon>
          {githubLink && (
            <Styled.GitHubLink href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </Styled.GitHubLink>
          )}
          {homeLink && homeLink.trim() !== '' && (
            <Styled.HomeLink href={homeLink} target="_blank" rel="noopener noreferrer">
              <FiHome size={30} />
            </Styled.HomeLink>
          )}
        </Styled.Icon>
      </Styled.ProjectContent>
    </Styled.ProjectContainer>
  );
};

export default Project;
