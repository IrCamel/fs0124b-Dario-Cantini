package pacchetto.java;

public class Rettangolo {

    double altezza;
    double base;

    public Rettangolo(double a, double b){
        this.altezza = a;
        this.base = b;
    }

    public double getArea(){
        return base * altezza;
    }

    public double getPerimetro(){
        return (base * 2) + (altezza * 2);
    }

}
