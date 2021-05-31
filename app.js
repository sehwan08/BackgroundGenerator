//사용할 태그요소 객체를 변수에 저장
//index.html에 있는 요소들에 적용, 즉 class/id 등을 변수화
var body = document.getElementById('gradient'); // id 는 get으로
var color1 = document.querySelector('.color1'); // 일반은 query 
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');

//이벤트 연결(color1 과 color2 를 섞어서 배경에 반영)
color1.addEventListener('input', grad()); //익명 function() 함수를 밑에 하나로 만들어서 사용

color2.addEventListener('input', grad());
    
//중복 함수 없애기
function grad(){
    body.style.background = "linear-gradient(to right, " +color1.value+" ," +color2.value+")";
    h3.textContent = body.style.background;
}