/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

 */
    const container = document.querySelector("main");
    document.getElementById("play").addEventListener("click", play);
    
    
    let arrNumeriEstratti = [];
    let time = 6;
    let myTimer;
   
            
    
    
    
    
    
    



function play() {
    reset();
    estrazioneNumeri();
    myTimer = setInterval(function(){
         time--;
         if(time === 0){
            clearInterval(myTimer);
         } 
         
         
         container.innerHTML= time;
           
         
          },1000);
          
   
    setTimeout(userNumber,6000);
    fineGioco();
    
    
    
    
     

     
}
console.log(arrNumeriEstratti);




 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  


  function estrazioneNumeri() {
    
    let numeriEstratti;
    for (let i = 1; i <= 5; i++) {
       
        numeriEstratti  = getRandomNumber(1, 99); 
        arrNumeriEstratti.push(numeriEstratti);
        const quadrato = document.createElement("div");
        quadrato.classList = ("box-number");
        quadrato.innerHTML = `${numeriEstratti}`;
        container.append(quadrato);
        console.log(i,numeriEstratti);
        
       

      }    
        
      
      return arrNumeriEstratti;
        


        
        
        
  
     
  }

  function reset() {

    container.innerHTML = "";
}


function userNumber() {
    
    let numeroUtente
    
    for (let i = 1; i <= 5; i++) {
        
         numeroUtente = parseInt(prompt("Inserisci Numero"));
         
        
         
            
        
        console.log(numeroUtente);
        
    }
    
   
    
    
    
    
    
    

    
    
    
    
}


function fineGioco(userNumber) {
    let contatore = 0;
    for (let i = 0; i < arrNumeriEstratti.length; i++) {
        if(arrNumeriEstratti.includes(userNumber)){
            contatore++;
            console.log(contatore);
        }
        
        
    }
    
}


    


    










