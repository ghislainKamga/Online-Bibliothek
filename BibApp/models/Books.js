function Buch(titel, autor, herausgeber, erscheinungsjahr, umfang, isbn, status, sprache, beschreibung) {
    this.titel = titel;
    this.autor = autor;
    this.herausgeber = herausgeber;
    this.erscheinungsjahr = erscheinungsjahr;
    this.umfang = umfang;
    this.isbn = isbn;
    this.status = status;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
}

let buch1 = new Buch(" Würde", " Gerald Hüther", " Pantheon Verlag", " 27.05.2019", " 192 Seiten", " 978-3570553930",
    " ausleihbar", " Deutsch",
    " Wir alle wollen in Würde sterben, aber sollten wir nicht erst einmal in Würde leben? ");

let buch2 = new Buch(" Zero To One", " Peter Thiel", " Virgin Books", " 4. Juni 2015", " 224 Seiten", " 978-0753555194",
    " nicht vorhanden", "Englisch", "WHAT VALUABLE COMPANY IS NOBODY BUILDING?");

let buch3 = new Buch(" Einbruch in die Freiheit", " Jiddu Krishnamurti", " Lotos, 39 Edition", " 14. Mai 2002", " 176 Seiten",
    " 978-1906465599", " ausleihbar", " Deutsch",
    " Der Mensch hat zu allen Zeiten etwas gesucht, das über ihn und sein materielles Wohl hinausgeht - etwas, das wir Wahrheit oder Gott oder Realität nennen, einen zeitlosen Zustand -, etwas, das nicht durch Umstände, durch Gedanken oder durch menschliche Verderbtheit beeinträchtigt werden kann. ");

let books = [buch2, buch3, buch1];
for (let elem of books) {
    console.table(elem);
};

module.exports = {
    Books: books,
    Buch: Buch
} 