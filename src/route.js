import { Link, Route, Routes } from "react-router-dom";
// import './assets/scss/style.scss';

import NotFound from "./NotFound";
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";
import Main from "./main/Main";
import Works from "./sub/Works";
import About from "./sub/About";
import Story from "./sub/Story";
import Career from "./sub/Career";
import Inquire from "./sub/Inquire";

const route = (props) => {
  return (
    <>
      <div id="wrapper">
        <div className="container">
          {/* header 영역 */}
          <HeaderLayout gnb={props.gnb} />

          {/* Router영역 */}
          <Routes>
            {/* 메인페이지 */}
            <Route
              path="/"
              element={
                <Main
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />

            {/* 서브페이지 */}
            <Route
              path="/sub/Works"
              element={
                <Works
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />
            <Route
              path="/sub/About"
              element={
                <About
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />
            <Route
              path="/sub/Story"
              element={
                <Story
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />
            <Route
              path="/sub/Career"
              element={
                <Career
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />
            <Route
              path="/sub/Inquire"
              element={
                <Inquire
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />

            {/* 404 NotFound */}
            <Route
              path="*"
              element={
                <NotFound userInfo={props.userInfo} gnb={props.gnb} />
              }
            />
          </Routes>

          {/* footer 영역 */}
          <FooterLayout userInfo={props.userInfo} gnb={props.gnb} />
        </div>
        {/* <div className="award_banner">
          <Link to="https://naward.or.kr/winners/2022" target="_blank">
            <img
              src="./assets/images/and_award_banner.png"
              alt=""
              className="cursor_s"
            />
          </Link>
          <Link
            to="http://www.i-award.or.kr/Web/Prize/Default.aspx"
            target="_blank"
          >
            <img
              src="./assets/images/web_award_banner.png"
              alt=""
              className="cursor_s"
            />
          </Link>
          <Link
            to="http://ictawardkorea.com/htm/2022?sca=%EC%9D%80%EC%83%81+%EC%A0%95%EB%B3%B4%EA%B3%BC%ED%95%99%EC%A7%84%ED%9D%A5%ED%98%91%ED%9A%8C+%EC%9D%B4%EC%82%AC%EC%9E%A5%EC%83%81"
            target="_blank"
          >
            <img
              src="./assets/images/award_banner.png"
              alt=""
              className="cursor_s"
            />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default route;
