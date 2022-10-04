import React, { Fragment } from 'react';

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
        <p><span>-</span><span>4년제 대학 기준 2023년 2월 이전 졸업예정 또는 경력 2년 미만의 기 졸업자 (전공무관)</span></p>
        <p><span>-</span><span>LG유플러스 ‘23년 LSR/UX신입사원 채용 전형 참석 가능자</span></p>
        <p><span>-</span><span>2023년 2월 입사 가능자</span></p>
    </Fragment>},
    {title: '공모분야', scroll: 'scroll_1', desc:
    <Fragment>
        <p><span>-</span><span>단체 참가는 불가하며, 개인만 참가 가능합니다.</span> </p>
        <p><span>-</span><span>지원자 당 한 분야, 한 작품 지원만 가능합니다.</span></p>
        <p><span>-</span><span>타 공모전 수상작은 출품 불가합니다.</span></p>
        <p><span>-</span><span>본 공모전 참여 시 ‘23년 상반기 신입채용 타 공고에 중복지원이 불가합니다.</span></p>
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
    {type:'content_detailguide', title:'상세가이드'},
    {type:'content_form', title:'제출형식'},
    {type:'content_amount', title:'제출분량'},
    {type:'content_guide', title:'작성가이드'},
    {type:'content_notice', title:'유의사항'},
    {type:'content_standard', title:'평가기준', add: 'type_b underline'}
];

const GuideCommon = (
    <Fragment>
        <p>
            <span>1. </span><span>출품 파일은 지원자가 자율적으로 구성하여 작성할 수 있음</span>
        </p>
        <p>
            <span>2. </span><span>평가 기준을 참고하여 화면 구성 및 설명을 기입</span>
        </p>
        <p>
            <span>3. </span><span>원칙적으로 화면의 분량은 제한이 없으나 가급적 15페이지 이내로 작성할 것을 권장함</span>
        </p>
        <p>
            <span>4. </span><span>지원서 접수는 LG Careers <a href="http://apply.lg.com" target="_blank"><span>http://apply.lg.com</span></a>를 통해 제출해주시고,
            그 외 공모전 출품은 lsrux 공모전 공용계정 이메일 <span className="email_address">lsruxawards@lguplus.co.kr</span>로
            제출해주시기 바랍니다.</span>
        </p>
        <p>
            <span>5. </span><span>작품 송부 시에는 파일명에 지원자 명과 지원날짜, 공모 분야를 모두 포함 바랍니다.</span>
        </p>
    </Fragment>
);

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
export {Block1, Block2, Block3};