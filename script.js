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
  $("img").attr("src", image.getSrc());   
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
    console.log(this == ElmList[i]); 
    if (this == ElmList[i]) {  
      image.updateIndex(i); 
      imageUpdate(); 
    }
  } 
} 

function Leave() { 
  image.updateIndex(0); 
  imageUpdate();   
} 

window.onload = function() {  
  image = new imageInfo(["", "https://pbs.twimg.com/profile_images/1799909814660689921/osCrUSI7_400x400.jpg", "https://static.wikia.nocookie.net/unbeatable/images/b/bc/Quaver_Characterdesign.png/revision/latest/smart/width/250/height/250?cb=20220425214443"], 0); 
  imageUpdate();  
  setUp(); 
} 
