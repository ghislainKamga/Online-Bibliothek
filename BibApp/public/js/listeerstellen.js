 let neueKachel = document.getElementById("plusKachel");
 neueKachel.addEventListener("click", function (){
     let autor, titel, ausgabejahr ; 
     autor = prompt("Bitte geben Sie einen Autor ein: ") + "\n" + "-" + "\n"; 
     titel = prompt("Bitte geben Sie einen Titel ein: ") + "\n" + "-" + "\n"; 
     ul = document.getElementById("liste");
     li = document.createElement("li"); 
     ausgabejahr = prompt("Erscheinungsjahr bitte eingeben: ")+ "\n";
     li.append(document.createTextNode(autor));
     li.append(document.createTextNode(titel));
     li.append(document.createTextNode(ausgabejahr));
     ul.append(li);
     document.getElementById("liste").after(ul);
 });