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

function Enter() { 
  for (let i = 0; i < ElmList.length; i++) {  
    //console.log($(this)); 
    //console.log(ElmList[i]); 
    if (this.id == ElmList[i].attr('id')) {  
      image.updateIndex(i); 
      imageUpdate(); 
    }
  } 
} 

function Leave() { 
  image.updateIndex(4); 
  imageUpdate();   
} 

window.onload = function() {  
  image = new imageInfo(["images/you.png", "images/blue.png", "images/git.png", "images/gmail.png", ""], 4); 
  imageUpdate();  
  setUp(); 
} 
