class imageInfo {  
  #imageList;  
  #index;
  constructor(imageList, index) { 
    this.#imageList = imageList; 
    this.#index = index; 
  }  
  updateIndex(index) { 
    this.#index = index; 
  }  
  getSrc() { 
    return this.#imageList[this.#index]; 
  }
  printValues() { 
    console.log(this.#imageList); 
    console.log(this.#index); 
  } 
  
}   

function imageUpdate() {
  $("#image").css("background-image", "url(" + image.getSrc() + ")");   
} 

const ElmList = [$("#youtube"), $("#bsky"), $("#github"), $("#contact")]; 
function setUp() { 
  for (let i = 0; i < ElmList.length; i++) { 
    ElmList[i].on("mouseenter", Enter);  
    ElmList[i].on("mouseleave", Leave);  
  } 
}  
var inverval_wait = 25; 
var entered = false;   
var FadeInAndOut = null; 
function Enter() {  
  entered = true;  
  index = 0; 
  for (let i = 0; i < ElmList.length; i++) {  
    //console.log($(this)); 
    //console.log(ElmList[i]); 
    if (this.id == ElmList[i].attr('id')) {     
      if (FadeInAndOut == null) { 
        FadeInAndOut = setInterval(fade, inverval_wait);    
      }
      image.updateIndex(i); 
      imageUpdate();
       
    }
  } 
}  
var fadeOutInterval;
function Leave() {    
   entered = false;  
   if(FadeInAndOut == null) { 
     FadeInAndOut = setInterval(fade, inverval_wait); 
   }
 
}  
var numb_change = 0.09; 
var temp_numb = false; 

function fade() { 
  if (entered == true) { 
    temp_numb += numb_change;  
  } else { 
    temp_numb -= numb_change; 
  } 
  $("#image").css("opacity", temp_numb);   

  if (temp_numb > 1) {  
    clearInterval(FadeInAndOut); 
    temp_numb = 1;  
    FadeInAndOut = null; 
  } else if (temp_numb < 0) { 
    clearInterval(FadeInAndOut); 
    temp_numb = 0; 
    FadeInAndOut = null; 
  }
}

window.onload = function() {  
  image = new imageInfo(["images/you.png", "images/blue.png", "images/git.png", "images/gmail.png", "images/black.png"], 4); 
  imageUpdate();  
  setUp(); 
} 
