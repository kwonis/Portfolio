import React from 'react';
import * as Styled from './SkillsStyle'; // 스타일을 별도 파일에서 가져오기

// 이미지 파일 경로 지정
import javascriptImage from '../image/js.png';
import reactImage from '../image/react.png';
import htmlImage from '../image/html.png';
import cssImage from '../image/css.png';
import typescriptImage from '../image/ts.png';
import reduxImage from '../image/redux.png';
import githubImage from '../image/github.png';

const SkillsPage: React.FC = () => {
    // 스킬 데이터
    const skills = [
        {
            name: 'Html',
            image: htmlImage,
        },
        {
            name: 'CSS',
            image: cssImage,
        },
        {
            name: 'JavaScript',
            image: javascriptImage,
        },
        {
            name: 'TypeScript',
            image: typescriptImage,
        },
        {
            name: 'React',
            image: reactImage,
        },
        {
            name: 'Redux',
            image: reduxImage,
        },
        {
            name: 'Github',
            image: githubImage,
        },
        // 더 많은 스킬을 추가할 수 있습니다.
    ];

    return (
        <>
            <Styled.Title>My Skills</Styled.Title> {/* 타이틀 추가 */}
            <Styled.SkillsContainer>
                {skills.map((skill, index) => (
                    <Styled.SkillCard key={index}>
                        <Styled.SkillImage src={skill.image} alt={`${skill.name} image`} />
                        <Styled.SkillName>{skill.name}</Styled.SkillName>
                        {/* <Styled.SkillDescription>{skill.description}</Styled.SkillDescription> */}
                    </Styled.SkillCard>
                ))}
            </Styled.SkillsContainer>
        </>
    );
};

export default SkillsPage;
