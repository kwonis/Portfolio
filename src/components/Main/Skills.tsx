import React from "react";
import * as Styled from "./SkillsStyle";

// 이미지 파일 경로 지정
import javascriptImage from "../../assets/skill/js.png";
import reactImage from "../../assets/skill/react.png";
import htmlImage from "../../assets/skill/html.png";
import cssImage from "../../assets/skill/css.png";
import typescriptImage from "../../assets/skill/ts.png";
import githubImage from "../../assets/skill/github.png";
import vueImage from "../../assets/skill/vue.png";
import pythonImage from "../../assets/skill/python.png";

const SkillsPage: React.FC = () => {
  // 스킬 데이터 - 카테고리 추가
  const skills = [
    { name: "HTML", image: htmlImage, category: "frontend" },
    { name: "CSS", image: cssImage, category: "frontend" },
    { name: "JavaScript", image: javascriptImage, category: "frontend" },
    { name: "TypeScript", image: typescriptImage, category: "frontend" },
    { name: "React", image: reactImage, category: "frontend" },
    { name: "Vue", image: vueImage, category: "frontend" },
    { name: "Python", image: pythonImage, category: "backend" },
    { name: "GitHub", image: githubImage, category: "tools" },
  ];

  return (
    <Styled.SkillsContainer id="skills">
      <Styled.Title>My Skills</Styled.Title>
      <Styled.Skills>
        {skills.map((skill, index) => (
          <Styled.SkillCard
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Styled.SkillImage
              src={skill.image}
              alt={`${skill.name} icon`}
              loading="lazy"
            />
            <Styled.SkillName>{skill.name}</Styled.SkillName>
          </Styled.SkillCard>
        ))}
      </Styled.Skills>
    </Styled.SkillsContainer>
  );
};

export default SkillsPage;
