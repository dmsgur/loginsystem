//데이터 17KPamLcwRpk7yZVpjMqqaumfIBL-8R8k
data_sets = []

//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title){console.log("생성호출");this.sub_title}
	sub_title=""
	user_fill=""
	sub_content=[]
	sub_img=[]
	imgtitle=[]
	imglog=[]
	set_content(content){this.sub_content.push(content)}
	set_img(url){this.sub_img.push(url)}
	set_imgtitle(imgtitle){this.imgtitle.push(imgtitle)}
	set_imglog(imglog){this.imglog.push(imglog)}
	set_fill(ufill){this.user_fill=ufill}
	 
}
// menu1. =============================================================
let d1 = new DataSet("개발환경구축")//메인 타이틀
d1.set_content("개발목적을 작성합니다.")//서브 타이틀
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 설명

d1.set_content("개발언어선정을 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_content("요구사항명세를 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_content("구현도구를 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_content("테스트도구를 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_content("형상관리도구를 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_content("빌드도구를 작성합니다.")
d1.set_imgtitle("이미지 타이틀")//이미지타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_imgtitle("이미지 타이틀")//이미지타이틀
d2.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d2.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d2.set_content("테스트케이스를 작성합니다.")
d2.set_imgtitle("이미지 타이틀")//이미지타이틀
d2.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d2.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d2.set_content("단위테스트를 작성합니다.")
d2.set_imgtitle("이미지 타이틀")//이미지타이틀
d2.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d2.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d1.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_content("회원로그인구현")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_content("회원리스트연동")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_content("테스트케이스 작성")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_content("결과보고서 작성")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술

d4.set_content("배치프로그램테스트 구현")
d3.set_imgtitle("이미지 타이틀")//이미지타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_imglog("이미지에 대한 간략한 설명 서술")//이미지 서술
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)