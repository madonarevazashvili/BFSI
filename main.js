document.querySelector("header_Right")
let search = document.querySelector(".search")
let img=document.querySelector(".img")

img.addEventListener('click',function(){
    search.classList.toggle('toggle')
})

let section_first_btn=document.querySelector(".section_first_btn")
let section_first_inp = document.querySelectorAll(".section_first_inp")
console.log(section_first_inp)
document.addEventListener("keypress", function(){
    if (section_first_inp[0].value.length >= 6 && section_first_inp[1].value.length >= 6 ) {
        section_first_btn.removeAttribute("disabled");//შლის html-ში მინიჭებულ disabled ატრიბუტს
     section_first_btn.style.backgroundColor="red" 
    }

})
section_first_btn.addEventListener("click", function(){
    alert("You have successfully logged in")//შეტყობინებას აგდებს 
    section_first_inp[0].value=''//ასუფთავებს ინფუთებს
    section_first_inp[1].value =''
})
