/*heavy-script.js*/

window.addEventListener("load", function() {

    console.log(`start script`);
    
    
    // js 현재 시간 정보 객체 --> Date
    let startTime = new Date().getTime();
    let delay = 6000; // 6초
    
    // 6초동안 브라우저 렌더링 과정을 블로킹 해보자
    while(new Date().getTime() < startTime + delay){
        // 6초동안 루프 동작함
    }
    
    console.log('end script....');
});