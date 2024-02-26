import React, { useState } from "react";

const About = (props) => {
  const [gnb, setMenu] = useState(props.gnb);
  const [userInfo, setuserInfo] = useState(props.userInfo);
  const Awards = [
    {
      title: "콜레오마케팅그룹",
      subtitle: "2022 A.N.D AWARD",
      text: "디지털 미디어 & 서비스 부문 <strong>WINNER</strong>",
      src: "aw_img01.png",
      alt: "WEB AWARD",
    },
    {
      title: "LG R1 Compressor™",
      subtitle: "WEB AWARD KOREA 2022",
      text: "고객서비스 부문 <strong>통합 대상 INNOVATOR</strong>",
      src: "aw_img02.png",
      alt: "WEB AWARD",
    },
    {
      title: "콜레오마케팅그룹",
      subtitle: "WEB AWARD KOREA 2022",
      text: "웹/광고에이전시 분야 <strong>최우수상 FINALIST</strong>",
      src: "aw_img02.png",
      alt: "WEB AWARD",
    },
    {
      title: "메이필드 호텔 서울",
      subtitle: "ICT AWARD KOREA 2022",
      text: "디지털 인사이트 <strong>통합 은상 SILVER PRIX</strong>",
      src: "aw_img03.png",
      alt: "WEB AWARD",
    },
    {
      title: "바이리즌",
      subtitle: "ICT AWARD KOREA 2022",
      text: "웹 · 앱 품질 <strong>통합 은상 SILVER PRIX</strong>",
      src: "aw_img03.png",
      alt: "WEB AWARD",
    },
  ];

  return (
    <div id="wrap" className="about">
      <section id="sec01" className="section about_kv">
        <div className="cont_wrap">
          <div className="bg_box">
            <div className="bg_img"></div>
            <div className="bg_dim"></div>
          </div>
          <div className="cont_box">
            <div className="cont_title">
              <p className="big_tit poppins change_color">
                {gnb[1].toUpperCase()}
              </p>
              <p className="small_tit pretendard change_color">
                저는 끊임없는 도전과 학습을 통해 성장하고자 하는
                <br />
                프론트엔드 개발자 지원자 {userInfo.userNameKo}입니다.
                <br />
                <br />
                뛰어난 문제 해결 능력과 탁월한 커뮤니케이션 스킬을 통해 팀과
                함께 일하며
                <br />
                높은 품질의 프로젝트를 완성 하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sec02" className="section">
        <div className="cont_wrap">
          <div className="cont_box cont_text">
            <div className="texts text_1">
              <p className="sec_tit">강점 및 특징</p>
              <p className="text">
                <span className="aw_text_tit">1. 뛰어난 문제 해결 능력 :</span>
                <br />
                <span className="aw_text_txt">
                  어려운 상황에서도 논리적이고 창의적인 해결책을 찾는 능력이
                  있습니다.
                </span>
                <br />
              </p>
              <p className="text">
                <span className="aw_text_tit">2. 팀 협업 능력 :</span>
                <br />
                <span className="aw_text_txt">
                  다양한 역할과 배경을 가진 팀원들과 원활한 소통과 협업이
                  가능합니다.
                </span>
                <br />
              </p>
              <p className="text">
                <span className="aw_text_tit">3. 지속적인 학습 :</span>
                <br />
                <span className="aw_text_txt">
                  빠르게 변화하는 기술 트렌드에 대한 관심과 학습 의지가
                  강합니다. 어려운 상황에서도 논리적이고 창의적인 해결책을 찾는
                  능력이 있습니다.
                </span>
                <br />
              </p>
            </div>
          </div>
          <div className="cont_box">
            <p className="sec_tit">AWARDS</p>
            <p className="text">
              작업 했던 프로젝트 중에서 수상 경력이 있는 리스트 입니다.
            </p>
            <div className="sec_cont">
              {Awards &&
                Awards.map((target, idx) => {
                  return (
                    <div key={idx} className={`awards awards_${idx + 1}`}>
                      <div className="aw_list">
                        <p className="aw_tit">{target.title}</p>
                        <p className="aw_text">
                          <span className="aw_text_tit">{target.subtitle}</span>
                          <span
                            className="aw_text_txt"
                            dangerouslySetInnerHTML={{
                              __html: target.text,
                            }}></span>
                        </p>
                        <p className="aw_img">
                          <img
                            src={`/portfoliooo/assets/images/${target.src}`}
                            alt={target.alt}
                          />
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
