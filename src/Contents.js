import React, { Fragment } from 'react';

function PutContent ({content}) {
    return (
        <p><span>-</span><span>{content}</span></p>
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
        {<PutContent content={'4년제 대학 기준 2023년 2월 이전 졸업예정 또는 경력 2년 미만의 기 졸업자 (전공무관)'}/>}
        {<PutContent content={'LG유플러스 ‘23년 LSR/UX신입사원 채용 전형 참석 가능자'}/>}
        {<PutContent content={'2023년 2월 입사 가능자'}/>}
    </Fragment>},
    {title: '공모분야', scroll: 'scroll_1', desc:
    <Fragment>
        {<PutContent content={'단체 참가는 불가하며, 개인만 참가 가능합니다.'}/>}
        {<PutContent content={'지원자 당 한 분야, 한 작품 지원만 가능합니다.'}/>}
        {<PutContent content={'타 공모전 수상작은 출품 불가합니다.'}/>}
        {<PutContent content={'본 공모전 참여 시 ‘23년 상반기 신입채용 타 공고에 중복지원이 불가합니다.'}/>}
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
            <div className={`date noto_sans ${final ? final : ''}`}><span className="noto_sans">{date}</span></div>
            <div className="text noto_sans">{content}</div>
        </div>
    );
}

const ContentArray5 = [
    {date: '11월 4주차', content:'수상작 발표'},
    {date: '11월 4주차', content:'시상식', line:'step_line'},
    {date: '12월 중', content:'인적성검사 & AI영상 면접', line:'step_line'},
    {date: '12월 중', content:'실무 면접', line:'step_line'},
    {date: '1월 (4주간)', content:'인턴십', line:'step_line'},
    {date: '2월 중', content:'최종 면접', line:'step_line'},
    {date: '2월 중', content:'입사', line:'step_line', final:'date_final'}
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

export {Block1, Block2, Block3, Block4, Block5};