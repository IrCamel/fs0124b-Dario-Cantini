public class Funzioni {
    private int num1;
    private int num2;
    private String string1;

    public void setNum(int num1, int num2){
        this.num1 = num1;
        this.num2 = num2;
    };

    public int getNum(){
        return num1 * num2 ;
    }

    public void setConc(int num1, String string1){
        this.num1 = num1;
        this.string1 = string1;
    }

    public String getConc(){
        return num1 + string1;
    }




}
