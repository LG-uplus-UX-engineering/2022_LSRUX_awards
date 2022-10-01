import React, { Fragment } from 'react';

function ContentStyle ({title, scroll, desc}) {
    return (
        <div className="content_wrapper" id={`{scroll ? ${scroll} : null`}>
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

export {Block1, Block2};