//Creazione del personaggio

public class Personaggio {
    private String name;
    private int attack;
    private int def;
    private int hp;

    //Assegnazione delle statistiche base del personaggio

    public Personaggio(String name) {
        this.name = name;
        this.attack = 10;
        this.def = 10;
        this.hp = 100;
    }

    //Metodo che incrementa le statistiche in base all'oggetto raccolto

    public void incrementoStatistiche(int oggettoRaccolto) {
        if (oggettoRaccolto == 1) {
            attack +=5;
            def += 5;
            hp += 20;
        };
        if (oggettoRaccolto == 2) {
            attack += 200;
            def += 10;
            hp += 50;
        }
    }

    //Metodo toString(), permette di visualizzare a schermo l'oggetto Personaggio

    @Override
    public String toString() {
        return "Ciao, io sono " +
                name + " ed ho " +
                attack + " punti di attacco, " +
                def + " punti di difesa, " +
                hp +" punti salute.";

    }

    //Metodo che permette di ritornare l'attacco del nostro personaggio

    public int Attacco() {
        return attack;
    };
}
