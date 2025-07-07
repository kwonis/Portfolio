import React from "react";
import myImage from "../../assets/my.jpg";

// 섹션 타이틀 컴포넌트
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h3
    className="
    text-lg font-bold mb-4 text-gray-900 relative pb-2
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-[50px] after:h-[2px] after:bg-blue-500
  "
  >
    {children}
  </h3>
);

// 불릿 포인트 텍스트 컴포넌트
const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    className="
    mb-3 relative pl-5 text-gray-600 text-sm leading-relaxed
    before:content-['•'] before:absolute before:left-0 before:top-0
    before:text-blue-500 before:text-lg before:font-bold
  "
  >
    {children}
  </p>
);

// 교육 항목 컴포넌트
const EducationItem: React.FC<{ title: string; period: string }> = ({
  title,
  period,
}) => (
  <div className="mb-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
    <p className="mb-1 font-semibold text-gray-900 text-sm leading-tight">{title}</p>
    <p className="text-gray-600 text-xs font-medium">{period}</p>
  </div>
);

// 수상 항목 컴포넌트
const AwardItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="mb-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
    <p className="mb-1 font-semibold text-gray-900 text-sm leading-tight">{title}</p>
    <p className="text-gray-600 text-xs">{description}</p>
  </div>
);

const Introduction: React.FC = () => {
  const aboutMeItems = [
    "개발에 대한 열정과 경험을 가지고 있습니다.",
    "문제 해결과 코드 작성에 대한 즐거움을 느낍니다.",
    "새로운 기술에 관심을 가지고 공부합니다.",
    "다양한 분야에서 함께 일하는 것을 선호합니다.",
  ];

  const educationItems = [
    {
      title: "한양대학교 ERICA 신산업소프트웨어학과 중국학과",
      period: "(2017.03 ~ 2023.02)",
    },
    {
      title: "코드스테이츠 프론트엔드 부트캠프",
      period: "(2023.04 ~ 2023.10)",
    },
    {
      title: "삼성 청년 소프트웨어 아카데미 12기(SSAFY)",
      period: "(2024.07 ~ )",
    },
  ];

  const awards = [
    {
      title: "SSAFY 프로젝트 경연대회 우수상",
      description: "MIYH(매일영화) 프로젝트로 수상",
    },
    {
      title: "다양한 프로젝트 완성",
      description: "React, TypeScript 기반 포트폴리오 구축",
    },
  ];

  return (
    <div
      className="
      flex flex-col items-center justify-center w-full 
      py-24 px-8
    "
    >
      {/* 통일된 타이틀 */}
      <h1
        className="
        text-4xl md:text-5xl font-bold text-gray-800 mb-16 
        relative pb-4 text-center
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 
        after:transform after:-translate-x-1/2 after:w-20 after:h-1 
        after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 
        after:rounded-sm
      "
      >
        Introduction
      </h1>

      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-6xl">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12
          items-start
        "
        >
          {/* 왼쪽: 프로필 이미지와 기본 정보 */}
          <div
            className="
            lg:col-span-4 flex flex-col items-center
            lg:sticky lg:top-24
          "
          >
            {/* 프로필 이미지 */}
            <div className="relative mb-6">
              <img
                src={myImage}
                alt="Profile Image"
                className="
                  w-[280px] h-[280px] rounded-full object-cover
                  shadow-xl border-4 border-white
                  transition-transform duration-300 hover:scale-105
                "
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>

            {/* 기본 정보 */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                권인승
              </h2>
              <p className="text-lg text-gray-600 mb-1">Frontend Developer</p>
              <p className="text-base text-gray-500">1998.01.15</p>
            </div>
            
            {/* ABOUT ME 섹션 */}
            <div className="w-full max-w-sm">
              <SectionTitle>ABOUT ME</SectionTitle>
              <div className="space-y-1">
                {aboutMeItems.map((item, index) => (
                  <BulletPoint key={index}>{item}</BulletPoint>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 학력과 수상 정보 */}
          <div
            className="
            lg:col-span-8 flex flex-col
            space-y-8
          "
          >
            {/* EDUCATION 섹션 */}
            <div>
              <SectionTitle>EDUCATION</SectionTitle>
              <div className="space-y-3">
                {educationItems.map((item, index) => (
                  <EducationItem
                    key={index}
                    title={item.title}
                    period={item.period}
                  />
                ))}
              </div>
            </div>

            {/* AWARDS 섹션 */}
            <div>
              <SectionTitle>AWARDS & ACHIEVEMENTS</SectionTitle>
              <div className="space-y-3">
                {awards.map((item, index) => (
                  <AwardItem
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            {/* 추가 정보 섹션 */}
            <div>
              <SectionTitle>CONTACT INFO</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="text-sm font-medium text-gray-900">github.com/kwonis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
