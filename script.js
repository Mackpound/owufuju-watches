// 'use strict';
const cards = document.querySelectorAll(".cards")


const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: 0.2,
})

cards.forEach(card =>{
    observer.observe(card)
})
const pop = document.querySelectorAll(".pops")


const observerPop = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("shown", entry.isIntersecting)
        if(entry.isIntersecting) observerPop.unobserve(entry.target)
    })
},
{
    threshold: 0.2,
})

pop.forEach(pops =>{
    observer.observe(pops)
})


const caruselHeader = document.querySelectorAll(".watch-container")
const watchFrame = document.querySelector(".watch-frame-wrapper")
caruselHeader.forEach(carusel =>{
    const watches = carusel.querySelectorAll(".watch-img")
    const buttonHtml = Array.from(watches, () =>{
        return `<span class="carusel-btn"></span>`;
    })
    const textHtml = Array.from(watches, () =>{
        return ` <h3 class="watch-frame-text"></h3>`;
    })

    watchFrame.insertAdjacentHTML("beforeend", `
    <div class="carusel-btn-wraapper">
       ${buttonHtml.join("")}
    </div>
    <div class="text-content">
       ${textHtml.join("")}
    </div>
    `)

    const textWatch = document.querySelectorAll(".watch-frame-text")
    const buttons = document.querySelectorAll(".carusel-btn")
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // unselect
            watches.forEach(watch => watch.classList.remove("active"))
            buttons.forEach(button => button.classList.remove("active"))
            textWatch.forEach(text => text.classList.remove("active"))

            watches[i].classList.add("active")
            button.classList.add("active")
            textWatch[i].classList.add("active")
        })

    })
    watches[0].classList.add("active")
    buttons[0].classList.add("active")
    textWatch[0].classList.add("active")

    // setInterval(() =>{
    //     watches.forEach(watch => watch.classList.remove("active"))
    //         buttons.forEach(button => button.classList.remove("active"))
    //         textWatch.forEach(text => text.classList.remove("active"))

    //         watches[2].classList.add("active")
    //         buttons[2].classList.add("active")
    //         textWatch[2].classList.add("active")
    // }, 2000)
    
})

let cS = document.querySelector("#search-toggle")
let cS3 = document.querySelector(".search-bar-3")

 cS.addEventListener("click", function(){
    cS3.classList.toggle("active")
    navList.classList.remove("active")
 })


 let menuFill = document.querySelector(".menu-fill")
 let navList = document.querySelector(".nav-list")
  menuFill.addEventListener("click", () => {
    navList.classList.toggle("active")
    cS3.classList.remove("active")
  })

  var sectionIndex = 0;
  var direction;
  const indicatorParents = document.querySelector(".carusel-btn-wraapper-home");
  const indicator = document.querySelectorAll(".carusel-btn");
const carusel = document.querySelector(".main-images")
const slider = document.querySelector("[data-multi-step]")
const sliderImg = [...slider.querySelectorAll("[data-step]")]


let currentStep =
sliderImg.findIndex(step => {
       return step.classList.contains("visible")
 })

 if (currentStep < 0){
  currentStep = 0
  showCurrentSteps()
  updateProgress()
}


// slider.addEventListener("transitionend", function(){
  
//   // if(direction == -1){
//   //   slider.appendChild(slider.firstElementChild)
//   // }else if(direction == 1){
//   //   slider.prepend(slider.lastElementChild)

//   // }

//   // slider.style.transition = "none"
//   // // slider.style.opacity = "1"
//   // slider.style.transform = "translate(0)";
//   // setTimeout(function() {
//   //   // slider.style.opacity = "0"
//   //   slider.style.transition = "all 0.4s";
//   // })

// })
// var sectionIndex = 0;

document.querySelectorAll(".carusel-btn-wraapper-home span").forEach(function(indicator, index){
  indicator.addEventListener("click", function(){
    direction = 1;
    sectionIndex = index;
    // document.querySelector(".carusel-btn-wraapper-home .active").classList.remove("active");
    // indicator.classList.add("active")
    // carusel.style.justifyContent = "flex-start";
    // slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
    currentStep += direction;
    if(currentStep > 3){
      currentStep = 0;
    }
    showCurrentSteps()
    updateProgress()
  })
})


function mySlider(){
  direction = 1;
  // sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
  // document.querySelector(".carusel-btn-wraapper-home .active").classList.remove("active");
  // indicatorParents.children[sectionIndex].classList.add("active")
  // carusel.style.justifyContent = "flex-start";
  // slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)'
  currentStep += direction;
  if(currentStep > 3){
    currentStep = 0;
  }
  showCurrentSteps()
  updateProgress()
}
setInterval(mySlider, 7000)
  

function showCurrentSteps(){
  sliderImg.forEach((steps, index) =>{
  steps.classList.toggle("visible", index === currentStep)
  })
}

function updateProgress(){
  indicator.forEach((frame, index) => {
          if(index < currentStep + 1){
                  sliderImg.forEach(frame => frame.classList.remove("active"))
                    document.querySelector(".carusel-btn-wraapper-home .active").classList.remove("active");
                  frame.classList.add("active")
          }else{
                  frame.classList.remove("active")
          }
  })
}

 
const playVideo = document.querySelector("#play-vid")
const video = document.querySelector("#video-watch")
const showVideo = document.querySelector(".video-container")
const quitVideo = document.querySelector(".quite-vid")

playVideo.addEventListener("click", () => {
  showVideo.classList.add("active")
  video.play()
})

quitVideo.addEventListener("click", () => {
  video.pause()
  video.currentTime = 0;
  showVideo.classList.remove("active")
})