import './default/default.css';
import './ui_22.css';
import './ui_result_22.css';
import React, { Fragment } from 'react';

const header = (
    <Fragment>
        <section class="text_desc" type="desktop">
            <p>LG유플러스 LSR/UX공모전에 지원해 주신 모든 분들께 감사의 말씀을 드리며, 아래와 같이 수상작을 발표합니다.</p>
            <p>LG유플러스 공모전 수상자에게는 LSR/UX신입채용 지원자격 및 서류 면제 혜택이 부여되며,</p>
            <p>수상자 외에도 우수작인 경우 기회가 부여될 수 있으며 대상자에게는 개별적으로 연락드릴 예정입니다.</p>
        </section>
        <section class="text_desc" type="tablet_mobile">
            <p>LG유플러스 LSR/UX공모전에 지원해 주신 모든 분들께 감사의 말씀을 드리며, 아래와 같이 수상작을 발표합니다.</p>
            <p>LG유플러스 공모전 수상자에게는 LSR/UX신입채용 지원자격 및 서류 면제 혜택이 부여되며, 수상자 외에도 우수작인 경우 기회가 부여될 수 있으며 대상자에게는 개별적으로 연락드릴 예정입니다.</p>
        </section>
    </Fragment>
);

function PrizeModule_1 ({img, name, part, title}) {
    return(
        <div class="module_list module_list_upper">
            <img src={img} alt="" class="list_title"></img>
            <div class="wrapper_text_list">
                <div class="set_prize">
                    <span class="winner">{name}</span>
                    <span class="space"></span>
                    <span class="part">{part}</span>
                </div>
                <p class="title">{title}</p>
            </div>
        </div>
    );
}

const PrizeArray_1 = [
    {img: "./img/result/prize_1.png", name: "정지선님", part: "고객 인사이트", title: <Fragment>LG 유플러스의 구독 서비스,<br></br>유독의 새로운 UX 방향 제안</Fragment>},
    {img: "./img/result/prize_2.png", name: "강현석님", part: "제품 디자인", title: "Wifi router : 왜 공유기엔 항상 먼지가 쌓여 있을까"}
];

function PrizeList ({name, part, title}) {
    return(
        <div class="set_prize_list">
            <div className='set_prize'>
                <span class="winner">{name}</span>
                <span class="space"></span>
                <span class="part">{part}</span>
            </div>
            <p class="title">{title}</p>
        </div>
    );
}

const PrizeArray_2 = [
    {name: "김은빈님", part: "고객 인사이트", title: "COMe, idolplus!"},
    {name: "권순권님", part: "UI 기획 및 설계", title: "매일 넓혀가는 나의 취향, 뷰블"},
    {name: "이아롬님", part: "GUI 디자인", title: "균형잡힌 건강한 삶을 위한 헬스케어 grit"},
    {name: "이효중님", part: "UX 엔지니어링", title: "오리지널 영상 시청 경험 고도화 : 손쉬운 탐색과 몰입"},
    {name: "송화영님", part: "제품 디자인", title: "Modem + Router + Set top box : Plus Object"},
];

const PrizeArray_3 = [
    {name: "박현경님", part: "고객 인사이트", title: "나의 일상을 알아서 챙겨주는 AI라이프 비서"},
    {name: "이연재님", part: "UI 기획 및 설계", title: "Kither : 어린이를 위한 이머시브 메타버스 시어터 서비스"},
    {name: "허창민님", part: "GUI 디자인", title: "언제, 어디서든 히컵 : 비대면 혼술 화상 플랫폼 서비스"},
    {name: "강수민님", part: "UX 엔지니어링", title: "아이돌 팬들을 위한 아티스트 중심의 누구나 손쉽게 정보를 이해할 수 있는 모바일 웹 서비스"},
    {name: "이효준님", part: "제품 디자인", title: "스마트 홈 AI 호출기 : flower"},
];

function PrizeModule_2 ({img, array}) {
    return(
    <div class="module_list">
        <img src={img} alt="" class="list_title"></img>
        <div className='prize_block'>
            {array.map((e)=><PrizeList img={e.img} name={e.name} part={e.part} title={e.title}/>)}
        </div>
    </div>
    );
}

const footer = (
    <section class="footer">
        <img src="./img/icn-logo-footer.png" alt="" class="logo"></img>
    </section>
);

function Result () {
    return(
        <body class="winner_page">
            <div class="total_wrapper">
                <article class="default">
                    {header}
                    <section class="list">
                        <div class="wrapper_congrat">
                            <img src="./img/result/img_winner_paper.png" alt=""></img>
                        </div>
                        <div className='wrapper_prize_list'>
                            {PrizeArray_1.map((e)=><PrizeModule_1 img={e.img} name={e.name} part={e.part} title={e.title}/>)}
                            {<PrizeModule_2 img="./img/result/prize_3.png" array={PrizeArray_2}/>}
                            {<PrizeModule_2 img="./img/result/prize_4.png" array={PrizeArray_3}/>}
                        </div>
                    </section>
                    {footer}
                </article>
            </div>
        </body>
    );
}

export default Result;