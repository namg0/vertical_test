// <1단계 플러그인 적용하기>
// window > document 윈도우가 더 크다. 상위에 있음
window.addEventListener("load",()=>{
// load 웹사이트를 윈도우에 보여주는 순간
    const grid = new Isotope("section",{
        // section은 배치할 요소들을 감싼 부모요소명(id나 class면 #, .앞에 붙이면 됨)
        itemSelector : "article", 
        // 배치할 요소명
        columnWidth : "article",
        // 너비값 구할 요소, 플러그인에서 알아서 높이값을 주기때문에 높이값은 주면 안됨
        transionDuration : "0.5s"
        // 화면 재배치시 요소가 움직이는 속도

        
    })

    // <2단계 정렬 기능 구현>
    const btns = document.querySelectorAll("main ul li");

    for(let el of btns){
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        const sort = e.currentTarget.querySelector("a").getAttribute("href");
        //  클릭한 버튼의 a태그에서 href속성값을 변수로 저장

        grid.arrange({
            filter : sort 
        });

        for(let ele of btns){
            ele.classList.remove("on");
        }
        // 모든 버튼을 반복을 돌면서 순간적으로 비활성화

        e.currentTarget.classList.add("on");
        // 클릭한 그 대상의 버튼만 활성화
        })
    }    
});



