import React from "react";
import myImage from "../../assets/my.jpg";

// 섹션 타이틀 컴포넌트
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h3
    className="
    text-xl font-bold mb-5 text-gray-900 relative pb-2
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-[60px] after:h-[3px] after:bg-blue-500
  "
  >
    {children}
  </h3>
);

// 불릿 포인트 텍스트 컴포넌트
const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    className="
    mb-3 relative pl-5 text-gray-600
    before:content-['•'] before:absolute before:left-0 
    before:text-blue-500 before:text-xl
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
  <div className="mb-4">
    <p className="mb-1 font-medium text-gray-900">{title}</p>
    <p className="text-gray-500 text-base">{period}</p>
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

  return (
    <div
      className="
      flex flex-col items-center justify-center w-full max-w-6xl 
      mx-auto py-16 px-8 bg-white
    "
    >
      {/* 타이틀 */}
      <h1
        className="
        text-4xl text-gray-900 mb-12 text-center font-bold 
        relative after:content-[''] after:absolute after:bottom-[-15px] 
        after:left-1/2 after:transform after:-translate-x-1/2 
        after:w-[70px] after:h-[3px] after:bg-blue-500
      "
      >
        Introduction
      </h1>

      {/* 메인 콘텐츠 */}
      <div
        className="
        flex w-full justify-between items-start gap-20
        md:flex-col md:items-center
      "
      >
        {/* 프로필 섹션 */}
        <div
          className="
          flex flex-col items-center w-[35%]
          md:w-full md:mb-10
        "
        >
          <img
            src={myImage}
            alt="Profile Image"
            className="
              w-[280px] h-[280px] rounded-full object-cover mb-6
              md:w-[200px] md:h-[200px]
              shadow-lg transition-transform duration-300 hover:scale-105
            "
          />
          <h2 className="mt-2 text-3xl text-center font-bold text-gray-900">
            권인승
          </h2>
          <p className="text-lg text-gray-600 mt-1 text-center">1998.01.15</p>
        </div>

        {/* 정보 섹션 */}
        <div
          className="
          flex flex-col w-[65%] relative
          md:w-full
        "
        >
          {/* ABOUT ME 섹션 */}
          <div className="mb-10">
            <SectionTitle>ABOUT ME</SectionTitle>
            <div className="mb-10 text-lg leading-relaxed">
              {aboutMeItems.map((item, index) => (
                <BulletPoint key={index}>{item}</BulletPoint>
              ))}
            </div>
          </div>

          {/* EDUCATION 섹션 */}
          <div>
            <SectionTitle>EDUCATION</SectionTitle>
            <div className="text-lg leading-relaxed">
              {educationItems.map((item, index) => (
                <EducationItem
                  key={index}
                  title={item.title}
                  period={item.period}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
