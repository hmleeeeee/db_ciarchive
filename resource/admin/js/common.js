/*****************************************************************************
 * 공통 스크립트
 * author	: No Name
 *****************************************************************************/


// ajax loading bar
$(document).ready(function(){
	
	// 달력 스크립트
	$.datepicker.setDefaults({
	    dateFormat: 'yy/mm/dd',
	    prevText: '이전 달',
	    nextText: '다음 달',
	    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	    showMonthAfterYear: true,
	    yearSuffix: '년'
	});

	$( ".datepicker" ).datepicker();
	
	var loading = $('<div class="ui-loader"><div class="loader_dot"></div></div>').appendTo(document.body).hide();  // ajax 공통 로딩

	$("#form1").append('<input type="hidden" name="frstRegistId" value="'+$("#adminLoginId").val()+'" >'); // 등록자 ID 셋팅
	$("#form1").append('<input type="hidden" name="lastUpdtId"   value="'+$("#adminLoginId").val()+'" >'); // 수정자 ID 셋팅
	
	
	$(window).ajaxStart(function(){
		loading.show();
	}).ajaxStop(function(){
		loading.hide();
	});
	
	
	// 체크박스 공통처리
	$('#allCheck').click( function() {
		var result = this.checked;
		$("input[name=ids]:checkbox").each(function() {
			$(this).prop("checked",result);
		});
	});

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
 * 이메일용 한글 막기
 * @returns
 */
$(document).on("keyup", "input[emailOnly]", function() { $(this).val( $(this).val().replace(/[^a-z!@#$%^&*-_+=,.;:\"'0-9]/gi, "") ); });



/**
 * 한글 막기
 * @returns
 */
$(document).on("keyup", "input[noKor]", function() { $(this).val( $(this).val().replace(/[^a-z'~!@#$%^&*-_+=,.;:\"'0-9]/gi, "") ); });



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
 * 숫자 + '-' numHyphen
 */
$(document).on("keyup", "input[numHyphen]", function() { $(this).val( $(this).val().replace(/[^-0-9]/gi, "") ); });




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



//첨부된 파일 삭제 
function fnFileDelete(var1, var2){
	var innerHtml ='<input type="hidden" name="fileDeleteList" value="'+var1+'" />';
	$(var2).parent().hide();
	$("#form1").append(innerHtml);
}



// 페이징 서브밋
function fnSubmitForm(page){
	$("#pageNo").val(page);
	$("#form1").submit();
}


//공통 엔터키
function fnEnterKey()
{
   if(event.keyCode == 13)
   {
  	 fn_search();
   }
}

// 로그아웃
function fnLogout(){
	location.href="/admin/login/DBAD010101Logout.do"
}


// 오늘 날짜 구하기
function getToday(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;    //1월이 0으로 되기때문에 +1을 함.
    var date = now.getDate();

    if((date + "").length < 2){        //2자리가 아니면 0을 붙여줌.
    	date = "0" + date;
    }
    if((month + "").length < 2){        //2자리가 아니면 0을 붙여줌.
    	month = "0" + month;
    }
    today = year+"/"+ month +"/"+ date;
    return today; 
}


// 월더하기 
function getMonthMinus(var1){
	var now = new Date();
	var month = now.getMonth(); 
	now.setMonth(month-var1);
	
	var year = now.getFullYear();
	var date = now.getDate();
	month = now.getMonth()+1;    //1월이 0으로 되기때문에 +1을 함.
    
	if((date + "").length < 2){        //2자리가 아니면 0을 붙여줌.
    	date = "0" + date;
    }        
    if((month + "").length < 2){        //2자리가 아니면 0을 붙여줌.
        month = "0" + month;
    }
    
    var today = year+"/"+month+"/"+ date;
    
    return today;
}






