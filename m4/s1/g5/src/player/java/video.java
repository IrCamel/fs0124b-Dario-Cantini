package player.java;

public class video extends media implements riproducibili, visualizza {



    private int volume;
    private int duration;
    private int lumen;
    private static final int minimov = 0;
    private static final int massimov = 10;
    private static final int minimol = 1;
    private static final int massimol = 5;

    public video(String titolo, int volume, int durata, int luminosità) {
        super(titolo);
        this.volume = switchSegno(volume);
        setVolume(volume);
        setLumen(luminosità);
        this.duration = switchSegno(durata);
        this.lumen = switchSegno(luminosità);
    }

    public int switchSegno(int valore){
        if(valore < 0) valore = -valore;
        return valore;
    }

    private void setVolume(int volume) {
        if (volume >= minimov && volume <= massimov) {
            this.volume = volume;
        } else {
            System.out.println("Il volume deve essere compreso tra " + minimov + " e " + massimov);
        }
    }

    private void setLumen(int luminosità) {
        if (luminosità >= minimol && luminosità <= massimol) {
            this.lumen = luminosità;
        } else {
            System.out.println("La luminosità deve essere compresa tra " + minimol + " e " + massimol);
        }
    }

    @Override
    public void esegui() {
        play();

    }

    @Override
    public void play() {
        String livelloVolume = "";
        String livelloLuminosita = "";

        for (int i=0; i<volume; i++) {
            livelloVolume += "!";
        };
        for(int i = 0; i< lumen; i++){
            livelloLuminosita += "*";
        }
        for (int i = 0; i< duration; i++){
            System.out.println(titolo + ": " + livelloVolume + ": " + livelloLuminosita);
        }

    }

    @Override
    public void alzaVolume() {
        if (volume < 10) {
            volume++;
            System.out.println("Volume alzato a " + volume);
        } else {
            System.out.println("Volume già al massimo");
        }

    }

    @Override
    public void abbassaVolume() {
        if (volume > 0) {
            volume--;
            System.out.println("Volume abbassato a " + volume);
        } else {
            System.out.println("Volume già al minimo");
        }

    }

    @Override
    public void aumentaLuminosita() {
        if (lumen < 5) {
            lumen++;
            System.out.println("Luminosità alzata a " + lumen);
        } else {
            System.out.println("Luminosità al massimo");
        }

    }

    @Override
    public void diminuisciLuminosita() {

        if (lumen > 1) {
            lumen--;
            System.out.println("Luminosità abbassata a " + lumen);
        } else {
            System.out.println("Luminosità già al minimo");
        }

    }
}