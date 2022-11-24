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
                    <span class="rank">{part}</span>
                </div>
                <p class="title">{title}</p>
            </div>
        </div>
    );
}

function PrizeModule_2 ({name, part, title}) {
    return(
        <div class="set_prize_list">
            <div className='set_prize'>
                <span class="winner">{name}</span>
                <span class="space"></span>
                <span class="rank">{part}</span>
            </div>
            <p class="title">{title}</p>
        </div>
    );
}

const PrizeArray_1 = [
    {img: "./img/result/prize_1.png", name: "김유플님", part: "UI기획 및 설계", title: "출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름"},
    {img: "./img/result/prize_2.png", name: "김유플님", part: "제품 디자인", title: "출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름출품이름"}
];

const PrizeArray_2 = [
    {name: "김유플님", part: "UX엔지니어링", title: "출품이름출품이름출품이름출품이름"},
    {name: "김유플님", part: "제품 디자인", title: "출품이름출품이름출품이름출품이름출품이름출품"},
    {name: "김유플님", part: "GUI 디자인", title: "출품이름출품이름출품이름출품이름"},
    {name: "김유플님", part: "UI 기획 및 설계", title: "출품이름출품이름출품이름출품이름출품이름출품"},
    {name: "김유플님", part: "고객 인사이트", title: "출품이름출품이름출품이름출품이름출품이름출품"},
];

const PrizeArray_3 = [
    {name: "김유플님", part: "UX엔지니어링", title: "출품이름출품이름출품이름출품이름"},
    {name: "김유플님", part: "제품 디자인", title: "출품이름출품이름출품이름출품이름출품이름출품"},
    {name: "김유플님", part: "GUI 디자인", title: "출품이름출품이름출품이름출품이름"},
    {name: "김유플님", part: "UI 기획 및 설계", title: "출품이름출품이름출품이름출품이름출품이름출품"},
    {name: "김유플님", part: "고객 인사이트", title: "출품이름출품이름출품이름출품이름출품이름출품"},
];

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
                            <img src="./img/result/img_winner_paper.svg" alt=""></img>
                        </div>
                        <div className='wrapper_prize_list'>
                            {PrizeArray_1.map((e)=><PrizeModule_1 img={e.img} name={e.name} part={e.part} title={e.title}/>)}
                            <div class="module_list">
                                <img src="./img/result/prize_3.png" alt="" class="list_title"></img>
                                <div className='prize_block'>
                                    {PrizeArray_2.map((e)=><PrizeModule_2 img={e.img} name={e.name} part={e.part} title={e.title}/>)}
                                </div>
                            </div>
                            <div class="module_list">
                                <img src="./img/result/prize_4.png" alt="" class="list_title"></img>
                                <div className='prize_block'>
                                    {PrizeArray_3.map((e)=><PrizeModule_2 img={e.img} name={e.name} part={e.part} title={e.title}/>)}
                                </div>
                            </div>                            
                        </div>
                    </section>
                    {footer}
                </article>
            </div>
        </body>
    );
}

export default Result;