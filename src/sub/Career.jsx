import React, { useState, useRef } from "react";

const Career = (props) => {
  const auth_token = props.authToken;
  const [userInfo, setuserInfo] = useState(props.userInfo);
  const [infoShow, setInfoShow] = useState(false);
  const contactRef = useRef();

  return (
    <div id="wrap" className="career">
      <div id="sec01" className="sec01 section">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="left_cont">
              <div className="title_box">
                <p className="b_text">새로운 미래를 위해</p>
                <p className="b_text">
                  {userInfo.userNameKo}는 새로운 인재를
                  <span className="b_text">
                    <img src="/assets/images/career_icon.png" alt="아이콘" />
                    찾고 있습니다.
                  </span>
                </p>
              </div>
              <div className="submit_box">
                <p className="sub_title">
                  창의적인 혁신과 새로운 미래를 위해 {userInfo.userNameKo}
                  는 항상새로운 인재를 찾고 있습니다.
                  <br />
                  함께하고 싶은 분들의 지원을 환영합니다.
                </p>
                <button
                  type="button"
                  className="cursor_s sub_btn hover_motion"
                  onClick={() => {
                    setInfoShow(true);
                    setTimeout(() => {
                      contactRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                >
                  입사지원하기
                </button>
              </div>
            </div>
            <div className="right_cont">
              <div className="img_box">
                <p className="img_cont img_cont_3" data-img="3">
                  <img src="/assets/images/career_img_3.png" alt="" />
                </p>
                <p className="img_cont img_cont_2" data-img="2">
                  <img src="/assets/images/career_img_2.png" alt="" />
                </p>
                <p className="img_cont img_cont_1" data-img="1">
                  <img src="/assets/images/career_img_1.png" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={contactRef}
        id="sec02"
        className={`sec02 section${infoShow ? " on" : null}`}
      >
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="title_box">
              <p className="title">입사지원</p>
              <p className="text">
                {userInfo.userNameKo}의 프로젝트 일정에 따라 수시로 직무에
                적합한 전문가분들을 모십니다.
                <br />
                필요한 경우 우선적으로 검토하여 연락 드립니다.
              </p>
            </div>
            <div className="info_box">
              <div className="half_box">
                <div className="info name_box">
                  <p className="info_title cursor_s">이름</p>
                  <input
                    className="cursor_s name_check"
                    type="text"
                    placeholder="지원자님의 이름을 입력해주세요."
                  />
                </div>
                <div className="info number_box">
                  <p className="info_title cursor_s">연락처</p>
                  <input
                    className="cursor_s con_check"
                    type="tel"
                    placeholder="지원자님께 연락할 수 있는 연락처(이메일, 휴대폰번호 등)을 남겨주세요."
                  />
                </div>
              </div>
              <div className="full_box">
                <div className="info file_box">
                  <p className="info_title cursor_s">첨부파일</p>
                  <p className="input_box">
                    <input
                      className="file_check"
                      type="text"
                      placeholder="이력서나 포트폴리오 등 파일을 등록해주세요."
                      readOnly
                    />
                    <label className="file_btn cursor_s" htmlFor="input_file">
                      찾아보기
                    </label>
                    <input
                      type="file"
                      name="input_file"
                      id="input_file"
                      style={{ display: "none" }}
                    />
                  </p>
                </div>
                <div className="info_text">
                  <p className="can_info">
                    첨부파일은 자유롭게 작성해서 올려주세요. 단, 문서의 형태로
                    된 파일만 업로드가 가능합니다. (pdf, doc, docx, ppt, pptx,
                    hwp 등)
                  </p>
                  <p className="noti">
                    지원서는 일정기간 보관 후 처리목적 달성 등 개인정보가
                    불필요하게 되었을 때 지체없이 파기합니다.
                  </p>
                </div>
              </div>
            </div>
            <button type="button" className="submit_btn cursor_s hover_motion">
              지원하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
