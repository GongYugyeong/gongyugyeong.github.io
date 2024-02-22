import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLayout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gnb, setMenu] = useState(props.gnb);
  const [WhiteBlack, setWhiteBlack] = useState('W');
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);

    // let page = document.getElementById('wrap');
    // console.log(page.className);
    // page.className === 'main'
    // ? setWhiteBlack('W')
    // : setWhiteBlack('B')
  }, [pathname]);

  return (
    <header>
      <div className="menu_wrap">
        <div id="header">
          <div className={`header_wrap ${WhiteBlack}`}>
            <div className="logo left cursor_s">
              <p className="logo_img cursor_s">
                GONGYUGYEONG
                {/* <Link to="/" className="cursor_s">
                  <img src={`/assets/images/p_logo_${WhiteBlack}.png`} alt="" />
                </Link> */}
              </p>
            </div>
          </div>
        </div>
        <div id='brochure' className="right">
          <div className="brochure">
            <Link
              to="https://yugyeong.notion.site/5dd708e317324ca7a78ccdaa9d91db2a?pvs=4"
              target="_blank"
              className="dw_btn pretendard cursor_s"
            >
              Notion
            </Link>
            <span className="border_w"></span>
            <span className="border_g"></span>
            <Link
              to="https://yugyeong.notion.site/5dd708e317324ca7a78ccdaa9d91db2a?pvs=4"
              target="_blank"
              className="dw_btn on pretendard cursor_s"
            >
              Notion
            </Link>
          </div>
          <div className="menu_btn_box cursor_s">
            <button
              type="button"
              className={`menu_btn cursor_s ${menuOpen ? "on" : ""}`}
              onClick={(e) => {
                setMenuOpen(!menuOpen);
              }}
            >
              <span className="bar bar_1"></span>
              <span className="bar bar_2"></span>
              <span className="bar bar_3"></span>
            </button>
          </div>
        </div>
        <div id="gnb" className={`menu_box ${menuOpen ? "active" : ""}`}>
          <div className="gnb_wrap">
            <ul className="menu_list">
              {gnb &&
                gnb.map((target, idx) => {
                  return (
                    <li key={idx} className={`nav nav_${idx + 1}`}>
                      <Link to={
                        idx === 0
                        ? `%PUBLIC_URL%/main/main` 
                        : `%PUBLIC_URL%/sub/${target}`
                        } className="cursor_s">
                        {target}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {/* <div className="dw_box cursor_s">
              <Link href="/assets/pdf/" target="_blank">
                <span>회사소개서 다운로드</span>
                <img
                  className="wh"
                  src="./assets/images/down_icon_w.png"
                  alt=""
                />
                <img
                  className="gr"
                  src="./assets/images/down_icon_g.png"
                  alt=""
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
