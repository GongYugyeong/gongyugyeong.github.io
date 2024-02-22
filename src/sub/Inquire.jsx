import React, { useState } from "react";

const Inquire = (props) => {
  const auth_token = props.authToken;
  const [gnb, setMenu] = useState(props.gnb);
  const [userInfo, setuserInfo] = useState(props.userInfo);
  const [inquireType, setInquireType] = useState(['웹사이트','이벤트','모바일 어플리케이션','게임','유지운영','기타']);
  const [form, setForm] = useState({
    checkType: "",
    company: "",
    manager: "",
    contact: "",
    email: "",
    period: "",
    scale: "",
    inquiry: "",
  });

  const useValid = () =>{
    // const infoTitle = document.querySelectorAll('.info_title');
    const inputValue = document.querySelectorAll('.info_cont_box input');

    inputValue.forEach((target,index) => {
      target.value === '' 
      ? alert(target[index].getAttribute( 'placeholder' ))
      : alert('ok')
    })

    console.log(form);
  }

  return (
    <div id="wrap" className="inquire">
      <div id="sec01" className="sec01 section">
        <div className="cont_wrap">
          <div className="cont_box">
            <form name="send_form" id="send_form">
              <input type="hidden" id="auth_token" name="auth_token" value={auth_token} readOnly />
              <div className="title_box">
                <p className="title">{gnb[4].toUpperCase()}</p>
                <p className="text">
                  도움이 필요하신 내용이나 궁금하신 사항을 상세히 알려주세요.
                </p>
              </div>

              <div className="check_box">
                {
                  inquireType.map((target, index)=>{
                    return (
                      <p key={index} className={`check check_${index+1}`}>
                        <input
                          className="type_check cursor_s"
                          type="checkbox"
                          name="select_type[]"
                          value={index+1}
                          id={`check_${index+1}`}
                        />
                        <label className="cursor_s" htmlFor={`check_${index+1}`}>{target}</label>
                      </p>
                    );
                  })
                }
              </div>

              <div className="info_box">
                <div className="info_cont_box">
                  <div className="info">
                    <p className="info_title cursor_s">회사명</p>
                    <input
                      id="company"
                      name="company"
                      className="cursor_s"
                      type="text"
                      placeholder="회사명을 입력해주세요"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                    />
                  </div>
                  <div className="info ">
                    <p className="info_title cursor_s">담당자</p>
                    <input
                      id="manager"
                      name="manager"
                      className="cursor_s"
                      type="tel"
                      placeholder="담당자 성함/직급을 입력해주세요."
                      value={form.manager}
                      onChange={(e) =>
                        setForm({ ...form, manager: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="info_cont_box">
                  <div className="info number_box">
                    <p className="info_title cursor_s">연락처</p>
                    <input
                      id="contact"
                      name="contact"
                      className="cursor_s"
                      type="tel"
                      placeholder="연락처를 입력해주세요."
                      value={form.contact}
                      onChange={(e) =>
                        setForm({ ...form, contact: e.target.value })
                      }
                    />
                  </div>
                  <div className="info budget_box">
                    <p className="info_title cursor_s">이메일</p>
                    <input
                      id="email"
                      name="email"
                      className="cursor_s"
                      type="text"
                      placeholder="이메일을 입력해주세요"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="info_cont_box">
                  <div className="info calendar_box">
                    <p className="info_title cursor_s">예상시기</p>
                    <input
                      id="period"
                      name="period"
                      className="cursor_s"
                      type="text"
                      placeholder="예상 완료일을 입력해주세요"
                      value={form.period}
                      onChange={(e) =>
                        setForm({ ...form, period: e.target.value })
                      }
                    />
                  </div>
                  <div className="info budget_box">
                    <p className="info_title cursor_s">예산 규모</p>
                    <input
                      id="scale"
                      name="scale"
                      className="cursor_s"
                      type="text"
                      placeholder="예산을 입력해주세요"
                      value={form.scale}
                      onChange={(e) =>
                        setForm({ ...form, scale: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="info_cont_box">
                  <div className="info que_box cursor_s">
                    <p className="info_title cursor_s">문의사항</p>
                    <textarea
                      id="inquiry"
                      name="inquiry"
                      className="cursor_s"
                      placeholder="구체적으로 문의하실 내용을 기재해 주세요."
                      value={form.inquiry}
                      onChange={(e) =>
                        setForm({ ...form, inquiry: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="submit_btn cursor_s hover_motion"
                onClick={useValid}
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inquire;
