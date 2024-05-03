import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Creazione nuovo personaggio

        Personaggio Dario = new Personaggio("Dario");

        //Genera un oggettoRaccolto casuale che corrisponde ad un valore tra 1 e 2

        Random random = new Random();
        int oggettoRaccolto = random.nextInt(2) + 1;

        //Assegna al personaggio creato il valore dell'oggettoRaccolto

        Dario.incrementoStatistiche(oggettoRaccolto);

        //Manda a schermo il personaggio con le statistiche aggiornate in base al valore dell'oggettoRaccolto

        System.out.println(Dario);

        //Creazione del nuovo villain

        Villain Mario = new Villain ("Mario");

        //Genera un livello casuale con valore compreso tra 1 e 3

        Random random2 = new Random();
        int livello = random2.nextInt(3) +1;

        //Assegna al villain il valore del livello appen generato

        Mario.incrementoLivello(livello);

        //Manda a schermo le statistiche del villain

        System.out.println(Mario);

        //Chiede di accettare o stoppare l'inizio della funzione (in questo caso chiede se vuoi partecipare alla battaglia)

        System.out.println("Sei sicuro di voler combattere contro di me?");

        Scanner in = new Scanner(System.in);

        boolean a = in.nextBoolean();

        //Verifica se in console hai inserito il comando di partecipazione o di rifiuto, in questo caso rappresentato da un booleano

        if (a == true) {
            System.out.println("Combattiamo!");

            //La battaglia è iniziata, verifica se l'attacco del personaggio è maggiore della vita del villain

            if (Dario.Attacco() > Mario.Vita()){
                System.out.println("Hai vinto la battaglia!");
            }

            if (Dario.Attacco() < Mario.Vita()){
                System.out.println("Hai perso la battaglia!");
            }

            //La battaglia è terminata e a seconda del risultato viene stampato in console un messaggio diverso
        };

            //Rifiuto di partecipazione: stampa in console un messaggio e interrompe l'esecuzione

        if (a == false) {
            System.out.println("Sapevo che non saresti stato all'altezza del potente Mario.");

        };







    }
}