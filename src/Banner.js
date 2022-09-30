import React, { Fragment } from 'react';

function Slide ({type, url_img, url_interview}) {
    return (
        <div className={`img_wrapper swiper-slide ${type}`}>
            <img src={`${url_img}`} />
            {url_interview ? <a className="btn-interview" href={`${url_interview}`} target="_blank"><span>인터뷰 보러가기</span></a> : null}
        </div>
    );
}

const SlidArray = [
    {type : 'type0', url_img : "img/img-banner-main_2022.png"},
    {type : 'type1', url_img : "img/img-banner-01_2021.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=382"},
    {type : 'type2', url_img : "img/img-banner-03_2021.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
    {type : 'type3', url_img : "img/img-banner-02_2021.png", url_interview : "http://meet.lg.com/learn/introducejob/IntroduceJobDetail.rmi?requestIntroId=383"},
]

function Banner () {
    return (
    <Fragment>
        <section className="banner banner_mobile">
            <div className="img_wrapper">
                <img src="/img/img_banner_mobile.png" alt="" className="img_mobile_banner"></img>
            </div>
            <div className="mobile_message">
                <span>공모전은 PC에서만 지원 가능합니다.</span>
            </div>
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
export {Banner};
