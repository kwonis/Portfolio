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
    <div
      id="skills"
      className="
        flex flex-col items-center justify-center 
        bg-gradient-to-br from-blue-50 to-indigo-100 
        py-24 px-5 relative overflow-hidden
      "
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      {/* 타이틀 */}
      <h1
        className="
        text-4xl md:text-5xl font-bold text-gray-800 mb-12 
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
      <div
        className="
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 md:gap-8 w-full max-w-6xl z-10
      "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="
              group flex flex-col items-center justify-center 
              py-8 px-5 bg-white rounded-2xl h-[180px]
              shadow-lg hover:shadow-2xl
              transition-all duration-500 ease-out
              relative overflow-hidden
              hover:-translate-y-4 hover:scale-105 
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

            <img
              src={skill.image}
              alt={`${skill.name} icon`}
              loading="lazy"
              className="
                w-[75px] h-[75px] mb-5 object-contain 
                transition-transform duration-500 ease-out
                group-hover:scale-110 relative z-10
              "
            />
            <h3
              className="
              text-lg font-semibold text-gray-800 text-center 
              mt-3 tracking-wide relative pb-2 z-10
              after:content-[''] after:absolute after:bottom-0 
              after:left-1/2 after:transform after:-translate-x-1/2 
              after:w-0 after:h-0.5 after:bg-blue-500 
              after:transition-all after:duration-300 after:ease-out
              group-hover:after:w-[60%]
            "
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
