let question1Ibtn = document.getElementById("first-btn");
let question1Text = document.querySelector(".question1-text");

let question2 = document.getElementById("contant-question2");
let question2Ibtn = document.getElementById("second-btn");
let question2Text = document.querySelector(".question2-text");

let question3 = document.getElementById("contant-question3");
let question3Ibtn = document.getElementById("question3Ibtn");
let question3Text = document.querySelector(".question3-text");

let question4 = document.getElementById("contant-question4");
let question4Ibtn = document.getElementById("question4Ibtn");
let question4Text = document.querySelector(".question4-text");

let question5 = document.getElementById("contant-question5");
let question5Ibtn = document.getElementById("question5Ibtn");
let question5Text = document.querySelector(".question5-text");

let question6 = document.getElementById("contant-question6");
let question6Ibtn = document.getElementById("question6Ibtn");
let question6Text = document.querySelector("#question6-text");

let contentPara=document.getElementById("contant-para")
let Emailbtn=document.getElementById("Email-btn")
let horizontalLine=document.getElementById("horizentel-line")
let footerSection=document.getElementById("footer-section")
let contactNumber=document.getElementById("contact-number")

let sixSection=document.getElementById("six-section-div")

let heading3=document.getElementById("heading3")

let linkline1=document.getElementById("link-line-1");
let linkline2=document.getElementById("link-line-2");
let linkline3=document.getElementById("link-line-3");
let linkline4=document.getElementById("link-line-4");
let footerSelection=document.getElementById("footer-selection")
let linkline5=document.getElementById("link-line-5");


//==============================111111111111111111111111111111=======================================
let a = true;

question1Ibtn.addEventListener("click", () => {
  if (a) {
    question1Text.style.display = "block";
    question1Ibtn.style.transform = "rotate(45deg)";
    question2.style.top = "230.5vw";
    question3.style.top = "236.5vw";
    question4.style.top = "242.5vw";
    question5.style.top = "248.5vw";
    question6.style.top="254.5vw";
    question2Text.style.display = "none";
    question3Text.style.display = "none";
    question4Text.style.display = "none";
    question5Text.style.display = "none";
    question2Ibtn.style.transform = "rotate(0deg)";
    question3Ibtn.style.transform = "rotate(0deg)";
    question4Ibtn.style.transform = "rotate(0deg)";
    question5Ibtn.style.transform = "rotate(0deg)";
    question1Text.style.transition = "all 0.3s";

    contentPara.style.top = "263vw";
    Emailbtn.style.top = "266vw";

    horizontalLine.style.top="275vw";
    footerSection.style.top="164vh";
    contactNumber.style.top="278vw";
    heading3.style.top="278vw";

    linkline1.style.top ="283vw";
    linkline2.style.top ="285vw";
    linkline3.style.top ="287vw";
    linkline4.style.top ="289vw";
    footerSelection.style.top ="275vw";
    linkline5.style.top ="291vw";

    sixSection.style.height="164vh";

    a = false;
  } else {
    question1Text.style.display = "none";
    question1Ibtn.style.transform = "rotate(0deg)";
    question2.style.top = "215vw";
    question3.style.top = "221vw";
    question4.style.top = "227vw";
    question5.style.top = "233vw";
    question6.style.top = "239vw";


    a = true;
  }
});
//=====================================222222222222222222222222222=====================*******************==========================
question2Ibtn.addEventListener("click", () => {
  if (a) {
    question2Text.style.display = "block";
    question1Text.style.display = "none";
    question3Text.style.display = "none";
    question4Text.style.display = "none";
    question5Text.style.display = "none";
    question1Ibtn.style.transform = "rotate(0deg)";
    question2Ibtn.style.transform = "rotate(45deg)";
    question3Ibtn.style.transform = "rotate(0deg)";
    question4Ibtn.style.transform = "rotate(0deg)";
    question5Ibtn.style.transform = "rotate(0deg)";
    question3.style.top = "228.3vw";
    question4.style.top = "234.3vw";
    question5.style.top = "240.3vw";
    question2.style.top = "215vw";
    question6.style.top="246.3vw";
    a = false;
  } else {
    question2Text.style.display = "none";
    question2Ibtn.style.transform = "rotate(0deg)";
    question3.style.top = "221vw";
    question4.style.top = "227vw";
    question5.style.top = "233vw";
    question6.style.top="239vw";

    a = true;
  }
});
//==============================33333333333333333333333333333333=====================================

question3Ibtn.addEventListener("click", () => {
  if (a) {
    question3Text.style.display = "block";
    question3Ibtn.style.transform = "rotate(45deg)";
    question1Text.style.display = "none";
    question2Text.style.display = "none";
    question4Text.style.display = "none"; 
    question5Text.style.display = "none"; 
    question1Ibtn.style.transform = "rotate(0deg)";
    question4Ibtn.style.transform = "rotate(0deg)";
    question2Ibtn.style.transform = "rotate(0deg)";
    question5Ibtn.style.transform = "rotate(0deg)";
    question3.style.top = "221vw";
    question4.style.top = "242.3vw";
    question5.style.top = "248.5vw";
    question6.style.top="254.8vw";
    a = false;
  } else {
    question3Text.style.display = "none";
    question3Ibtn.style.transform = "rotate(0deg)";
    question4.style.top = "227vw";
    question5.style.top = "233vw";
    question6.style.top="239vw";
    a = true;
  }
});

