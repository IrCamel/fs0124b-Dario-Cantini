//Creazione della classe del villain

public class Villain {
    private String name;
    private int attack;
    private int def;
    private int hp;

    //Assegnazione delle stastiche di base al villain

    public Villain(String name) {
        this.name = name;
        this.attack = 10;
        this.def = 15;
        this.hp = 90;
    };

    //Metodo di elaborazione delle stastiche a seconda del livello

    public void incrementoLivello(int livello){
        if (livello == 1) {
            attack = attack;
            def = def;
            hp = hp;
        };

        if (livello == 2) {
            attack += 10;
            def += 5;
            hp += 20;
        };

        if (livello == 3){
            attack += 15;
            def += 20;
            hp += 30;
        }
    }

    //Stampa in console la presentazione del villain in caso venisse richiamato l'oggetto villain in console

    @Override
    public String toString() {
        return "Dovrai combattere contro di me, " + name + ", re dell'inferno. Queste sono le mie statistiche: " +
                "\n" + "Attacco: " + attack  +
                "\n" + "Difesa: " + def +
                "\n" + "Hp: " + hp;
    };

    //Ritorna la vita del villain

    public int Vita() {
        return hp;
    }
}
