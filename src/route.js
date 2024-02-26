import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";
import Main from "./main/Main";
import Works from "./sub/Works";
import About from "./sub/About";

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
              path="/portfoliooo/"
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
              path="/portfoliooo/sub/Works"
              element={
                <Works
                  authToken={props.authToken}
                  userInfo={props.userInfo}
                  gnb={props.gnb}
                />
              }
            />
            <Route
              path="/portfoliooo/sub/About"
              element={
                <About
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
      </div>
    </>
  );
};

export default route;
