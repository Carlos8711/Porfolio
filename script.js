let cardData=document.getElementById("card-data")
let arrowi=document.getElementById("arrow")  


const cardDataStyle=getComputedStyle(cardData)



function prueba(){
    if(cardDataStyle.opacity=="0"){
        cardData.style.opacity="1"
        cardData.style.width="60%"
        arrowi.style.transform="rotate(180deg)"
    }

    if(cardDataStyle.opacity=="1"){ 
        cardData.style.opacity="0"
        cardData.style.width="0%"
        arrowi.style.transform="rotate(0deg)"
    }
}


