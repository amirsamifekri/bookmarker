var SiteName = document.querySelector('#SiteName');
var SiteURL = document.querySelector('#SiteURL');


var allData = new Array ();

if(localStorage.getItem("array") != null){
   allData = JSON.parse(localStorage.getItem("array"))
   fill();
}




document.querySelector(".mainButton").addEventListener("click" , function(){

if(SiteName.value == ""  &&  SiteURL.value == ""){

      document.querySelector('.hint1').classList.remove("d-none");
      document.querySelector('.hint2').classList.remove("d-none"); 
    }
else if(SiteURL.value == ""){

   document.querySelector('.hint1').innerHTML = "this url already exist";
   document.querySelector('.hint1').classList.remove("d-none");

   document.querySelector('.hint2').classList.remove("d-none"); 


}
else if(SiteName.value == ""){
   document.querySelector('.hint1').classList.remove("d-none");
}
 
else{
   takeData();
}
  
})

/////////////////////////////////////////////////////////////

function clear (){
   document.querySelector('.hint1').classList.add("d-none");
   document.querySelector('.hint2').classList.add("d-none"); 
   SiteName.value = "";  
   SiteURL.value = "";  
}

//////////////////////////////////////////////////////////////

////////////////////////////////////////
function takeData(){
   
   var data = {
      name: SiteName.value , 
      url : SiteURL.value
   }

   allData.push(data);

   localStorage.setItem("array" , JSON.stringify(allData));

   clear();
   fill();

}


function fill (){


   var cartona = "";
   for(var i=0; i<allData.length; i++){
      cartona += `
      <div class="outterRow">
<div class="myRow d-flex justify-content-between py-3">
    <h2 class="siteName w-50">${allData[i].name}</h2>
    <span class="buttonCollection d-flex mx-2 w-50">
        <button  class="Visit  mx-2"> <a  href="${allData[i].url}" target="_blank"> Visit </a> </button>
        <button onclick="Delete(${i})" class="Delete ">Delete</button>
    </span>
</div>
</div>
      `

      
   }

   document.querySelector('.myTable').innerHTML = cartona ;
}




/////////////////////////////////////////
function Delete(index){
   allData.splice(index , 1)
   fill();
   localStorage.setItem("array" , JSON.stringify(allData));
}


//   http://www.google.com