//========================4444444444444444444444444444444444444=============================================

question4Ibtn.addEventListener("click", () => {
  if (a) {
    question4Text.style.display = "block";
    question4Ibtn.style.transform = "rotate(45deg)";
    question1Text.style.display = "none";
    question2Text.style.display = "none";
    question3Text.style.display = "none";
    question5Text.style.display = "none";
    question2Ibtn.style.transform = "rotate(0deg)";
    question1Ibtn.style.transform = "rotate(0deg)";
    question3Ibtn.style.transform = "rotate(0deg)";
    question5Ibtn.style.transform = "rotate(0deg)";
    question2.style.top = "215vw";
    question3.style.top = "221vw";
    question4.style.top = "227vw";
    question5.style.top = "240vw";
    question6.style.top="245.8vw";
    a = false;
  } else {
    question4Text.style.display = "none";
    question4Ibtn.style.transform = "rotate(0deg)";
    question5.style.top = "233vw";
    question6.style.top="239vw";
    a = true;
  }
});

//=====================================555555555555555555555555555555555555555555555555555===================
question5Ibtn.addEventListener("click", () => {
  if (a) {
    question5Text.style.display = "block";
    question5Ibtn.style.transform = "rotate(45deg)";
    question4Text.style.display = "none";
    question4Ibtn.style.transform = "rotate(0deg)";
    question1Text.style.display = "none";
    question1Ibtn.style.transform = "rotate(0deg)";
    question2Text.style.display = "none";
    question2Ibtn.style.transform = "rotate(0deg)";
    question3Text.style.display = "none";
    question3Ibtn.style.transform = "rotate(0deg)";
    question5.style.top="233vw"
    question4.style.top = "227vw";
    question2.style.top = "215vw";
    question3.style.top = "221vw";
     question6.style.top="246.5vw"

     contentPara.style.top = "252vw";
    Emailbtn.style.top = "254vw";
   
    a=false;
  }
  else{
    question5Text.style.display = "none";
    question5Ibtn.style.transform = "rotate(0deg)";
    question6.style.top="239vw"
    question6Text.style.display = "none";
    question6Ibtn.style.transform = "rotate(0deg)";
    contentPara.style.top = "550vh";
    Emailbtn.style.top = "555vh";
   
    // contentPara.style.top = "550vh";
    // Emailbtn.style.top = "555vh";
   
    a=true;
    
  }
});

//===========================66666666666666666666666666==================================

question6Ibtn.addEventListener("click", () => {
  if (a) {
    question6Text.style.display="block"
    question6Ibtn.style.transform="rotate(45deg"
    question5Text.style.display = "none";
    question5Ibtn.style.transform = "rotate(0deg)";
    question4Text.style.display = "none";
    question4Ibtn.style.transform = "rotate(0deg)";
    question1Text.style.display = "none";
    question1Ibtn.style.transform = "rotate(0deg)";
    question2Text.style.display = "none";
    question2Ibtn.style.transform = "rotate(0deg)";
    question3Text.style.display = "none";
    question3Ibtn.style.transform = "rotate(0deg)";
    question6.style.top="239vw"
    question5.style.top="233vw"
    question4.style.top = "227vw";
    question2.style.top = "215vw";
    question3.style.top = "221vw";

    contentPara.style.top = "260vw";
    Emailbtn.style.top = "263vw";

    horizontalLine.style.top="270vw";
    footerSection.style.top="161vh";
    contactNumber.style.top="275vw";
    heading3.style.top="275vw";

    linkline1.style.top ="280vw";
    linkline2.style.top ="283vw";
    linkline3.style.top ="286vw";
    linkline4.style.top ="289vw";
    footerSelection.style.top ="273vw";
    linkline5.style.top ="295vw";

    sixSection.style.height="161vh";
     // sixSection.style.backgroundColor="black";

    a=false;
  } 
  else{
    question6Text.style.display = "none";
    question6Ibtn.style.transform = "rotate(0deg)";
    contentPara.style.top = "546vh";
    Emailbtn.style.top = "552vh";

    horizontalLine.style.top="0vw";
    footerSection.style.top="130vh";
    contactNumber.style.top="577vh";
    heading3.style.top="577vh";

    linkline1.style.top ="586vh";
    linkline2.style.top ="592vh";
    linkline3.style.top ="598vh";
    linkline4.style.top ="604vh";
    footerSelection.style.top ="257vw";
    linkline5.style.top ="616vh";

    sixSection.style.height="130vh";
     
   
    
    a=true;
    
  }
});