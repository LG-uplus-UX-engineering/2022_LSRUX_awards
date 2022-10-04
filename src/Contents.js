import React, { Fragment } from 'react';
import {MobileApply} from './Banner';

function PutContent ({mark, content}) {
    return (
        <p><span>{mark}</span><span>{content}</span></p>
    );
}

function ContentStyle ({title, scroll, desc}) {
    return (
        <div className="content_wrapper" id={`${scroll ? scroll : null}`}>
            <div className="title noto_sans">{title}</div>
            <div className="desc">
                {desc}
            </div>
        </div>
    );
}

const ContentArray1 = [
    {title: '모집기간', desc: <p>10월 10일(월) 10:00시부터 11월 21일(월) 23:00시까지</p>},
    {title: '모집대상', desc:
    <Fragment>
        {<PutContent mark='-' content='4년제 대학 기준 2023년 2월 이전 졸업예정 또는 경력 2년 미만의 기 졸업자 (전공무관)'/>}
        {<PutContent mark='-' content='LG유플러스 ‘23년 LSR/UX신입사원 채용 전형 참석 가능자'/>}
        {<PutContent mark='-' content='2023년 2월 입사 가능자'/>}
    </Fragment>},
    {title: '공모분야', scroll: 'scroll_1', desc:
    <Fragment>
        {<PutContent mark='-' content='단체 참가는 불가하며, 개인만 참가 가능합니다.'/>}
        {<PutContent mark='-' content='지원자 당 한 분야, 한 작품 지원만 가능합니다.'/>}
        {<PutContent mark='-' content='타 공모전 수상작은 출품 불가합니다.'/>}
        {<PutContent mark='-' content='본 공모전 참여 시 ‘23년 상반기 신입채용 타 공고에 중복지원이 불가합니다.'/>}
    </Fragment>
    }
];

function Block1 () {
    return (
        <section className="content content__a">
            {ContentArray1.map((e)=><ContentStyle title={e.title} desc={e.desc} scroll={e.scroll}/>)}
        </section>
    );
}

function TopicFilter ({class_case, data_case, title}) {
    return (
        <div className={`case ${class_case}`} data-case={`${data_case}`}>
            <span className="btn_case noto_sans">{title}</span>
            <span className="hello noto_sans">Hello</span>
        </div>
    );
}

const ContentArray2 = [
    {class_case: 'case__1 active', data_case : 'UX_RESEARCH', title:'고객 인사이트'},
    {class_case: 'case__2', data_case : 'UI_PLAN', title:'UI기획 및 설계'},
    {class_case: 'case__3', data_case : 'GUI_DESIGN', title:'GUI 디자인'},
    {class_case: 'case__4', data_case : 'UX_ENGINEERING', title:'UX 엔지니어링'},
    {class_case: 'case__5', data_case : 'PRODUCT_DESIGN', title:'제품 디자인'},
    {class_case: 'empty'}
];

function Block2 () {
    return (
        <section className="content content__b">
            {ContentArray2.map((e)=><TopicFilter class_case={e.class_case} data_case={e.data_case} title={e.title}/>)}
        </section>
    );
}

const ContentArray3 = [
    {type:'content_title', title:'', add: 'active'},
    {type:'content_subject', title:'주제'},
    {type:'content_detailguide', title:'상세가이드'},
    {type:'content_form', title:'제출형식'},
    {type:'content_amount', title:'제출분량'},
    {type:'content_guide', title:'작성가이드'},
    {type:'content_notice', title:'유의사항'},
    {type:'content_standard', title:'평가기준', add: 'type_b underline'}
];

function TopicContent ({add, type, title}) {
    return (
        <div className={`module_line ${add ? add : ''}`} id={type}>
            <div className="subtitle">{title}</div>
            <div className="description">
            </div>
        </div>
    );
}

function Block3 () {
    return (
        <section className="content content__c">
            {ContentArray3.map((e)=><TopicContent add={e.add} type={e.type} title={e.title}/>)}
        </section>
    );
}

