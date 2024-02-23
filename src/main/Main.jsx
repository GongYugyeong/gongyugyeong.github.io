import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 타이핑 라이브러리
import Typed from "react-typed";

// gsap 라이브러리
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Scrollbar from 'smooth-scrollbar';
import SmoothScrollbarComponent from '../SmoothScrollbarComponent';

gsap.registerPlugin(ScrollTrigger);

const Main = (props) => {

  const [userInfo, setuserInfo] = useState(props.userInfo);
  const [skill, setSkill] = useState([
    "HTML, CSS/SCSS, jQuery, JavaScript",
    "Ajax, Fetch, Axios / Api 통신",
    "Zeplin, Pigma, XD, Photoshop",
    "React, Redux Toolkit, TypeScript",
  ]);
  const mainWork = [
    {
      title: "Korean Air Aerospace",
      subtitle: "[React,Redux toolkit]<br />대한항공 항공우주사업본부(부분리뉴얼)",
      src: "mainWorkImg1.png",
      award: "",
    },
    {
      title: "SAMSUNG DISPLAY NEWSROOM",
      subtitle: "[HTML,CSS,Javascript,Ajax]<br />SAMSUNG DISPLAY NEWSROOM(전체리뉴얼)",
      src: "mainWorkImg2.png",
      award: "",
    },
    {
      title: "COLEO MARKETING GRUOP",
      subtitle: "[GSAP,HTML,CSS,Javascript]<br />COLEO MARKETING GROUP(구축)",
      src: "mainWorkImg3.png",
      award: [
        { icon: "web_award_icon01.png" },
        { icon: "web_award_icon02.png" },
      ],
    },
    {
      title: "LG R1 Compressor<sup>TM</sup>",
      subtitle: "[GSAP,HTML,CSS,Javascript]<br />LG R1 Compressor<sup>TM</sup>(구축)",
      src: "mainWorkImg4.png",
      award: [{ icon: "web_award_icon02.png" }],
    },
  ];
  
  return (
    <div id="wrap" className="main">
      <div id="sec01" className="section1 section">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="dim"></div>
            <div className="bg_video">
              <div className="videoBox">
                {/* <video loop muted autoPlay preload="auto">
                  <source
                    src="/assets/images/EBIZVILLE_kvmovie.mp4"
                    type="video/mp4"
                  />
                </video> */}
              </div>
            </div>
            <div className="titleBox">
              <p>FRONTEND DEVELOPER</p>
              <div className="tiping_title">
                <span className="door d_l">[</span>
                <Typed
                  strings={["YUGYEONG;"]}
                  typeSpeed={300}
                  backSpeed={60}
                  backDelay={2000}
                  cursorChar="|"
                  contentType="html"
                  loop
                ></Typed>
                <span className="door d_r">]</span>
              </div>
            </div>
            <p className="row_arrow">
              <img src="/portfoliooo/assets/images/row.png" alt="row" />
            </p>
          </div>
        </div>
      </div>
      <div id="sec02" className="section2 section blackBG">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="textBox">
              <div className="cont_box">
                <div className="sec_text_box">
                  <p className="sec_text">SKILL</p>
                </div>
                <div className="big_text_box">
                  {skill &&
                    skill.map((target, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`big_text big_text0${idx + 1}`}
                          data-img={idx + 1}
                        >
                          <div className="big_text_wrap">
                            <p className="hover_text">{
                            idx === 0
                            ? '레이아웃 작업'
                            : (
                              idx === 1
                              ? 'API 통신'
                              : (
                                idx === 2
                                ? '디자인팀과 협업 툴'
                                : (
                                  idx === 3
                                  ? '프레임워크'
                                  : ''
                                )
                              )
                            )
                            }</p>
                            <p className="hover_text federo">{target}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sec03" className="section3 section">
        <div className="cont_wrap">
          {mainWork &&
            mainWork.map((target, idx) => {
              return (
                <div
                  key={idx}
                  className={`cont_box box0${idx + 1}`}
                >
                  <div className={`work_box work_0${idx + 1}`}>
                    <div className="work_title">
                      <div className="work_title_wrap">
                        <p
                          className="title"
                          dangerouslySetInnerHTML={{ __html: target.title }}
                        ></p>
                      </div>
                    </div>
                    <div className="work_vs">
                      <div id={`ptVod${idx + 1}`} className="vs_box">
                        {target.award !== "" ? (
                          <div className={`img_box img_box0${idx + 1}`}>
                            {target.award &&
                              target.award.map((awardName, awardIdx) => {
                                return (
                                  <img
                                    key={awardIdx}
                                    src={`/portfoliooo/assets/images/${awardName.icon}`}
                                    alt={awardName.icon}
                                  />
                                );
                              })}
                          </div>
                        ) : null}
                        <img
                          src={`/portfoliooo/assets/images/${target.src}`}
                          alt={target.subtitle}
                        />
                      </div>
                      <p
                        className="sub_text"
                        dangerouslySetInnerHTML={{ __html: target.subtitle }}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
