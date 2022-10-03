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
        'SUBJECT': $('#content_subject .description'),
        'FORM': $('#content_form .description'),
        'AMOUNT': $('#content_amount .description'),
        'STANDARD': $('#content_standard .description'),
        'DETAIL': $('#content_detailguide .description'),
    }
    var object = data_description[field_case];
    // console.log(object);
    $.each(object, function(index){
        // console.log(index);
        // console.log(object[index]);
        target_convert[index].children().remove();
        $.each(object[index], function(a,b){
        if(index == "STANDARD"){
            target_convert[index].append('<div class="text_wrapper"><p><span>'+b.NUM+'</span><span>'+b.TEXT+'</span></p><p class="sub_text">'+b.SUB+'</p></div>')
        } else {
            target_convert[index].append('<p><span>'+b.NUM+'</span><span>'+b.TEXT+'</span></p>')
        }
        }) 
    })
}
  
var data_description = {
    'UX_RESEARCH' : {
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'[트렌드] 고객 라이프 스타일 변화에 따른 LG유플러스 고객 경험 방향 제안'},
        2 : {NUM:'2.', TEXT:'[접점] 통신사 고객 여정에 따른 LG유플러스 접점의 고객경험 방향 혹은 UX 방향 제안'},
        3 : {NUM:'3.', TEXT:'[서비스] LG유플러스 서비스의 UX 방향 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 포함 10장 이내 (공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'리서치 설계 능력 평가 (35%)',SUB:'주어진 주제를 명확히 이해하고, 이를 해결하기에 적합한 방법으로 리서치를 설계하였는가?'},
        1 : {NUM:'2.',TEXT:'고객 행태 분석 평가 (45%)',SUB:'리서치를 실행하고 결과를 분석하는 과정이 체계적인가? <br> 리서치 결과를 통해 인사이트를 도출하는 과정이 논리적이고, 도출된 인사이트가 설득력이 있는가?'},
        2 : {NUM:'3.',TEXT:'전략 수립 능력 평가 (20%)',SUB:'도출된 인사이트를 기반으로 새로운 UX전략과 방향을 제시하였는가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'선택한 주제를 해결하기 위해 최적의 리서치 방법을 설계/실행하고, 이를 기반으로 고객의 행동 패턴을 파악/분석함으로써 UX 전략과 방향 수립'},
        },
    },
    'UI_PLAN' : {
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어서비스 제안'},
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
        2 : {NUM:'3.',TEXT:'최종 산출물의 완성도 평가 (20%)',SUB:'분석 결과에 의거하여 논리적으로 최종결과물 (IA/Wireframe/flow 등)을 완성도 높게 구현했는가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'고객 경험 기반으로 컨셉 방향성을 제안하여 고객 사용 시나리오가 잘 드러날 수 있도록 정보구조, 와이어프레임, 플로우 설계'},
        },
    },
    'GUI_DESIGN' : {
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어서비스 제안'},
        3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        1 : {NUM:'②',TEXT:'mp4 동영상 (선택)<span class="small_font"><span class="divider"></span>1GB 이내</span>'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 표함 10장 이내 (UX공모전 이메일로 제출)'},
        2 : {NUM:'③',TEXT:'동영상 5분 이내 (UX공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'시장/트렌드 분석 능력 평가 (30%)',SUB:'서두로 제시된 서비스/디자인에 대한 분석이 명확한 이해를 바탕으로 작성이 되었는가?'},
        1 : {NUM:'2.',TEXT:'디자인 능력 평가 (50%)',SUB: '사용자가 편리하게 이용하는 것을 기본으로 직관적이면서 감각적인 서비스 디자인인가?'},
        2 : {NUM:'3.',TEXT:'최종 산출물 완성도 평가 (20%)',SUB:'디자이너로서 과제에 대한 문제점 분석과 해결안의 설득력이 있는가? <br>이를 뒷받침하는 과제정리의 시각적 화면 구성인가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'시장/트렌드 분석을 기반으로 디자인 컨셉을 도출하고 GUI디자인 및 모션디자인 제안'},
        },
    },
    'UX_ENGINEERING' : {
        'SUBJECT': {
        0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
        1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
        2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어서비스 제안'},
        3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
        },
        'FORM': {
        0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
        1 : {NUM:'②',TEXT:'프로토타이핑 결과물 링크 (필수)'},
        },
        'AMOUNT': {
        0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
        1 : {NUM:'②',TEXT:'표지 표함 10장 이내 (UX공모전 이메일로 제출)'},
        },
        'STANDARD': {
        0 : {NUM:'1.',TEXT:'주제 분석 능력 평가 (20%)',SUB:'주어진 주제를 분석하고, 이를 구현하기에 적합한 방법으로 프로토타입이 설계되었는가?'},
        1 : {NUM:'2.',TEXT:'UX프로토타이핑 제작 능력 평가 (50%)',SUB:'고객의 Needs가 검증될 수 있도록 적합도와 사용성이 높은 UX프로토타이핑이 구현되었는가?'},
        2 : {NUM:'3.',TEXT:'최종 산출물의 완성도 평가 (30%)',SUB:'서비스 컨셉과 아이디어에 대해 명확히 인지하고 검증할 수 있도록 구현충실도가 높은가?'},
        },
        'DETAIL': {
        0 : {NUM:'',TEXT:'선택한 주제가 잘 보여질 수 있도록 프로토타이핑 툴을 활용하여 서비스를 실제 동작하는 구현물로 제작'},
        },
    },
    'PRODUCT DESIGN' : {
      'SUBJECT': {
      0 : {NUM:'', TEXT:'아래 3개 공모 주제 중 택1 하여 참가'},
      1 : {NUM:'1.', TEXT:'코로나 이후의 라이프 스타일 변화에 따른 신규서비스 제안'},
      2 : {NUM:'2.', TEXT:'미디어/OTT 시장 변화에 따른 미디어서비스 제안'},
      3 : {NUM:'3.', TEXT:'메타버스/믹스버스 트렌드를 기반으로 한 신규서비스 제안'},
      },
      'FORM': {
      0 : {NUM:'①',TEXT:'PDF문서 (필수)<span class="small_font"><span class="divider"></span>30MB 이내</span>'},
      1 : {NUM:'②',TEXT:'프로토타이핑 결과물 링크 (필수)'},
      },
      'AMOUNT': {
      0 : {NUM:'①',TEXT:'지원서 접수 (LG Careers 사이트 제출)'},
      1 : {NUM:'②',TEXT:'표지 표함 10장 이내 (UX공모전 이메일로 제출)'},
      },
      'STANDARD': {
      0 : {NUM:'1.',TEXT:'주제 분석 능력 평가 (20%)',SUB:'주어진 주제를 분석하고, 이를 구현하기에 적합한 방법으로 프로토타입이 설계되었는가?'},
      1 : {NUM:'2.',TEXT:'UX프로토타이핑 제작 능력 평가 (50%)',SUB:'고객의 Needs가 검증될 수 있도록 적합도와 사용성이 높은 UX프로토타이핑이 구현되었는가?'},
      2 : {NUM:'3.',TEXT:'최종 산출물의 완성도 평가 (30%)',SUB:'서비스 컨셉과 아이디어에 대해 명확히 인지하고 검증할 수 있도록 구현충실도가 높은가?'},
      },
      'DETAIL': {
      0 : {NUM:'',TEXT:'선택한 주제가 잘 보여질 수 있도록 프로토타이핑 툴을 활용하여 서비스를 실제 동작하는 구현물로 제작'},
      },
  }
}

export {swiperEffect, scrollEffect, contentEffect, changeDescription};