function Prize ({prize, money}) {
    return (
        <div>
            <span className="noto_sans">{prize}</span><span></span><span className="noto_sans">{money}</span>
        </div>
    );
}

const ContentArray4 = [
    {prize: 'Platinum (1인)', money : '상금 300만원 및 상장'},
    {prize: 'Gold (1인)', money : '상금 200만원 및 상장'},
    {prize: 'Silver (5인)', money : '상금 100만원 및 상장'},
    {prize: 'Bronze (5인)', money : '상금 50만원 및 상장'}
];

function Block4 () {
    return (
        <section className="content content__c">
            <div className="content_wrapper" id="scroll_2">
                <div className="title noto_sans">수상특전</div>
                <div className="desc prize_desc">
                    {<PutContent content={'입상자에게는 ‘23년 하반기 LSR/UX 신입채용 서류 면제 혜택이 부여됩니다.'}/>}
                    {<PutContent content={'입상자 외에도 우수작인 경우 ‘23년 하반기 LSR/UX신입채용 서류 전형 면제 혜택이 부여될 수 있습니다.'}/>}
                </div>
                <div className="detail_wrapper">
                    <div className="detail">
                        {ContentArray4.map((e)=><Prize prize={e.prize} money={e.money}/>)}
                    </div>
                    <img src="/img/img-congrats_2022.png" alt=""></img>
                </div>
            </div>
        </section>
    );
}


function EnrollProcess ({date, content, line, final}) {
    return(
        <div className={`step ${line ? line : ''}`}>
            {line ? null :
                <Fragment>
                    <div className={`date noto_sans ${final ? final : ''}`}><span className="noto_sans">{date}</span></div>
                    <div className="text noto_sans">{content}</div>                    
                </Fragment>
            }

        </div>
    );
}

const ContentArray5 = [
    {date: '11월 4주차', content:'수상작 발표'},
    {line: 'step_line'},
    {date: '11월 4주차', content:'시상식'},
    {line: 'step_line'},
    {date: '12월 중', content:'인적성검사 & AI영상 면접'},
    {line: 'step_line'},
    {date: '12월 중', content:'실무 면접'},
    {line: 'step_line'},
    {date: '1월 (4주간)', content:'인턴십'},
    {line: 'step_line'},
    {date: '2월 중', content:'최종 면접'},
    {line: 'step_line'},
    {date: '2월 중', content:'입사', final:'date_final'}
];

function Block5 () {
    return (
        <section className="content content__d">
            <div className="content_wrapper" id="scroll_3">
                <div className="title noto_sans">진행절차</div>
                <div className="desc">
                    <p>하기 일정은 상황에 따라 변경될 수 있으며, 각 전형 별 상세 일정은 합격자에게 개별 통보됩니다.</p>
                </div>
                <div className="process">
                    {ContentArray5.map((e)=> <EnrollProcess date={e.date} content={e.content} line={e.line} final={e.final}/>)}
                </div>
            </div>
        </section>
    );
}

function Block6 () {
    return (
        <section className="content content__c content__c__a">
            <div className="module_line">
                <div className="subtitle">* 공모전 작품 제출 및 수상관련 안내사항</div>
                <div className="description awards_notice_desc">
                    {<PutContent mark='1. ' content={['타 공모전 수상작 혹은 타인의 저작물 및 명의도용 확인의 경우 수상취소 혹은 수상내역 환수', <br /> , '※ 표절 작품은 수상에서 제외되며, 수상작으로 선정된 이후 표절사실이 밝혀질 경우 수상 취소 및 상금 및 상장 환수']}/>}
                    {<PutContent mark='2. ' content='저작권, 초상권 등과 관련한 응모한 작품의 모든 법적인 책임은 응모자에게 있음'/>}
                    {<PutContent mark='3. ' content='수상작품의 저작권은 수상자에게 있으나, 주최측은 수상 작품 발표, 홍보, 캠페인 등의 목적으로 활용(필요시 재가공)할 수 있음'/>}
                    {<PutContent mark='4. ' content='상금에 대한 제세공과금은 수상자가 부담함'/>}
                </div>
            </div>
        </section>  
    );
}

