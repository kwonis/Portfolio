import React from "react";

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
  const skills = [
    { 
      name: "HTML", 
      image: htmlImage, 
      category: "frontend",
      description: "시맨틱 마크업과 웹 접근성을 고려한 구조적 웹 페이지 개발"
    },
    { 
      name: "CSS", 
      image: cssImage, 
      category: "frontend",
      description: "반응형 디자인과 CSS Grid, Flexbox를 활용한 레이아웃 구성"
    },
    { 
      name: "JavaScript", 
      image: javascriptImage, 
      category: "frontend",
      description: "ES6+ 문법과 비동기 처리를 통한 동적 웹 애플리케이션 개발"
    },
    { 
      name: "TypeScript", 
      image: typescriptImage, 
      category: "frontend",
      description: "타입 안전성을 보장하는 대규모 프로젝트 개발 및 유지보수"
    },
    { 
      name: "React", 
      image: reactImage, 
      category: "frontend",
      description: "컴포넌트 기반 SPA 개발과 상태 관리를 통한 사용자 인터페이스 구현"
    },
    { 
      name: "Vue", 
      image: vueImage, 
      category: "frontend",
      description: "Vue.js 프레임워크를 활용한 반응형 웹 애플리케이션 개발"
    },
    { 
      name: "Python", 
      image: pythonImage, 
      category: "backend",
      description: "데이터 분석과 백엔드 API 개발을 위한 스크립트 작성"
    },
    { 
      name: "GitHub", 
      image: githubImage, 
      category: "tools",
      description: "버전 관리와 협업을 위한 Git 워크플로우 및 CI/CD 구축"
    },
  ];

return (
    <div
      className="
        flex flex-col items-center justify-center 
        py-10 px-8 relative overflow-hidden
      "
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      {/* 통일된 타이틀 */}
      <h1
        className="
        text-4xl md:text-5xl font-bold text-gray-800 mb-16 
        relative pb-4 text-center z-10
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 
        after:transform after:-translate-x-1/2 after:w-20 after:h-1 
        after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 
        after:rounded-sm
      "
      >
        My Skills
      </h1>

      {/* 스킬 그리드 */}
      <div className="w-full max-w-7xl">
        <div
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-6 md:gap-8 w-full z-10
        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group flex flex-col items-center justify-start 
                py-6 px-5 bg-white rounded-2xl h-[280px]
                shadow-lg hover:shadow-2xl
                transition-all duration-500 ease-out
                relative overflow-hidden
                hover:-translate-y-2 hover:scale-105 
                border border-gray-100 hover:border-blue-200
              "
            >
              {/* 호버 시 배경 그라데이션 */}
              <div
                className="
                absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              "
              ></div>

              {/* 카테고리 뱃지 */}
              <div
                className={`
                absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium z-10
                ${skill.category === 'frontend' ? 'bg-blue-100 text-blue-700' : 
                  skill.category === 'backend' ? 'bg-green-100 text-green-700' : 
                  'bg-purple-100 text-purple-700'}
              `}
              >
                {skill.category}
              </div>

              {/* 하단 라인 */}
              <div
                className="
                absolute bottom-0 left-0 w-full h-1 bg-gray-200 
                scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 origin-center
                group-hover:bg-gradient-to-r group-hover:from-blue-500 
                group-hover:to-blue-700
              "
              ></div>

              {/* 스킬 아이콘 */}
              <div className="flex-shrink-0 mt-4 mb-4">
                <img
                  src={skill.image}
                  alt={`${skill.name} icon`}
                  loading="lazy"
                  className="
                    w-[70px] h-[70px] object-contain 
                    transition-transform duration-500 ease-out
                    group-hover:scale-110 relative z-10
                  "
                />
              </div>

              {/* 스킬 이름 */}
              <h3
                className="
                text-xl font-bold text-gray-800 text-center 
                mb-3 tracking-wide relative z-10
                after:content-[''] after:absolute after:bottom-[-8px] 
                after:left-1/2 after:transform after:-translate-x-1/2 
                after:w-0 after:h-0.5 after:bg-blue-500 
                after:transition-all after:duration-300 after:ease-out
                group-hover:after:w-[60%]
              "
              >
                {skill.name}
              </h3>

              {/* 스킬 설명 */}
              <p
                className="
                text-sm text-gray-600 text-center leading-relaxed
                px-2 flex-grow flex items-center relative z-10
                group-hover:text-gray-700 transition-colors duration-300
              "
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
