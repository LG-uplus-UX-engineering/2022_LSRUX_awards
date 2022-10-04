import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';

function swiperEffect () {
    var swiper_main = new Swiper('.swiper-container.banner', {
        fadeEffect: {
            crossFade: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          autoHeight: false,
          modules: [Navigation, Pagination],
      });
    
      // swiper_main.slideTo(1, false,false);
      swiper_main.on('slideChange', function (i) {
        var cupage = swiper_main.activeIndex +1;
        console.log(cupage)
        $('nav ul li').removeClass('active');
        $('nav ul li[data-mno="'+cupage+'"]').addClass('active');
    
      });
    
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash,
          val = $(hash).offset().top;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: val-150
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    
      //상단 로고 클릭 시에
      $('.logo-title').click(function(){
        window.href='/';
        return false;
      });
    
      changeDescription('UX_RESEARCH');
}

function scrollEffect () {
    $('.scrollable').click(function(){
        var num_scroll = $(this).data('scroll');
        var position_top = $('#scroll_'+num_scroll).offset().top - 50;
        
        $('html').animate({scrollTop: position_top}, 300, function(){
            console.log("animate Scroll!");
        });
    })
}

function contentEffect () {
    $('.content__b .case').click(function(){
        $('.case.active').removeClass('active');
        $(this).addClass('active');
        var data_case = $(this).data('case');
        changeDescription(data_case);
    })
}
  
function changeDescription(field_case){
    var target_convert = {
        'TITLE': $('#content_title .subtitle'),
        'TITLE_SUB': $('#content_title .description'),
        'SUBJECT': $('#content_subject .description'),
        'FORM': $('#content_form .description'),
        'AMOUNT': $('#content_amount .description'),
        'STANDARD': $('#content_standard .description'),
        'DETAIL': $('#content_detailguide .description'),
    }
    var object = data_description[field_case];
    $.each(object, function(index){
        target_convert[index].children().remove();
        $.each(object[index], function(a,b){
        if(b.SUB !== undefined){
            target_convert[index].append('<div class="text_wrapper"><p><span>'+b.NUM+'</span><span>'+b.TEXT+'</span></p><p class="sub_text">'+b.SUB+'</p></div>')
        } else {
            target_convert[index].append('<p><span>'+b.NUM+'</span><span>'+b.TEXT+'</span></p>')
        }
        }) 
    })
}
  
var data_description = {
    'UX_RESEARCH' : {
        'TITLE' : {
          0 : {NUM:'', TEXT:'고객인사이트'}
        },
        'TITLE_SUB' : {
          0 : {NUM:'', TEXT:'LG 유플러스 고객경험 CX및 UX방향'}
        },
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'[트렌드] 고객 라이프 스타일 변화에 따른 LG유플러스 고객 경험 방향 제안', SUB:'고객 경험 범위 : 사업/서비스/마케팅/커뮤니케이션 등 무관<br>고객 경험 방향 : 트렌드 및 고객 조사/분석 기반이 고객 경험 전략 방향 및 시나리오'},
        2 : {NUM:'2.', TEXT:'[접점] 통신사 고객 여정에 따른 LG유플러스 접점의 고객경험 방향 혹은 UX 방향 제안', SUB:'접점 범위 : U+기존 접점(U+매장, U+홈페이지, U+언택스토어, 당신의 U+(고객센터)등, 신규접점<br>고객 경험 방향 : 고객 여정조사/분석 기반의 접점 경험 개선 및 신규 접점 경험 전략 방향<br>UX방향 : UX 리서치 기반의 접점 서비스 UX개선 및 신규 UX 방향성'},
        3 : {NUM:'3.', TEXT:'[서비스] LG유플러스 서비스의 UX 방향 제안', SUB:'서비스 범위 : U+기존앱(U+tv, U+모바일 tv, U+스마트홈, 아이돌 플러스 등),<br>메타버스, 믹스버스, 신규 앱 서비스<br>UX 방향 : UX 리서치 기반의 서비스 UX 개선 및 신규 UX 방향'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 포함 10장 이내 (공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'리서치 설계 능력 평가 (35%)',SUB:'주어진 주제를 명확히 이해하고, 이를 해결하기에 적절한 방법으로 리서치를 설계하였는가?'},
        1 : {NUM:'2.',TEXT:'고객 행태 분석 평가 (45%)',SUB:'리서치를 실행하고 결과를 분석하는 과정이 체계적인가?<br>리서치 결과를 통해 인사이트를 도출하는 과정이 논리적이고, 도출된 인사이트가 설득력이 있는가?'},
        2 : {NUM:'3.',TEXT:'전략 수립 능력 평가 (20%)',SUB:'도출된 인사이트를 기반으로 새로운 고객 경험 및 UX 전략을 제시하였는가?<br>고객 경험 및 UX 전략을 제시하는 과정이 논리적인가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'선택한 주제를 해결하기 위해 최적의 리서치 방법을 설계/실행하고, 이를 기반으로 고객의 행동 패턴을 파악/분석함으로써 UX 전략과 방향 수립'},
        },
    },
    'UI_PLAN' : {
        'TITLE' : {
          0 : {NUM:'', TEXT:'UI 기획 및 설계'}
        },
        'TITLE_SUB' : {
          0 : {NUM:'', TEXT:''}
        },
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어 서비스 제안'},
        3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 포함 10장 이내 (UX공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'UX컨셉 도출 능력 평가 (30%)',SUB:'UX컨셉 도출과정이 논리적이며, 창의적인 접근으로 고객의 Needs를 해결해 줄 수 있는가?'},
        1 : {NUM:'2.',TEXT:'UI기획 및 설계 능력 평가 (50%)',SUB: '기본 사용성과 고객 관점이 충분히 반영되었는가?<br>정보구성요소를 체계적으로 수립하고, 논리적으로 사용자 시나리오를 도출하였는가?'},
        2 : {NUM:'3.',TEXT:'최종 산출물의 완성도 평가 (20%)',SUB:'분석 결과에 의거하여 논리적으로 최종결과물 (IA/Wireframe/flow 등)을 <br>완성도 높게 구현했는가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'고객 경험 기반으로 컨셉 방향성을 제안하여 고객 사용 시나리오가 잘 드러날 수 있도록 <br>정보 구조, 와이어프레임, 플로우 설계'},
        },
    },
    'GUI_DESIGN' : {
        'TITLE' : {
          0 : {NUM:'', TEXT:'GUI 디자인'}
        },
        'TITLE_SUB' : {
          0 : {NUM:'', TEXT:''}
        },
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어 서비스 제안'},
        3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        1 : {NUM:'②',TEXT:'mp4 동영상 (GUI선택)<span class="small_font"><span class="divider"></span>1GB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 표함 10장 이내 (UX공모전 이메일로 제출)'},
        2 : {NUM:'③',TEXT:'GUI 모션 디자인 - 동영상 5분 이내 (UX공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'시장/트렌드 분석 능력 평가(30%)',SUB:'서두로 제시된 서비스/디자인에 대한 분석이 명확한 이해를 바탕으로 작성이 되었는가?'},
        1 : {NUM:'2.',TEXT:'디자인 능력 평가 (50%)',SUB: '사용자가 편리하게 이용하는 것을 기본으로 직관적이면서, 감각적인 서비스 디자인인가?'},
        2 : {NUM:'3.',TEXT:'최종 산출물의 완성도 평가 (20%)',SUB:'디자이너로서 과제에 대한 문제점 분석과 해결안의 설득력이 있는가?<br>이를 뒷받침하는 과제 정리의 사각적 화면 구성인가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'시장/트렌드 분석을 기반으로 디자인 컨셉을 도출하고 GUI디자인 및 모션 디자인 제안'},
        },
    },
    'UX_ENGINEERING' : {
        'SUBJECT': {
        0 : {NUM:'', TEXT:'U+의 자사 서비스인 아이돌 플러스 모바일 웹 리디자인 및 프로토타입 개발'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어서비스 제안'},
        3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        1 : {NUM:'②',TEXT:'웹 개발시 코드 Zip파일 or Framer 사용 시 결과물 링크 (필수)'},
        2 : {NUM:'③',TEXT:'프로토타입 플로우 MP4 영상 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 표함 10장 이내 (UX공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'사용자 문제 분석 및 솔루션 제안 능력 평가 (20%)',SUB:'주어진 사용자 경험에서 사용성상의 문제를 논리적, 체계적으로 분석하고 이를 개선하기 위한<br>구체적인 솔루션을 제시하였는가?'},
        1 : {NUM:'2.',TEXT:'인터렉션 및 디자인 구현 능력 평가 (40%)',SUB:'리디자인으로 제시한 화면이 프로토타입에 동일하게 구현되었는가?<br>컴포넌트 간의 인터랙션이 적절하고 효과적인가?(다양한 형상, 인터랙션 구현 능력 우대)'},
        2 : {NUM:'3.',TEXT:'프로토타입 완성도 평가 (40%)',SUB:'서비스 컨셉과 아이디어에 대해 명확히 인지하고 검증할 수 있도록 구현충실도가 높은가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'제시한 UX 솔루션이 프로토타입의 플로우에 충분히 반영되었는가?<br>프로토타입이 오류 없이 작동하며, 구조적으로 개발되었는가?'},
        },
    },
    'PRODUCT_DESIGN' : {
      'SUBJECT': {
      0 : {NUM:'', TEXT:'아래 주제 중 택1 또는 2가지 주제 모두 지원 가능'},
      1 : {NUM:'1.', TEXT:'홈 IOT 제품군 신규 디자인 제안', SUB:'홈 CCTV, 가정용 컨트롤 제품, 신규 제품 제안 등'},
      2 : {NUM:'2.', TEXT:'미디어 제품군 신규 디자인 제안', SUB:'셋톱박스, 와이파이 공유기, 사운드바, 각종 미디어 디바이스, 차세대 리모트 컨트롤,<br>신규 제품 제안 등'}
      },
      'FORM': {
      0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
      },
      'AMOUNT': {
      0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
      1 : {NUM:'②',TEXT:'A3 가로사이즈 판넬4장 분량(PDF)이내로 제출 (공모전 이메일로 제출)'},
      },
      'STANDARD': {
      0 : {NUM:'1.',TEXT:'시장/트렌드 분석 평가(30%)',SUB:'서두로 제시된 서비스/디자인에 대하나 분석이 명확한 이해를 바탕으로 작성이 되었는가?'},
      1 : {NUM:'2.',TEXT:'디자인 능력평가 (50%)',SUB:'사용자가 쉽고, 편리하게 이용하는 것을 기본으로 직관적이면서, 감각적인 제품 디자인인가?'},
      2 : {NUM:'3.',TEXT:'최종 산출물의 적절성 평가 (20%)',SUB:'디자이너로서의 과제에 대한 문제점 분석과 해결안의 설득력이 있는가?<br>이를 뒷받침하는 제품 설계인가?'},
      },
      'DETAIL': {
      0 : {NUM:'',TEXT:'시장/트렌드 분석을 기반으로 디자인 컨셉을 도출하고 제품 디자인 제안'},
      },
  }
}

export {swiperEffect, scrollEffect, contentEffect, changeDescription};