function Qna ({num, title, answer}) {
    return (
        <div className="case_qna">
            <p className="question"><span className="noto_sans">{num}</span><span className="noto_sans">{title}</span></p>
            <p className="answer">
                {answer}
            </p>
        </div>
    );
}

const ContentArray6 = [
    {num: 'Q1. ', title: '공모전 접수는 어디로 하면 되나요?', answer:['지원서 접수는 LG Careers 사이트를 통해 제출해 주시고 작품 제출 (PDF/동영상(선택))은 UX공모전 공용계정 이메일 lsruxawards@lguplus.co.kr로 접수해주시기 바랍니다. ']},
    {num: 'Q2. ', title: '다른 이메일 계정으로 여러 공모분야에 중복 지원이 가능한가요?', answer:['중복지원은 불가하며 한 분야에 한 작품만 지원 가능합니다.', <br />, '동일인이 여러 이메일을 이용하여 지원하는 경우 불이익이 있을 수 있습니다.']},
    {num: 'Q3. ', title: '저는 석사인데, 지원 가능한가요?', answer:['석사 전공자도 지원 가능하나, 경력 2년 미만일 경우에만 지원 가능합니다.']},
    {num: 'Q4. ', title: '과거에 불합격한 사람이 다시 지원해도 되나요? ', answer:['과거 지원 이력에 따른 별도의 제한은 없어, 지원 가능합니다.']},
    {num: 'Q5. ', title: '지원 시 성별 및 연령제한이 있나요?', answer:['LG유플러스는 지원시 성별 및 연령 제한을 두지 않고 있습니다.']},
    {num: 'Q6. ', title: '작품제출을 이미 했는데 수정 가능한가요?', answer:['수정이 필요할 경우, 기간 내 추가적으로 작품을 메일로 송부 가능합니다.',<br />,'단, 수정 횟수는 1회로 제한하며, 2회 초과 지원 시 2회차 송부된 메일 기준으로 작품이 심사됩니다.']},
    {num: 'Q7. ', title: '각 직무 별 어떤 업무를 하는 지 구체적으로 알고 싶어요.', answer:['LG Careers의 `MEET LG` 페이지에는 LG의 주요 직무 소개, 조직 분위기, 선배 사원 이야기, 조직 문화 등과 관련된 자료들이 모아져 있습니다. `MEET LG`를 통해 내가 가고 싶은 회사를 미리 경험해보세요.', <br />, '홈 화면의 배너를 통해서 해당 페이지로 바로 이동이 가능합니다.']},
    {num: 'Q8. ', title: '유플러스가 현재 진행하는 산업군을 고려하여 과제를 수행해야 하나요?', answer:['다양한 산업군을 고려하여 자유롭게 과제 진행해주시면 됩니다.']},
];

const ApplyButton = (
    <Fragment>
        <a className="btn btn__apply no_underline" href="http://apply.lg.com/app/job/RetrieveJobNotices.rpi?sCompanyCode=LGT" target="_blank">
            <span className="noto_sans">지원하기</span>
        </a>
        <img src="/img/img_lgu_logo.png" alt="" className="logo"></img>
    </Fragment>
);

function Block7 () {
    return (
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
                        {ContentArray6.map((e)=> <Qna num={e.num} title={e.title} answer={e.answer}/>)}
                    </div>
                </div>
            </section>
            <section className="banner banner_mobile">
                {MobileApply}
            </section>
            <section className="apply">
                {ApplyButton}
            </section>
        </article>
    );
}
export {Block1, Block2, Block3, Block4, Block5, Block6, Block7};