import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { storyApi } from "../store/storySlice";

const Story = (props) => {
  const auth_token = props.authToken;
  const [gnb, setMenu] = useState(props.gnb);
  const [moreBtnShow, setMoreBtnShow] = useState(false);

  const category = ["ALL", "NEWS", "LIFE", "MAGAZINE", "ETC"];

  const storyData = useSelector((state) => state.story.list);
  const dispatch = useDispatch();

  const [selectType, setSelectType] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [limitCnt, setLimitCnt] = useState(9);

  useEffect(() => {
    let _data = {
      auth_token: '234njkbdsub3qwhjbahw', // 토큰
      story_type: selectType, // '':all, 1:NEWS, 2:LIFE, 3:MAGAZINE, 4:ETC
      page: pageNum, // 현재페이지 1, 2, 3 ...
      num_per_page: limitCnt, // 한페이지 갯수 9
    };
    dispatch(storyApi(_data));
  }, [selectType]);

  const storyList = (e) => {
    let btn = document.querySelectorAll(".btn");
    btn.forEach((item, idx) => {
      item.classList.remove("on");
    });
    setSelectType(e.target.dataset.type);
    e.target.classList.add("on");
  };

  return (
    <div id="wrap" className="story">
      <div id="sec01" className="sec01 section">
        <div className="cont_wrap">
          <div className="cont_box">
            <div className="title_box">
              <p className="title poppins">{gnb[2].toUpperCase()}</p>
            </div>
            <div className="btn_list">
              {category &&
                category.map((target, idx) => {
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`cursor_s btn${idx === 0 ? " on" : ""}`}
                      data-type={idx === 0 ? "" : idx}
                      onClick={storyList}
                    >
                      {target}
                    </button>
                  );
                })}
            </div>
            <div className="story_list">
              <div className="storyBox">{/* 컨텐츠 */}</div>
            </div>
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
      </div>
    </div>
  );
};

export default Story;
