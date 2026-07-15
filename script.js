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
var inverval_wait = 50; 
var entered = false;  
function Enter() {  
  entered = true;  
  index = 0; 
  for (let i = 0; i < ElmList.length; i++) {  
    //console.log($(this)); 
    //console.log(ElmList[i]); 
    if (this.id == ElmList[i].attr('id')) {    
      fadeInInterval = setInterval(fadeIn, inverval_wait);   
      image.updateIndex(i); 
      imageUpdate();
       
    }
  } 
} 
var fadeOutInterval;
function Leave() {   
   fadeOutInterval = setInterval(fadeOut, inverval_wait);
 
}  
var numb_change = 0.7; 
var temp_numb = false;
function fadeIn() {   
  if(temp_numb == false && fadeOutInterval == null) { 
    temp_numb = 0.1;  
  } else { 
    clearInterval(fadeOutInterval); 
  }
  temp_numb += numb_change; 
  $("#image").css("opacity", temp_numb);  
  if (temp_numb > 1) {   
    temp_numb = false;
    clearInterval(fadeInInterval);   
    
    
    
  }

} 
function fadeOut() {
  if(temp_numb == false && fadeInInterval == null) { 
    temp_numb = 0.9;  
  } else { 
    clearInterval(fadeInInterval);   
  }
  temp_numb -= numb_change; 
  $("#image").css("opacity", temp_numb);  
  if (temp_numb < 0) {   
    temp_numb = false;
    clearInterval(fadeOutInterval);   
  }
    
}
window.onload = function() {  
  image = new imageInfo(["images/you.png", "images/blue.png", "images/git.png", "images/gmail.png", "images/black.png"], 4); 
  imageUpdate();  
  setUp(); 
} 
