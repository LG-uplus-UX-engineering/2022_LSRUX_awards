import React, { Fragment } from 'react';

function ContentStyle () {
    return (
        <div className="content_wrapper">
            <div className="title noto_sans">{title}</div>
            <div className="desc">
                <p>8월 30일(월) 부터 9월 22일(수) 23:00시까지</p>
            </div>
        </div>
    );
}

function BlockA () {
    return (
        <section className="content content__a">
            <div className="content_wrapper">
                <div className="title noto_sans">모집기간</div>
                <div className="desc">
                    <p>8월 30일(월) 부터 9월 22일(수) 23:00시까지</p>
                </div>
            </div>
            <div className="content_wrapper">
                <div className="title noto_sans">모집대상</div>
                <div className="desc">
                    <p><span>-</span><span>4년제 대학 기준 2022년 2월 이전 졸업예정 또는 경력 2년 미만의 기 졸업자 (전공무관)</span></p>
                    <p><span>-</span><span>LG유플러스 '21년 하반기 UX신입사원 채용 전형 참석 가능자</span></p>
                    <p><span>-</span><span>2022년 1월 입사 가능자</span></p>
                </div>
            </div>
            <div className="content_wrapper" id="scroll_1">
                <div className="title noto_sans">공모분야</div>
                <div className="desc">
                    <p><span>-</span><span>단체 참가는 불가하며, 개인만 참가 가능합니다.</span> </p>
                    <p><span>-</span><span>지원자 당 한 분야, 한 작품 지원만 가능합니다.</span></p>
                    <p><span>-</span><span>타 공모전 수상작은 출품 불가합니다.</span></p>
                    <p><span>-</span><span>본 공모전 참여 시 '21년 하반기 신입채용 타 공고에 중복지원이 불가합니다.</span></p>
                </div>
            </div>
        </section>
    );
}