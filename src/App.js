import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./route";

import ScrollToTop from "./ScrollToTop";

function App() {
  const [authToken, setAuthToken] = useState("234njkbdsub3qwhjbahw");
  const userInfo = {
    userNameKo: "공유경",
    userNameEn: "GongYugyeong",
    userEmail: "yugyeong0917@naver.com",
    userTel: "+82-10-2907-0917",
  };
  const [gnb, setGnb] = useState([
    "Home",
    "About",
    "Works"
  ]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Route userInfo={userInfo} gnb={gnb} authToken={authToken} />
    </BrowserRouter>
  );
}

export default App;
