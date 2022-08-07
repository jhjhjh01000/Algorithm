import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();

        int mh = h - 1;
        int mm = 60 - (45 - m);
        if (m < 45) {
            if (h == 0) {
                System.out.println(23 + " " + mm);
            }
            else {
                System.out.println(mh + " " + mm);
            }
        } else {
            System.out.println(h + " " + (m - 45));
        }
    }
}
