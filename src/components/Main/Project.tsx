import React, { useState } from "react";
import {
  FaGithub,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiHome, FiUsers, FiCalendar, FiCode } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  features: string[];
  skills: string;
  githubLink: string;
  homeLink?: string;
  imageUrl: string | string[];
  status?: string;
  achievements?: string[];
  teamSize?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  date,
  description,
  features,
  skills,
  githubLink,
  homeLink = "",
  imageUrl,
  status = "완료",
  achievements = [],
  teamSize = "팀 프로젝트",
}) => {
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 슬라이드 함수들
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 커스텀 화살표 컴포넌트
  const CustomArrowPrev = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={!hasPrev}
      className={`
        absolute left-4 top-1/2 transform -translate-y-1/2 z-10
        w-12 h-12 bg-white/90 hover:bg-white rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl transition-all duration-300
        ${!hasPrev ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}
      `}
      aria-label={label}
    >
      <FaChevronLeft className="text-gray-700" size={16} />
    </button>
  );

  const CustomArrowNext = (
    onClickHandler: () => void,
    hasNext: boolean,
    label: string
  ) => (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={!hasNext}
      className={`
        absolute right-4 top-1/2 transform -translate-y-1/2 z-10
        w-12 h-12 bg-white/90 hover:bg-white rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl transition-all duration-300
        ${!hasNext ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}
      `}
      aria-label={label}
    >
      <FaChevronRight className="text-gray-700" size={16} />
    </button>
  );

  return (
    <>
      {/* 메인 카드 */}
      <div className="w-full max-w-5xl mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col lg:flex-row min-h-[160px] lg:min-h-[140px]">
          {/* 왼쪽: 썸네일 이미지 */}
          <div
            className="lg:w-2/5 w-full relative group cursor-pointer h-40 lg:h-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="h-full bg-gray-100 overflow-hidden">
              <img
                src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                alt={`${title} 썸네일`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* 확대 아이콘 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <FaExpand
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 간단한 프로젝트 정보 */}
          <div className="lg:w-3/5 w-full p-4 flex flex-col justify-between min-h-[120px]">
            {/* 상단: 기본 정보 */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {title}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap ml-2">
                  {date}
                </span>
              </div>

              {/* 참여인원 */}
              <div className="flex items-center mb-3">
                <FiUsers className="text-gray-500 mr-1" size={14} />
                <span className="text-sm text-gray-600">{teamSize}</span>
              </div>

              {/* 간단한 설명 */}
              <div className="mb-3">
                <p className="text-sm text-gray-700 leading-relaxed overflow-hidden">
                  {description.length > 100
                    ? `${description.substring(0, 100)}...`
                    : description}
                </p>
              </div>
            </div>

            {/* 하단: 버튼들 */}
            <div className="flex space-x-2 mt-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
              >
                자세히 보기
              </button>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1.5 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 transition-colors"
                >
                  <FaGithub size={12} />
                  <span>GitHub</span>
                </a>
              )}
              {homeLink && homeLink.trim() !== "" && (
                <a
                  href={homeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1.5 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors"
                >
                  <FiHome size={12} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 modal-overlay"
          style={{ zIndex: 10000 }}
        >
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl animate-modal-in relative">
            {/* 모달 헤더 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <div className="flex items-center space-x-6 text-blue-100">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" size={16} />
                      <span className="text-sm">{date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-2" size={16} />
                      <span className="text-sm">{teamSize}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors z-20"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>

            {/* 모달 콘텐츠 */}
            <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
              {/* 프로젝트 설명 */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    프로젝트 소개
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
              </div>

              {/* 이미지 캐러셀 - 커스텀 화살표 추가 */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    프로젝트 미리보기
                  </h4>
                  {/* 이미지 카운터 */}
                  {images.length > 1 && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {currentImageIndex + 1} / {images.length}
                    </span>
                  )}
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl relative">
                  <Carousel
                    selectedItem={currentImageIndex}
                    onChange={setCurrentImageIndex}
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={false}
                    useKeyboardArrows={true}
                    renderArrowPrev={CustomArrowPrev}
                    renderArrowNext={CustomArrowNext}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    {images.map((img, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg">
                        <img
                          src={img}
                          alt={`${title} 이미지 ${index + 1}`}
                          className="w-full h-auto object-contain max-h-96 mx-auto rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>

              {/* 정보 카드 그리드 */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* 담당 역할 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
                  <h4 className="font-bold text-blue-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <FiCode className="text-white" size={16} />
                    </div>
                    담당 역할
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 성과 및 배운 점 */}
                {achievements && achievements.length > 0 && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm">
                    <h4 className="font-bold text-green-700 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      성과 및 배운 점
                    </h4>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 기술 스택 */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200 mb-8">
                <h4 className="font-bold text-gray-700 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                    <FiCode className="text-white" size={16} />
                  </div>
                  사용 기술
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 shadow-sm"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* 링크 버튼들 */}
              <div className="flex justify-center space-x-4 pt-6 border-t border-gray-200">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                  >
                    <FaGithub size={24} />
                    <span>GitHub에서 보기</span>
                  </a>
                )}
                {homeLink && homeLink.trim() !== "" && (
                  <a
                    href={homeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                  >
                    <FiHome size={24} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
