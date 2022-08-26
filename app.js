const button = document.querySelector(".arrow")
const para = document.querySelector(".para")
const questions = document.querySelectorAll(".question")
const img = document.querySelector(".img")


questions.forEach(function(question) {

 const btn = question.querySelector(".arrow")
 btn.addEventListener("click",function(){
  questions.forEach(function(item){
   if (item!= question){
    item.classList.remove("show")
    item.classList.remove("bold")
    item.classList.remove("rotate")
   }
  })
  question.classList.toggle("show")
  question.classList.toggle("rotate")
  question.classList.toggle("bold")

   
 })
})

// while(window.innerWidth<576){
//  console.log("heheheh")
//  img.innerHTML = `<img src="./images/illustration-woman-online-mobile.svg" alt="">`
// }

// button.addEventListener("click",function(){
//   console.log("hhaah")
//   para.classList.toggle("show")
//  })