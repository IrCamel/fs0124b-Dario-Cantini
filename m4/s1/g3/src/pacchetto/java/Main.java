package pacchetto.java;

public class Main {
    public static void main(String[] args) {
        Rettangolo r1 = new Rettangolo(23, 34);
        stampaRettangolo(r1);
    }

    public static void stampaRettangolo(Rettangolo Rettangolo) {
        System.out.println("L'area del rettangolo è " + Rettangolo.getArea());
        System.out.println("Il perimetro del rettangolo è " + Rettangolo.getPerimetro());
    }
}


