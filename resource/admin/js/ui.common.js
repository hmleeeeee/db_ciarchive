;(function(win, doc){
    'use strict';

	$plugins.mainNavi = {
        appendNavi: function() {
            $("#inc_navi").load("/html/admin/include_navi.html", function(){
                $plugins.mymenu.menuSet();
            });
        }
    };

    $plugins.menuData = [
        {
            "num": 1,
            "name": "계열사/협력사 관리",
            "sub": [
                { "name": "계열사/협력사 관리", "url": "/html/admin/DBAD020101.html" }
            ]
        },
        {
            "num": 2,
            "name": "회원관리",
            "sub": [
                { "name": "회원계정 관리", "url": "/html/admin/DBAD030101.html" },
                { "name": "계정신청 현황", "url": "/html/admin/DBAD030201.html" },
                { "name": "신청반려 현황", "url": "/html/admin/DBAD030301.html" }
            ]
        },
        {
            "num": 3,
            "name": "CI Guide 관리",
            "sub": [
                { "name": "가이드메뉴 관리", "url": "/html/admin/DBAD040101.html" },
                { "name": "가이드페이지 관리", "url": "/html/admin/DBAD040201.html" }
            ]
        },
        {
            "num": 4,
            "name": "문의 관리",
            "sub": [
                { "name": "CI 적용 문의", "url": "/html/admin/DBAD050301.html" },
                { "name": "상표 사용 관련 문의", "url": "/html/admin/DBAD050101.html" },
                { "name": "신규 상표 출원 문의", "url": "/html/admin/DBAD050201.html" }
            ]
        },
        {
            "num": 5,
            "name": "상표권 침해신고 관리",
            "sub": [
                { "name": "상표권 침해신고 문의", "url": "/html/admin/DBAD060101.html" }
            ]
        },
        {
            "num": 6,
            "name": "게시판 관리",
            "sub": [
                { "name": "게시판", "url": "/html/admin/DBAD070101.html" }
            ]
        },
        {
            "num": 7,
            "name": "관리자 계정관리",
            "sub": [
                { "name": "관리자 계정관리", "url": "/html/admin/DBAD080101.html" }
            ]
        },
        {
            "num": 8,
            "name": "이용/통계 현황",
            "sub": [
                { "name": "접속자 이용현황", "url": "/html/admin/DBAD090101.html" },
                { "name": "CI가이드 이용현황", "url": "/html/admin/DBAD090201.html" },
                { "name": "문의/신고 이용현황", "url": "/html/admin/DBAD090301.html" }
            ]
        },
    ];
    
    $plugins.mymenu = {
        d1: null,
        d2: null,
        target: null,
        className: 'active',
        ajaxData: null,
        menuSet: function(){
            var obj = this,
                data,
                menuHtml = '';
            data = obj.ajaxData = $plugins.menuData;

            //JSON 전체 데이터 조회
            for(var i=0, len1=data.length; i<len1; i++){
                menuHtml += '<li data-mymenu="'+ data[i].num +'">' +
                            '    <a href="#" class="links_sub">'+ data[i].name +'</a>' +
                            '    <ul>';
                
                for(var j=0, len2=data[i].sub.length; j<len2; j++){
                    menuHtml += '        <li><a href="'+ data[i].sub[j].url +'">'+ data[i].sub[j].name +'</a></li>';
                }
                
                menuHtml += '    </ul></li>';
            }

            $('#menuData').empty().append('<ul>'+menuHtml+'</ul>');

            
            //활성화 설정
            obj.target = $('.admin_navigation > ul > li');
            obj.target.each(function(i){
                if(obj.target.eq(i).attr('data-mymenu') == obj.d1) {
                    obj.target.eq(i).addClass(obj.className);
                    obj.target.eq(i).find('li > a').eq(obj.d2-1).addClass(obj.className);
                }
            });

            //접기 기능
            obj.menuToggle.init();
        },
        menuToggle: {
            gClickElement: null,
            gFoldingElement: null,
            clickEvent: function(t) {
                t.off().on('click', function(e) {
                    e.preventDefault();
                    $(this).parent().toggleClass('active');
                })
            },
            init: function() {
                var o = this;
                o.gClickElement = $('.admin_navigation a.links_sub');
                o.gFoldingElement = o.gClickElement.next();

                // click event
                o.clickEvent(o.gClickElement);
            }
        },
        init: function(n1, n2){
            var obj = this;
            obj.d1 = n1;
            obj.d2 = n2;
        }
    }

    $plugins.modal = {
        gTarget: null,
        gId: null,
        gModal: null,
        hideModal: function() {
            var o = this;
            o.gModal.animate({
                'top': '35%',
                'opacity': 0
            }, 200, function() {
                $('#'+o.gId+'').removeClass('active');
            });
        },
        showModal: function() {
            var o = this;
            $('#'+o.gId+'').addClass('active');
            o.gModal.animate({
                'top': '40%',
                'opacity': 1
            }, 200);
        },
        init: function() {
            var o = this;
            o.gTarget = $('.ui-modal');
            o.gTarget.off().on('click', function(e) {
                e.preventDefault();
                o.gId = this.href.split('#')[1];
                o.gModal = $('#'+o.gId+'').find('.ui-modal-content');
                o.showModal();
                $('#'+o.gId+'').find('.btn-close').off().on('click', function() {
                    o.hideModal();
                });
            });
            
        }
    }

    // 실행
    $(doc).ready(function() {
        $plugins.mainNavi.appendNavi();
        $plugins.modal.init();
    });

})(window, document);