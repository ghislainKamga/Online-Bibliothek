function Buch(titel, autor, herausgeber, erscheinungsjahr, umfang, isbn, status, sprache, beschreibung){
    this.titel = titel; 
    this.autor = autor; 
    this.herausgeber= herausgeber; 
    this.erscheinungsjahr = erscheinungsjahr; 
    this.umfang = umfang; 
    this.isbn = isbn; 
    this.status = status; 
    this.sprache = sprache; 
    this.beschreibung = beschreibung; 
}


let buch1 = new Buch("würde","Gerald Hüther", "Pantheon Verlag", "27.05.2019", "192 Seiten", "978-3570553930", 
"ausleihbar", "Deutsch", 
"Wir alle wollen in Würde sterben, aber sollten wir nicht erst einmal in Würde leben? "); 

let buch2 = new Buch("Peter Thiel", " Zero To One", "Virgin Books", "4. Juni 2015", "224 Seiten", "978-0753555194",
 "ausleihbar", "Englisch", "WHAT VALUABLE COMPANY IS NOBODY BUILDING?"); 

 let buch3 = new Buch("Think and Grow Rich", "Napoleon Hill", "Capstone", "23. April 2009", "388 Seiten",
  " 978-1906465599", "nicht vorhanden", "Englisch", "The greatest motivational book of all time!");

  let books = [buch2, buch3, buch1]; 
for(let elem of books){
        console.table(elem);
    }; 
