import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
    
  


    isNumber(event, id, l) {
      var mobile = (<HTMLInputElement>document.getElementById(id));
      var data = mobile.value;
      var key = event.key;
      if (isNaN(key) || data.length > l)
        event.preventDefault();
    }
  
}
window.onload=function(){
const slidePage:HTMLInputElement=document.querySelector(".slidepage");
const firtNextBtn:HTMLInputElement=document.querySelector(".nextBtn");
const prevBtnSec:HTMLInputElement=document.querySelector(".prev-1");
const nextBtnSec:HTMLInputElement=document.querySelector(".next-1");
const prevBtnThird:HTMLInputElement=document.querySelector(".prev-2");

const submitBtn:HTMLInputElement=document.querySelector(".Submit");
const progressText=(<HTMLInputElement[]><any>document.querySelectorAll(".step p"));
const progressCheck=(<HTMLInputElement[]><any>document.querySelectorAll(".step .check"));
const bullet=(<HTMLInputElement[]><any>document.querySelectorAll(".step .bullet"));
let max=3;
let current=1;

//Next BUtton 

firtNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});



nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});

submitBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
    setTimeout(function(){
        alert("You're successfully Registered");
        location.reload();
    }, 800);
});

//Previous Button

prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});


prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});
}
