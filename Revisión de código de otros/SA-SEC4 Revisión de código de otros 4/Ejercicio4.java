package org.generation.revisioncodigo;
import java.util.Scanner;

public class Ejercicio4 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        // Turno del jugador 1
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine().toLowerCase();

        if (!isValidInput(j1)) {
            System.out.println("Entrada no válida para el jugador 1");
            s.close();
            return;
        }

        // Turno del jugador 2
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine().toLowerCase();

        if (!isValidInput(j2)) {
            System.out.println("Entrada no válida para el jugador 2");
            s.close();
            return;
        }

        // Lógica para determinar el ganador
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int ganador = 0;
            switch (j1) {
                case "piedra":
                    ganador = (j2.equals("tijeras")) ? 1 : 2;
                    break;
                case "papel":
                    ganador = (j2.equals("piedra")) ? 1 : 2;
                    break;
                case "tijeras":
                    ganador = (j2.equals("papel")) ? 1 : 2;
                    break;
            }
            System.out.println("Gana el jugador " + ganador);
        }
        s.close();
    }

    // Método para verificar la validez de la entrada del jugador
    private static boolean isValidInput(String input) {
        return input.equals("piedra") || input.equals("papel") || input.equals("tijeras");
    }
}
