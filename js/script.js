/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

 */
    const container = document.querySelector("main");
    document.getElementById("play").addEventListener("click", play);
    



 function play() {
    reset();
    estrazioneNumeri();
    setTimeout(userNumber,3000);
    
    
     

     
 }




 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  


  function estrazioneNumeri() {
    const arrNumeriEstratti = [];
    for (let i = 1; i <= 5; i++) {
       
        const numeriEstratti  = getRandomNumber(1, 99); 
        arrNumeriEstratti.push(numeriEstratti);
         const quadrato = document.createElement("div");
        quadrato.classList = ("box-number");
        quadrato.innerHTML = `${numeriEstratti}`;
        container.append(quadrato);
        console.log(i,numeriEstratti);
        
       

      }    
        
      console.log(arrNumeriEstratti);
      return arrNumeriEstratti;
        


        
        
        
  
     
  }

  function reset() {

    container.innerHTML = "";
}


function userNumber(quadrato) {
    let numeroUtente
    const arrNumeriInseriti = [];
    for (let i = 1; i <= 5; i++) {
        
         numeroUtente = parseInt(prompt("Inserisci Numero"));
         arrNumeriInseriti.push(numeroUtente);
            console.log(numeroUtente);
        
        
        
    }
    
    controlloNumeri();
    console.log(arrNumeriInseriti);
    return arrNumeriInseriti;
    

    
    
    
    
}

function controlloNumeri(arrNumeriEstratti,arrNumeriInseriti) {
    for (let i = 0; i < arrNumeriEstratti.l; i++) {
       
        
    }
    
    
    
}
