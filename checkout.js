const payNow = document.querySelector(".payNow");
const conBag = document.querySelector(".congrate-banner");
const conBanner = document.querySelector(".congrate-background")

const offScreen = () =>{
    conBanner.classList.remove("active")
    conBag.classList.remove("active")
  }
const offScreeno = () =>{
  //   conBanner.classList.remove("active")
    conBag.classList.remove("active")
  }
  
  payNow.addEventListener("click", () =>{
      // var payNow = e.target
      // alert("Yo")
      conBag.classList.toggle("active")
      conBanner.classList.toggle("active")
     
      setTimeout(offScreeno, 3000)
      setTimeout(offScreen, 2900)
  })


