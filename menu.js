menu_sets = []
//메뉴 생성기 시작 S==============================
class Menu{
    constructor(mtitle){
        this.mtitle=mtitle;
    }
    mtitle;url;tips;
}
menu0 = new Menu("개발환경구축")//1. 개발목적/언어-선정/요구사항명세/분석 2. 구현도구/라이센스 3. 테스트도구(junit,mockobj)  4. 형상관리도구  5. 빌드도구
menu0.url = "https://dmsgur.github.io/loginsystem/"
menu0.tips = ["1.개발목적","2.개발언어선정","3.요구사항명세","4.구현도구","5.테스트도구","6.형상관리도구","7.빌드도구"]
menu1 = new Menu("개발환경구축")
menu1.url = "https://dmsgur.github.io/loginsystem/"
menu1.tips = "스프링 mybatis를 활용한 간단한 로그인 시스템"

menu_sets.push(menu0)
menu_sets.push(menu1)
