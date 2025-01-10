import React from 'react';
import * as Styled from './SkillsStyle'; // 스타일을 별도 파일에서 가져오기

// 이미지 파일 경로 지정
import javascriptImage from '../image/js.png';
import reactImage from '../image/react.png';
import htmlImage from '../image/html.png';
import cssImage from '../image/css.png';
import typescriptImage from '../image/ts.png';
import githubImage from '../image/github.png';
import vueImage from '../image/vue.png';
import pythonImage from '../image/python.png';

const SkillsPage: React.FC = () => {
    // 스킬 데이터
    const skills = [
        { name: 'HTML', image: htmlImage },
        { name: 'CSS', image: cssImage },
        { name: 'JavaScript', image: javascriptImage },
        { name: 'TypeScript', image: typescriptImage },
        { name: 'React', image: reactImage },
        { name: 'Vue', image: vueImage },
        { name: 'Python', image: pythonImage },
        { name: 'GitHub', image: githubImage },
    ];

    return (
        <Styled.SkillsContainer>
            <Styled.Title>My Skills</Styled.Title>
            <Styled.Skills>
                {skills.map((skill, index) => (
                    <Styled.SkillCard key={index}>
                        <Styled.SkillImage src={skill.image} alt={`${skill.name} icon`} />
                        <Styled.SkillName>{skill.name}</Styled.SkillName>
                    </Styled.SkillCard>
                ))}
            </Styled.Skills>
        </Styled.SkillsContainer>
    );
};

export default SkillsPage;
