let cardData=document.getElementById("container-card-data")
let containeCardPhoto=document.getElementById("container-card-photo")
let arrowi=document.getElementById("arrow")  
let github=document.getElementById("github")
let linkedin=document.getElementById("linkedin")
let proyect=document.getElementById("proyect")
let curriculum=document.getElementById("curriculum")
let messengerForm=document.getElementById("messenger")


const cardDataStyle=getComputedStyle(cardData)



function prueba(){
    if(cardDataStyle.opacity=="0"){
        cardData.style.opacity="1"
        cardData.style.width="60%"
        arrowi.style.transform="rotate(180deg)"
        containeCardPhoto.style.backgroundColor="#000"
        containeCardPhoto.style.color="#fff"
        github.style.color="#fff"
        linkedin.style.color="#fff"
    }

    if(cardDataStyle.opacity=="1"){ 
        cardData.style.opacity="0"
        cardData.style.width="0%"
        arrowi.style.transform="rotate(0deg)"
        containeCardPhoto.style.backgroundColor="#eee"
        containeCardPhoto.style.color="#000"
        github.style.color="#000"
        linkedin.style.color="#000"



        cardData.style.display="grid"
        cardData.style.placeContent="center"
        messengerForm.style.width="100px"
        messengerForm.style.height="100px"
        messengerForm.style.borderRadius="50%"
        proyect.style.width="100px"
        proyect.style.opacity="100px"
        curriculum.style.width="100px"
        curriculum.style.height="100px"
        curriculum.style.opacity="1"
        proyect.style.opacity="1"

        
    }
}
function messenger(){
    cardData.style.alignItems="center"
    cardData.style.gridTemplateColumns="100%"
    
    messengerForm.style.width="100%"
    messengerForm.style.height="100%"
    messengerForm.style.borderRadius="0"
    proyect.style.width="0"
    proyect.style.opacity="0"
    curriculum.style.opacity="0"
    curriculum.style.width="0"
}

