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
      ins = setInterval(fadeIn, inverval_wait);   
      image.updateIndex(i); 
      imageUpdate();
       
    }
  } 
} 

function Leave() {   
  
  entered = false;  
  image.updateIndex(4); 
  imageUpdate();   
} 
var temp_numb = false;
function fadeIn() {   
  console.log(temp_numb);   
  if(temp_numb == false) { 
    temp_numb = 0.1;  
  }
  $("image").css("opacity", (temp_numb + 0.1));  
  if (temp_numb > 1) {  
    clearInterval(ins);   
    
    
    
  }

} 
function fadeOut() {
  if(!temp_numb) { 
    temp_numb = 0.9;  
  }
  $("image").css("opacity", (temp_numb - 0.1));   
    
}
window.onload = function() {  
  image = new imageInfo(["images/you.png", "images/blue.png", "images/git.png", "images/gmail.png", "images/black.png"], 4); 
  imageUpdate();  
  setUp(); 
} 
