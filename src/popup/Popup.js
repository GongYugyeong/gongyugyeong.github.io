import React, { useState } from "react";
import { Link } from "react-router-dom";

const Popup = (props) => {
  const auth_token = props.setAuthToken;
  const [userInfo, setuserInfo] = useState(props.userInfo);

  return (
    <div id="popupLayer">
      <div className="pop_dim"></div>
      <div id="pop01" className="pop_box">
        <div className="pop_cont">
          <button type="button" className="pop_closed">
            <img src="/assets/images/x.png" alt="close" />
          </button>
          <div className="icon_box">
            <p className="icon">
              <img
                src="/assets/images/career_pop_icon.png"
                alt="career_pop_icon"
              />
            </p>
            <p className="b_text">
              {userInfo.userNameKo}에
              <br />
              문의해주셔서 감사합니다.
            </p>
            <p className="s_text">
              귀사의 성공적인 프로젝트를 위해 <br />
              보내주신 내용은 빠르게 검토 후 연락드리겠습니다.
            </p>
          </div>
          <div className="ok_btn">
            <Link to="/" className="cursor_s">
              확인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
