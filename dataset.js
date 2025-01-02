//데이터 17KPamLcwRpk7yZVpjMqqaumfIBL-8R8k
data_sets = []

//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
var data_sets=[]
class DataSet{
	constructor(sub_title){this.sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.append(content)}
	set_img(url){this.sub_img.append(url)}
	set_fill(ufill){this.user_fill=ufill}
	 
}
let d1 = new DataSet("개발환경구축")//메인 타이틀
d1.set_content("개발목적을 작성합니다.")//서브 타이틀
d1.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d1.set_content("개발언어선정을 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d1.set_content("요구사항명세를 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d1.set_content("구현도구를 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d1.set_content("테스트도구를 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d1.set_content("형상관리도구를 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d1.set_content("빌드도구를 작성합니다.")
d1.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")

let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d2.set_content("테스트케이스를 작성합니다.")
d2.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d2.set_content("단위테스트를 작성합니다.")
d2.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")

let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d3.set_content("회원로그인구현")
d3.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d3.set_content("회원리스트연동")
d3.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d3.set_content("테스트케이스 작성")
d3.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
d3.set_content("결과보고서 작성")

let d4 = new DataSet("배치프로그램구현")//메인타이틀
d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img("1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY")//스냅샷
d4.set_content("배치프로그램테스트 구현")
d4.set_img("1pTmtTsFhCBLjsOIIDIBtx2MonQiwPc6h")
