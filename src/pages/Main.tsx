import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/Main/Introduction";
import Skills from "../components/Main/Skills";
import Project from "../components/Main/Project";
import { projects } from "../assets/data/projectsData";

const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤에 따른 투명도 계산
  const titleOpacity = Math.max(1 - scrollY / window.innerHeight, 0);

  return (
    <div className="w-full m-0 p-0">
      <Header />

      <main className="w-full m-0 p-0">
        {/* 타이틀 섹션 */}
        <section
          className="
            h-screen flex justify-center items-center 
            bg-black text-white text-5xl m-0
            transition-all duration-300 ease-in-out
          "
          style={{
            opacity: titleOpacity,
          }}
        >
          <div>Welcome to My Portfolio</div>
        </section>

        {/* About 섹션 */}
        <section id="paragraph1" className="bg-gray-50">
          <About />
        </section>

        {/* Skills 섹션 */}
        <section id="paragraph2">
          <Skills />
        </section>

        {/* Projects 섹션 */}
        <section id="paragraph3">
          <h1 className="text-4xl pt-24 pb-0 mb-10 text-center text-gray-800">
            Projects
          </h1>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              features={project.features}
              skills={project.skills}
              githubLink={project.githubLink}
              homeLink={project.homeLink}
              imageUrl={project.imageUrl}
              achievements={project.achievements}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
