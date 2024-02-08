import java.util.Scanner;

class Media {
    public static void main(java.lang.String[] args) {

        int Num[], media, soma;
        Num = new int[50];
        Scanner input = new Scanner(System.in);
        soma = 0;

        for (int i = 0; i <= 49; i++) {

            System.out.println("Digite um número: ");
            Num[i] = input.nextInt();

            soma = soma + Num[i];

        }

        media = (soma) / 50;
        System.out.println("A média das 50 notas digitadas é: " + media);
        input.close();
    }
}