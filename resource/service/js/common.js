/*****************************************************************************
 * 공통 스크립트
 * author	: No Name
 *****************************************************************************/

// ajax loading bar
$(document).ready(function(){

	var loading = $('<div class="ui-loader"><div class="loader_dot"></div></div>').appendTo(document.body).hide();

	$(window).ajaxStart(function(){
		loading.show();
	}).ajaxStop(function(){
		loading.hide();
//			 setTimeout(function() {
//			        $('.ui-loader').hide();
//			 }, 3000);
	});
	
	// 폼셋팅
	$("#form1").append('<input type="hidden" name="frstRegistId" value="'+$("#loginId").val()+'" >'); // 등록자 ID 셋팅
	$("#form1").append('<input type="hidden" name="lastUpdtId"   value="'+$("#loginId").val()+'" >'); // 수정자 ID 셋팅
	$("#form2").append('<input type="hidden" name="frstRegistId" value="'+$("#loginId").val()+'" >'); // 등록자 ID 셋팅
	$("#form2").append('<input type="hidden" name="lastUpdtId"   value="'+$("#loginId").val()+'" >'); // 수정자 ID 셋팅
	
});



function getBrowser(){
    var ua = navigator.userAgent.toLowerCase();
    var browser = "";

    if (ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1){
        browser = "ie";
    }else if (ua.indexOf("opr") > -1){
        browser = "opera";
    }else if (ua.indexOf("firefox") > -1){
        browser = "firefox";
    }else if (ua.indexOf("chrome") > -1){
        browser = "chrome";
    }else if (ua.indexOf("safari") > -1){
        browser = "safari";
    }else {
        browser = "unknown";
    }
    return browser;
}

/**
 * 이메일용 한글 막기
 * @returns
 */
