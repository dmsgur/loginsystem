menu_sets = []
//메뉴 생성기 시작 S==============================
class Menu{
    constructor(mtitle){
        this.mtitle=mtitle;
    }
    mtitle;url;tips;
}
menu0 = new Menu("로그인시스템")
menu0.url = "https://dmsgur.github.io/loginsystem/"
menu0.tips = "스프링 mybatis를 활용한 간단한 로그인 시스템"


menu_sets.push(menu0)

