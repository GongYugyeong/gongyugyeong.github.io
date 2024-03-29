import React, { useEffect, useState } from "react";
import axios from "axios";

const Works = (props) => {
  const auth_token = props.setAuthToken;
  const [gnb, setMenu] = useState(props.gnb);
  const [userInfo, setuserInfo] = useState(props.userInfo);
  const [moreBtnShow, setMoreBtnShow] = useState(false);
  
  const year = ["ALL", "2023", "2022", "2021", "2020~2018"];

  const [selectType, setSelectType] = useState("ALL");
  const [limitCnt, setLimitCnt] = useState(8);
  const [lastNum, setLastNum] = useState(0);

  useEffect(() => {
    console.log(selectType);
    axios
      .get("http://localhost:3000/portfoliooo/data/worksList.json")
      .then((res) => {
        alert(res)
      })
      .catch();
  }, [selectType]);

  const worksList = (e) => {
    let btn = document.querySelectorAll('.btn');
    btn.forEach((item, idx) => {
      item.classList.remove('on');
    });
    setSelectType(e.target.dataset.year);
    e.target.classList.add('on');


  }

  return (
    <div id="wrap" className="works">
      <section id="sec01" className="section">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="title_box">
              <p className="title poppins">{gnb[2].toUpperCase()}</p>
            </div>
            <div className="btn_list">
              {year &&
                year.map((target, idx) => {
                  return (
                    <button
                      type="button"
                      key={idx}
                      className={`cursor_s btn${idx === 0 ? " on" : ""}`}
                      data-year={target}
                      onClick={worksList}
                    >
                      {target}
                    </button>
                  );
                })}
            </div>
            <div className="pro_box" id="works_list"></div>
            {moreBtnShow === false ? null : (
              <div id="more_box" className="more_box">
                <button
                  type="button"
                  id="more_list"
                  className="more_list hover_motion"
                >
                  더보기
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
