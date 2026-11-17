function openNav(){
  document.querySelector('body').classList.toggle('mOpen')
}

// 모바일 시 메뉴를 클릭하면 튀어나왔던 슬라이더를 다시 들어가게
const btns = document.querySelectorAll('nav a')
btns.forEach(function(btn){
  btn.addEventListener('click',function(){
    openNav()
  })
})