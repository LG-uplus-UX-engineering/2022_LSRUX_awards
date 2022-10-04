import './default/swiper.css';
import './default/default.css';
import './ui_22.css';
import './App.css';
import React, { Fragment } from 'react';
import { Header, Banner } from './Banner';
import { Block1, Block2, Block3, Block4, Block5 } from './Contents';
import {swiperEffect, scrollEffect, contentEffect, changeDescription} from './effect';

class App extends React.Component {
  componentDidMount() {
    swiperEffect();
    scrollEffect();
    contentEffect();
    changeDescription();
  }

  render () {
    return (
      <Fragment>
          <div className="total_wrapper">
            <Header />
            <article className="default">
                <Banner />
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
                {/* <section className="content content__d">
                    <div className="content_wrapper" id="scroll_3">
                        <div className="title noto_sans">진행절차</div>
                        <div className="desc">
                            <p>하기 일정은 상황에 따라 변경될 수 있으며, 각 전형 별 상세 일정은 합격자에게 개별 통보됩니다.</p>
                        </div>
                        <div className="process">
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">9월 28일</span></div>
                                <div className="text noto_sans">수상작발표</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 5일</span></div>
                                <div className="text noto_sans">시상식 진행</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 중</span></div>
                                <div className="text noto_sans">인적성검사 & AI영상 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 중</span></div>
                                <div className="text noto_sans">실무 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step no_shrink">
                                <div className="date noto_sans"><span className="noto_sans">10월 ~ 11월중</span></div>
                                <div className="text noto_sans">인턴십(4주)</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">11월 중</span></div>
                                <div className="text noto_sans">임원 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date date_final noto_sans"><span className="noto_sans">22년 1/1</span></div>
                                <div className="text noto_sans">입사</div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Block5 />
                <section className="content content__c content__c__a">
                    <div className="module_line">
                        <div className="subtitle">*UX 공모전 작품 제출 및 수상관련 안내사항</div>
                        <div className="description">
                            <p>
                                <span>1. </span><span>타 공모전 수상작 혹은 타인의 저작물 및 명의도용 확인의 경우 수상취소 혹은 수상내역 환수
                                    ※ 표절 작품은 수상에서 제외되며, 수상작으로 선정된 이후 표절사실이 밝혀질 경우 수상 취소 및 상금 및 상장 환수
                                </span>
                            </p>
                            <p>
                                <span>2. </span><span>저작권, 초상권 등과 관련한 응모한 작품의 모든 법적인 책임은 응모자에게 있음</span>
                            </p>
                            <p>
                                <span>3. </span><span>수상작품의 저작권은 수상자에게 있으나, 주최측은 수상 작품발표, 홍보, 캠페인 등의 목적으로 활용(필요시 재가공)할 수 있음</span>
                            </p>
                            <p>
                                <span>4. </span><span>상금에 대한 제세공과금은 수상자가 부담함</span>
                            </p>
                            <p>
                                <span>5. </span><span>작품 송부 시에는 파일명에 지원자 명과 지원날짜, 공모 분야를 모두 포함 바랍니다.</span>
                            </p>
                        </div>
                    </div>
                </section>                    
            </article>
            <article className="qna">
                <section className="content content__e" id="scroll_4">
                    <div className="content_wrapper">
                        <div className="title noto_sans">자주 묻는 질문</div>
                        <div className="desc">
                            <p className="not_flex">
                                작성 가이드 및 파일 접수와 관련한 질문을 아래에서
                                확인하시고 원하시는 답변을 찾을 수 없다면
                                <a target="_blank" href="http://apply.lg.com/app/faq/RetrieveFaq.rpi?requestMenuId=1069">LG Careers 사이트의 1:1 질문하기</a>
                                를 통해 질문해주시기 바랍니다.
                            </p>
                        </div>
                        <div className="wrapper_qna_case">
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q1.</span><span className="noto_sans">공모전 접수는 어디로 하면 되나요?</span></p>
                                <p className="answer">
                                    지원서 접수는 LG Careers 사이트를 통해 제출해 주시고 작품 제출 (PDF/동영상(선택))은
                                    UX공모전 공용계정 이메일 <span className="email_address">uxawards@lguplus.co.kr</span>로 접수해주시기 바랍니다. 
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q2.</span><span className="noto_sans">다른 이메일 계정으로 여러 공모분야에 중복 지원이 가능한가요?</span></p>
                                <p className="answer">
                                    중복지원은 불가하며 한 분야에 한 작품만 지원 가능합니다.
                                    동일인이 여러 이메일을 이용하여 지원하는 경우 불이익이 있을 수 있습니다. 
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q3.</span><span className="noto_sans">저는 석사인데, 지원 가능한가요?</span></p>
                                <p className="answer">
                                    석사 전공자도 지원 가능하나, 경력 2년 미만일 경우에만 지원 가능합니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q4.</span><span className="noto_sans">과거에 불합격한 사람이 다시 지원해도 되나요?</span></p>
                                <p className="answer">
                                    과거 지원 이력에 따른 별도의 제한은 없어, 지원 가능합니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q5.</span><span className="noto_sans">지원 시 성별 및 연령제한이 있나요?</span></p>
                                <p className="answer">
                                    LG유플러스는 지원시 성별 및 연령 제한을 두지 않고 있습니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q6.</span><span className="noto_sans">작품제출을 이미 했는데 수정 가능한가요?</span></p>
                                <p className="answer">
                                    수정이 필요할 경우, 기간 내 추가적으로 작품을 메일로 송부 가능합니다.
                                    단, 수정 횟수는 1회로 제한하며,  2회 초과 지원 시 2회차 송부된 메일 기준으로 작품이 심사됩니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q7.</span><span className="noto_sans">각 직무 별 어떤 업무를 하는 지 구체적으로 알고 싶어요.</span></p>
                                <p className="answer">
                                    LG Careers의 ’MEET LG' 페이지에는 LG의 주요 직무 소개, 조직 분위기, 선배 사원 이야기, 조직 문화 등과
                                    관련된 자료들이 모아져 있습니다. 'MEET LG'를 통해 내가 가고 싶은 회사를 미리 경험해보세요.
                                    홈 화면의 배너를 통해서 해당 페이지로 바로 이동이 가능합니다.
                                </p>
                            </div>
                            {/* <div className="case_qna">
                                <p className="question"><span>Q8.</span><span>기존 유플러스 서비스 중 하나를 골라 개편 및 개선 제안을 해도 되나요?</span></p>
                                <p className="answer">
                                    기존 유플러스 서비스(모바일tv, 프로야구, 아이들나라 등)를 개편 및 개선하는 것이 아닌, 새로운 서비스에 대한 솔루션을 제안하는 과제입니다.
                                    단, 수정 횟수는 1회로 제한하며,  2회 초과 지원 시 2회차 송부된 메일 기준으로 작품이 심사됩니다.
                                </p>
                            </div> */}
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q8.</span><span className="noto_sans">유플러스가 현재 진행하는 산업군을 고려하여 과제를 수행해야 하나요?</span></p>
                                <p className="answer">
                                    다양한 산업군을 고려하여 자유롭게 과제 진행해주시면 됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner banner_mobile">
                    <div className="mobile_message">
                        <span>공모전은 PC에서만 지원 가능합니다.</span>
                    </div>
                </section>
                <section className="apply">
                    <a className="btn btn__apply no_underline" href="http://apply.lg.com/app/job/RetrieveJobNotices.rpi?sCompanyCode=LGT" target="_blank">
                        <span className="noto_sans">지원하기</span>
                    </a>
                    <img src="/img/img_lgu_logo.png" alt="" className="logo"></img>
                </section>
            </article>
          </div>
      </Fragment>
    );
  }
}

export default App;
