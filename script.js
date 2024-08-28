// open more details
const handleViewCardOpen =(classInd)=>{
    var target = document.getElementsByClassName("card");
    var viewCard = document.getElementsByClassName("view-card");
    for(var a=0;a<viewCard.length;a++){
        if(a!=classInd){
            viewCard[a].style.display="none"
            target[a].style.display="flex"
        }
    }
     target[classInd].style.display="none"
     viewCard[classInd].style.display="block"

}
// open close details
const handleViewCardClose=(classInd)=>{
    var target = document.getElementsByClassName("card");
    var viewCard = document.getElementsByClassName("view-card");
    var cardcheck = document.getElementsByClassName("card-radio");
    
    target[classInd].style.display="flex"
     viewCard[classInd].style.display="none"
}

