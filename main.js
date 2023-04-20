// show And Hide nav 

let ul =document.querySelector("ul");
let menu =document.querySelector("header .menu");
let exist =document.querySelector("header .false");

menu.addEventListener("click",()=>{
    ul.classList.add("show")
    menu.style.display ="none"
    exist.style.display ="block"
})

exist.addEventListener("click",()=>{
    ul.classList.remove("show")
    exist.style.display ="none"
    menu.style.display ="block"
})

// move active class

let li =document.querySelectorAll("ul li a");

li.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        li.forEach((el)=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})

// swiper Landing Home page

var swiper = new Swiper(".containar", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  loop:true,
  });



// Search for favourate food

let inpSearch = document.querySelector(".search")
let searchBtn = document.querySelector(".search-btn")
let containerMeals = document.querySelector(".cards-Search")
let listSearch = document.querySelector(".list")

searchBtn.addEventListener("click",()=>{
     FechApi(inpSearch.value.trim())
})

function FechApi(Meal){
    let api =`https://www.themealdb.com/api/json/v1/1/search.php?s=${Meal}`
    fetch(api).then((res)=>res.json()).then((result)=>{
      console.log(result)
        containerMeals.innerHTML ="";
        for(let i = 0 ;i<result.meals.length ;i++){
        containerMeals.innerHTML +=
        `
        <div class="card-Search">
        <div class="image">
          <img src="${result.meals[i].strMealThumb}" alt="">
        </div>
        <div class="info-card">
          <div class="title-card">${result.meals[i].strMeal}</div>
          <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae voluptatem ex
               quisquam
              </p>
          <div class="buy">
              <div class="btn">Details</div>
              <div class="Price">$12.99</div>
          </div>
        </div>
      </div>
        `
        }
    })
}





