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
let contCard=document.getElementById("container-card")
let iconoOpen=document.getElementById("icopen")
let sectionPri=document.getElementById("sectionhome")
let sectionaboutme=document.getElementById("sectionaboutme")
let sectioncurriculum=document.getElementById("sectioncurriculum")
let sectionproyect=document.getElementById("sectionproyect") 
let sectioncontact=document.getElementById("sectioncontact")
let main=document.getElementById("main")  

const cardDataStyle=getComputedStyle(cardData)
const iconoOpenStyle=getComputedStyle(iconoOpen)






function prueba(){
    if(cardDataStyle.opacity=="0"){
        cardData.style.opacity="1"
        cardData.style.width="60%"
        cardData.style.transform="60%"
        arrowi.style.transform="rotate(180deg)"
        containeCardPhoto.style.backgroundColor="#000"
        containeCardPhoto.style.color="#fff"
        github.style.color="#fff"
        linkedin.style.color="#fff" 
        contCard.style.boxShadow="15px 15px 21px #0009" 
       // sectionPri.style.backgroundImage="url(./image/man-6339003.jpg)"
        //sectionPri.style.backgroundPosition="50%"
        //sectionPri.style.backgroundSize="100%"    
    }

    if(cardDataStyle.opacity=="1"){ 
        cardData.style.opacity="0"
        cardData.style.width="0%"
        arrowi.style.transform="rotate(0deg)"
        containeCardPhoto.style.backgroundColor="#eee"
        containeCardPhoto.style.color="#000"
        github.style.color="#000"
        linkedin.style.color="#000"
        contCard.style.boxShadow="none" 


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
}
function homeOpen(){
    sectionPri.style.width="100%"
    sectionPri.style.height="100%"
    sectionPri.style.opacity="1"
    sectionPri.style.borderRadius="0"
    main.style.height="80%"

    sectionaboutme.style.width="0%"
    sectionaboutme.style.height="0%"
    sectionaboutme.style.opacity="0"
    sectionaboutme.style.borderRadius="50%"

    sectioncurriculum.style.opacity="0"
    sectioncurriculum.style.width="0%"
    sectioncurriculum.style.height="0%"
    sectioncurriculum.style.borderRadius="50%"
    
    sectionproyect.style.opacity="0"
    sectionproyect.style.width="0%"
    sectionproyect.style.height="0%"
    sectionproyect.style.borderRadius="50%"
        
    sectioncontact.style.opacity="0"
    sectioncontact.style.width="0%"
    sectioncontact.style.height="0%"
    sectioncontact.style.borderRadius="50%"

}



function aboutMeOpen(){
    sectionPri.style.width="0%"
    sectionPri.style.height="0%"
    sectionPri.style.opacity="0"
    sectionPri.style.borderRadius="50%"
    

    sectioncurriculum.style.opacity="0"
    sectioncurriculum.style.width="0%"
    sectioncurriculum.style.height="0%"
    sectioncurriculum.style.borderRadius="50%"
    
    sectionproyect.style.opacity="0"
    sectionproyect.style.width="0%"
    sectionproyect.style.height="0%"
    sectionproyect.style.borderRadius="50%"
        
    sectioncontact.style.opacity="0"
    sectioncontact.style.width="0%"
    sectioncontact.style.height="0%"
    sectioncontact.style.borderRadius="50%"


    sectionaboutme.style.width="100%"
    sectionaboutme.style.height="100%"
    sectionaboutme.style.opacity="1"
    sectionaboutme.style.borderRadius="0"
}


function curriculumOpen(){
    sectionPri.style.width="0%"
    sectionPri.style.height="0%"
    sectionPri.style.opacity="0"

    sectionaboutme.style.width="0%"
    sectionaboutme.style.height="0%"
    sectionaboutme.style.opacity="0"
    sectionaboutme.style.borderRadius="50%"

    sectionproyect.style.opacity="0"
    sectionproyect.style.width="0%"
    sectionproyect.style.height="0%"
    sectionproyect.style.borderRadius="50%"
        
    sectioncontact.style.opacity="0"
    sectioncontact.style.width="0%"
    sectioncontact.style.height="0%"
    sectioncontact.style.borderRadius="50%"

    sectioncurriculum.style.opacity="1"
    sectioncurriculum.style.width="100%"
    sectioncurriculum.style.height="100%"
    sectioncurriculum.style.borderRadius="0"
    main.style.height="300%"
}


function proyectOpen(){
    sectionPri.style.width="0%"
    sectionPri.style.height="0%"
    sectionPri.style.opacity="0"

    sectionaboutme.style.width="0%"
    sectionaboutme.style.height="0%"
    sectionaboutme.style.opacity="0"
    sectionaboutme.style.borderRadius="50%"


    sectioncurriculum.style.opacity="0"
    sectioncurriculum.style.width="0%"
    sectioncurriculum.style.height="0%"
    sectioncurriculum.style.borderRadius="50%"
    
    sectioncontact.style.opacity="0"
    sectioncontact.style.width="0%"
    sectioncontact.style.height="0%"
    sectioncontact.style.borderRadius="50%"

    sectionproyect.style.opacity="1"
    sectionproyect.style.width="100%"
    sectionproyect.style.height="100%"
    sectionproyect.style.borderRadius="0"
    main.style.height="80%"
  
   
}

function contactOpen(){
    sectionPri.style.width="0%"
    sectionPri.style.height="0%"
    sectionPri.style.opacity="0"

    sectionaboutme.style.width="0%"
    sectionaboutme.style.height="0%"
    sectionaboutme.style.opacity="0"
    sectionaboutme.style.borderRadius="50%"
    
    sectioncurriculum.style.opacity="0"
    sectioncurriculum.style.width="0%"
    sectioncurriculum.style.height="0%"
    sectioncurriculum.style.borderRadius="50%"

    sectionproyect.style.opacity="0"
    sectionproyect.style.width="0%"
    sectionproyect.style.height="0%"
    sectionproyect.style.borderRadius="50%"

    sectioncontact.style.opacity="1"
    sectioncontact.style.width="100%"
    sectioncontact.style.height="100%"
    sectioncontact.style.borderRadius="0"
    
    main.style.height="80%"
}