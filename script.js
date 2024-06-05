let cardData=document.getElementById("container-card-data")
let containeCardPhoto=document.getElementById("container-card-photo")
let arrowi=document.getElementById("arrow")  
let github=document.getElementById("github")
let linkedin=document.getElementById("linkedin")
let proyect=document.getElementById("proyect")
let curriculum=document.getElementById("curriculum")
let messengerForm=document.getElementById("messenger")
let Form=document.getElementById("form")
let messengerh4=document.getElementById("messengerh4")
let btnCancel=document.getElementById("btnCancel")
let btnOpen=document.getElementById("btn-open")



const cardDataStyle=getComputedStyle(cardData)






function prueba(){
    if(cardDataStyle.opacity=="0"){
        cardData.style.opacity="1"
        cardData.style.width="60%"
        cardData.style.transform=""
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
        messengerForm.style.border="1px solid #0004"
        proyect.style.width="100px"
        proyect.style.opacity="100px"
        proyect.style.opacity="1"
        curriculum.style.width="100px"
        curriculum.style.height="100px"
        curriculum.style.opacity="1"
        Form.style.display="none"
        messengerh4.style.fontSize="16px"


       


  
    }
}
function messenger(){
    cardData.style.display="flex"
    cardData.style.justifyContent="center"
    cardData.style.alignItems="center"
    cardData.style.height="100%"
    messengerForm.style.width="76%"
    messengerForm.style.height="100%"
    messengerForm.style.borderRadius="0"
    messengerForm.style.border="none"
    messengerForm.style.backgroundColor="#eee"
    messengerForm.style.cursor="default"
    proyect.style.width="0"
    proyect.style.opacity="0"
    curriculum.style.opacity="0"
    curriculum.style.width="0"
    Form.style.display="flex"
    Form.style.width="450px"
    Form.style.height="380px"
    messengerh4.style.fontSize="20px"
    messengerh4.style.color="#000"
    $('#messenger').removeClass('hover'); 
   
}
function cancelForm(){

}




