// window.onscroll = function() {myFunction()};

// var wrappy = document.getElementById("wrappy");

// var sticky = wrappy.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     wrappy.classList.add("sticky")
//   } else {
//     wrappy.classList.remove("sticky");
//   }
// }
let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
    });
}

