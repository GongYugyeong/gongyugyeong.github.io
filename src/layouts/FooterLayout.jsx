import React, { useState } from "react";
import { Link } from "react-router-dom";

const FooterLayout = (props) => {
  const [userInfo, setuserInfo] = useState(props.userInfo);
  const [gnb, setMenu] = useState(props.gnb);

  // toUpperCase() 대문자 변환
  // toLowerCase() 소문자 변환

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer>
      <div id="footer">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="top_btn_box">
              <button type="button" className="top_btn cursor_s" onClick={handleTop}>
                <img src="%PUBLIC_URL%/assets/images/top_btn.png" alt="" />
              </button>
            </div>
            <div className="cont_info_box">
              <div className="sub_btn_box">
                <ul>
                  {gnb &&
                    gnb.map((target, idx) => {
                      return (
                        <li key={idx} id={idx} className="m_btn poppins">
                          <Link to={
                        idx === 0
                        ? `%PUBLIC_URL%/` 
                        : `%PUBLIC_URL%/sub/${target}`
                        } className="cursor_s">
                        {target}
                      </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="foot_info">
                <div className="address_box info_box">
                  <p className="poppins tp_title">Email</p>
                  <p className="pretendard address">{userInfo.userEmail}</p>
                </div>
                <div className="contact_box info_box">
                  <p className="poppins tp_title">Tel</p>
                  <p className="pretendard tel">{userInfo.userTel}</p>
                </div>
                {/* <div className="info_dw">
                  <Link
                    to="/assets/pdf/"
                    arget="_blank"
                    className="cursor_s dw_btn"
                  >
                    <span className="dw_text pretendard">
                      회사소개서 다운로드
                    </span>
                    <span className="dw_icon">
                      <img src="/assets/images/down_icon.png" alt="다운로드" />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="copy_box">
              <div className="pretendard">
                <p className="copy_text copyright">COPYRIGHT {userInfo.userNameEn}. ALL RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
