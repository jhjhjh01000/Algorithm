import java.util.*;

    public class Main {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        int X = sc.nextInt();
        int N = sc.nextInt();


        int result = 0;

        for (int aa = 0; aa < N; aa++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            result += a * b;
        }

        if (X == result) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
    }