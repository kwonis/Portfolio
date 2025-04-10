import React from "react";
import * as Styled from "./IntroductionStyle"; // 스타일을 별도 파일에서 가져오기
// 이미지 불러오기
import myImage from "../../assets/my.jpg";

const Introduction: React.FC = () => {
  return (
    <Styled.IntroductionContainer>
      <Styled.Title>Introduction</Styled.Title> {/* 타이틀 추가 */}
      <Styled.Aboutme>
        <Styled.MyPage>
          <Styled.ProfileImage src={myImage} alt="Profile Image" />
          <Styled.Name>권인승</Styled.Name>
          <Styled.BirthDate>1998.01.15</Styled.BirthDate>
        </Styled.MyPage>
        <Styled.Aboutcon>
          {/* ABOUT ME 섹션 */}
          <div>
            <Styled.MidleTitle>ABOUT ME</Styled.MidleTitle>
            <Styled.Bio>
              <p>개발에 대한 열정과 경험을 가지고 있습니다.</p>
              <p>문제 해결과 코드 작성에 대한 즐거움을 느낍니다.</p>
              <p>새로운 기술에 관심을 가지고 공부합니다.</p>
              <p>다양한 분야에서 함께 일하는 것을 선호합니다.</p>
            </Styled.Bio>
          </div>

          {/* EDUCATION 섹션 */}
          <div>
            <Styled.MidleTitle>EDUCATION</Styled.MidleTitle>
            <Styled.Bio2>
              <p>한양대학교 ERICA 신산업소프트웨어학과 중국학과</p>
              <p>(2017.03 ~ 2023.02)</p>
              <p>코드스테이츠 프론트엔드 부트캠프</p>
              <p>(2023.04 ~ 2023.10)</p>
              <p>삼성 청년 소프트웨어 아카데미 12기(SSAFY)</p>
              <p>(2024.07 ~ )</p>
            </Styled.Bio2>
          </div>
        </Styled.Aboutcon>
      </Styled.Aboutme>
    </Styled.IntroductionContainer>
  );
};

export default Introduction;