$(document).on("keyup", "input[emailOnly]", function() { $(this).val( $(this).val().replace(/[^a-z!@#$%^&*-_+=,.;:\"'0-9]/gi, "") ); });


/**
 * 한글만 korOnly
 */
$(document).on("keyup", "input[korOnly]", function() {
	if("ie" != getBrowser()) {
    	$(this).val( $(this).val().replace(/[^ㄱ-ㅎ|가-힣]/gi, "") );
    }
});

$(document).on("keypress", "input[korOnly]", function() {
	if("ie" == getBrowser()) {
        $(this).val($(this).val().replace(/[a-z0-9]|[\[\]{}()<>?|'~!@#$%^&*-_+=,.;:\"'\\]/g, ""));
    }
});


/**
 * 영어만 engOnly
 */
$(document).on("keyup", "input[engOnly]", function() { $(this).val( $(this).val().replace(/[^a-z|A-Z]/gi, "") ); });
$(document).on("blur", "input[engOnly]", function() { $(this).val( $(this).val().replace(/[^a-z|A-Z]/gi, "") ); });

/**
 * 숫자num
 */
$(document).on("keyup", "input[num]", function() { $(this).val( $(this).val().replace(/[^0-9]/gi, "") ); });

/**
 * 숫자 + '.' numDot
 */
$(document).on("keyup", "input[numDot]", function() { $(this).val( $(this).val().replace(/[^.0-9]/gi, "") ); });


/**
 * 숫자 + 한글 numKor
 */
$(document).on("keyup", "input[numKor]", function() { $(this).val( $(this).val().replace(/[^0-9|ㄱ-ㅎ|가-힣]/gi, "") ); });


/**
 * 숫자 + 한글 + 공백 numKorSpe
 */
$(document).on("keyup", "input[numKorSpe]", function(e) {
	if("ie" != getBrowser()) {
		$(this).val( $(this).val().replace(/[^0-9|ㄱ-ㅎ|가-힣\s]/gi, "") );
	}
});

$(document).on("keypress", "input[numKorSpe]", function() {
	if("ie" == getBrowser()) {
        $(this).val($(this).val().replace(/[\[\]{}()<>?|'~!@#$%^&*-_+=,.;:\"'\\]/g, ""));
    }
});


/**
 * 영어 + 한글 engKor  
 */
$(document).on("keyup", "input[engKor]", function() {
	if("ie" != getBrowser()) {
    	$(this).val( $(this).val().replace(/[^ㄱ-ㅎ|가-힣|a-z|A-Z]/gi, "") );
    }
});

$(document).on("keypress", "input[engKor]", function() {
	if("ie" == getBrowser()) {
        $(this).val($(this).val().replace(/[0-9]|[\[\]{}()<>?|'~!@#$%^&*-_+=,.;:\"'\\]/g, ""));
    }
});



/**
 * 영어 + 숫자 numEng
 */
$(document).on("keyup", "input[numEng]", function() { $(this).val( $(this).val().replace(/[^0-9|a-z|A-Z]/gi, "") ); });
$(document).on("blur", "input[numEng]", function() { $(this).val( $(this).val().replace(/[^0-9|a-z|A-Z]/gi, "") ); });


/**
 * 영어 + 한글 + 숫자 engKorNum
 */
$(document).on("keyup", "input[engKorNum]", function() {
	if("ie" != getBrowser()) {
		$(this).val( $(this).val().replace(/[^ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]/gi, "") );
	}
});

$(document).on("keypress", "input[engKorNum]", function() {
	if("ie" == getBrowser()) {
        $(this).val($(this).val().replace(/[\[\]{}()<>?|'~!@#$%^&*-_+=,.;:\ \"'\\]/g, ""));
    }
});


/**
 * 영어 + 한글 + 숫자 + 하이픈(-) engKorNumHpn
 */
$(document).on("keyup", "input[engKorNumHpn]", function() {
	if("ie" != getBrowser()) {
		$(this).val( $(this).val().replace(/[^ㄱ-ㅎ|가-힣|a-z|A-Z|0-9\-]/gi, "") );
	}
});

$(document).on("keypress", "input[engKorNumHpn]", function() {
	if("ie" == getBrowser()) {
        $(this).val($(this).val().replace(/[\[\]{}()<>?|'~!@#$%^&*_+=,.;:\ \"'\\]/g, ""));
    }
});

/**
 * email @ 기준 앞자리
 */
$(document).on("keyup", "input[emailPre]", function() { $(this).val( $(this).val().replace(/[^a-z|A-Z|0-9\-\_\.]/gi, "") ); });
$(document).on("blur", "input[emailPre]", function() { $(this).val( $(this).val().replace(/[^a-z|A-Z|0-9\-\_\.]/gi, "") ); });



/**
 * 용   도 : 이메일 유효성 체크를 한다.
 * @param obj
 * @return boolean
 */
function isEmail(obj) {
	if (obj == "") {
		alert("메일주소를 입력해주세요.");
		return false;
	}
	if (obj.indexOf("@") < 1) {
		alert("잘못된 이메일 형식입니다!");
		return false;
	}

	for (var j = 0; j < obj.length; j++) {
		if (obj.charCodeAt(j) > 127) {
			alert("잘못된 이메일 형식입니다!");
			return false;
		}
	}

	var checkdomain = obj.substr(obj.indexOf("@") + 1);

	if (checkdomain == "netian.com" || checkdomain == "sayclub.com"
			|| checkdomain == "sayclub.com") {
		alert("네띠앙/세이클럽/오르지오메일은  더 이상 사용하실 수 없습니다.");
		return false;
	}

	if ((obj.indexOf(".com") < 5) && (obj.indexOf(".org") < 5)
			&& (obj.indexOf(".gov") < 5) && (obj.indexOf(".net") < 5)
			&& (obj.indexOf(".mil") < 5) && (obj.indexOf(".edu") < 5)
			&& (obj.indexOf(".kr") < 4) && (obj.indexOf(".st") < 4)
			&& (obj.indexOf(".tv") < 4) && (obj.indexOf(".ro") < 4)
			&& (obj.indexOf(".arpa") < 6) && (obj.indexOf(".biz") < 5)
			&& (obj.indexOf(".aero") < 6) && (obj.indexOf(".name") < 6)
			&& (obj.indexOf(".coop") < 6) && (obj.indexOf(".info") < 6)
			&& (obj.indexOf(".pro") < 5) && (obj.indexOf(".museum") < 7)) {
		alert("잘못된 이메일 형식입니다!");
		return false;
	}
	return true;
}


//페이징 서브밋
function fnSubmitForm(page){
	$("#pageNo").val(page);
	$("#form1").submit();
}



// 시간 타이머 
function $ComTimer(){
    //prototype extend
}

//시간 타이머
$ComTimer.prototype = {
	    comSecond : ""
	    , fnCallback : function(){}
	    , timer : ""
	    , domId : ""
	    , fnTimer : function(){
	        var m = Math.floor(this.comSecond / 60) + "분 " + (this.comSecond % 60) + "초";	// 남은 시간 계산
	        this.comSecond--;					// 1초씩 감소
	        $("#timer").text(m);
	        this.domId.innerText = m;
	        if (this.comSecond < 0) {			// 시간이 종료 되었으면..
	            clearInterval(this.timer);		// 타이머 해제
	            alert("인증시간이 초과하였습니다. 다시 인증해주시기 바랍니다.");
	            $("#emailDuplicate").attr('disabled',false);
	        }
	    }
	    ,fnStop : function(){
	        clearInterval(this.timer);
	    }
}
	

// 패스워드 체크 
function fnCheckPassword(id, password){
	
	for(var i = 0; i < id.length-2; i++) {
		var re_id = new RegExp(id.substring(i, i+3));
		if(re_id.exec(password))
			return 1;
	}
	
	var check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(password);   //영문,숫자

	var check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/.test(password);  //영문,특수문자

	var check3 = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/.test(password);  //특수문자, 숫자

	// 영문 , 숫자 ,특수문자 셋중 두개 이상 조합
	if(!(check1||check2||check3)){
		return 3;
	}
	
	return 0;
}

//공통 엔터키
function fnEnterKey()
{
   if(event.keyCode == 13)
   {
  	 fn_search();
   }
}

/*  패이지 이동 함수 */
function fnPageUrl(url){
	$("#pageForm").attr("action", url);
	$("#pageForm").submit();		
}

/* 메뉴 선택시 패이지 이동 함수 */
function fnMenuPageUrl(url, menuCode, menuNm1, menuNm2){
	$('#menuNm1').val(menuNm1);
	$('#menuNm2').val(menuNm2);
	$('#menuCodePage').val(menuCode);
	$("#pageForm").attr("action", url);
	$("#pageForm").submit();		
}

