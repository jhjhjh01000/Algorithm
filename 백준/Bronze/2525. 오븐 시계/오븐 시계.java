import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        int ct = sc.nextInt();
        sc.close();

        int all = h * 60 + m + ct;
        h = all / 60;
        m = all % 60;

        if (h > 23) {
            h -= 24;
        }
        System.out.println(h + " " + m);
    }
}