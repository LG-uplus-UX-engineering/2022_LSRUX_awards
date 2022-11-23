import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

function GnbBtn ({index, label}) {
    return (
        <li className="scrollable" data-scroll={index}>{label}</li>
    );
}

const GnbArray = [
    {index : '1', label : '공모 분야'},
    {index : '2', label : '수상 특전'},
    {index : '3', label : '진행 절차'},
    {index : '4', label : 'QnA'}
];

function Header () {
    return(
        <section className="gnb">
            <div className="gnb_wrapper">
                    <img className="logo-title" src="/img/logo.png" alt=""></img>
                <ul>
                    {GnbArray.map((element)=>(<GnbBtn index={element.index} label={element.label}/>))}
                </ul>
            </div>
        </section>
    );
};

function Slide ({type, url_img, url_interview}) {
    return (
        <div className={`img_wrapper swiper-slide ${type}`}>
            <img src={`${url_img}`} />
            {/* {url_interview ? <a className="btn-interview" href={`${url_interview}`} target="_blank"><span className='btn-interview-text'>인터뷰 보러가기</span></a> : null} */}
        </div>
    );
}

const SlidArray = [
    {type : 'type0', url_img : "img/img-banner-main_2022.png"},
    {type : 'type1', url_img : "img/interview/img_banner_01.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=382"},
    {type : 'type2', url_img : "img/interview/img_banner_02.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type2', url_img : "img/interview/img_banner_03.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type2', url_img : "img/interview/img_banner_04.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type1', url_img : "img/interview/img_banner_05.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type2', url_img : "img/interview/img_banner_06.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type2', url_img : "img/interview/img_banner_07.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type2', url_img : "img/interview/img_banner_08.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type1', url_img : "img/interview/img_banner_09.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"}
]

const MobileApply = (
    <div className="mobile_message">
        {/* <span>공모전은 PC에서만 지원 가능합니다.</span> */}
        <span>마감된 공고입니다.</span>
    </div>
);

function Banner () {
    return (
    <Fragment>
        <section className="banner banner_mobile">
            <div className="img_wrapper">
                <img src="/img/img_banner_mobile.png" alt="" className="img_mobile_banner"></img>
            </div>
            {MobileApply}
        </section>
        <section className="banner swiper-container">
            <div className="swiper-wrapper">
                {SlidArray.map((e)=><Slide type={e.type} url_img={e.url_img} url_interview={e.url_interview}/>)}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </section>
    </Fragment>
    );
}

function ResultPopup () {
    return (
    <div class="total_wrapper_popup">
        <div className="result_popup">
            <img className="popup_img" src="./img/result/result_popup.svg" alt=""></img>
            <img className="result_popup_bubble" src="./img/result/result_bubble.svg" alt=""></img> 
            <Link to="/result">
                <button class="btn_winner_chk">수상작 확인하기</button>            
            </Link>
        </div>
    </div> 
    );
};

export {Header, Banner, MobileApply, ResultPopup};
