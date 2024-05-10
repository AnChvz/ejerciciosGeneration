package org.generation.liveCoding;
import java.util.Scanner;

public class MangosNaranjas {
    private int cantidadMangos;
    private int cantidadNaranjas;

    public MangosNaranjas(int cantidadMangos, int cantidadNaranjas) {
        this.cantidadMangos = cantidadMangos;
        this.cantidadNaranjas = cantidadNaranjas;
    }

    public void imprimirCajas() {
        int cantidadCajas = Math.min(cantidadMangos, cantidadNaranjas);

        while (cantidadCajas > 0) {
            if (cantidadMangos % cantidadCajas == 0 && cantidadNaranjas % cantidadCajas == 0) {
                int mangosPorCaja = cantidadMangos / cantidadCajas;
                int naranjasPorCaja = cantidadNaranjas / cantidadCajas;

                System.out.println("El número total de cajas es: " + cantidadCajas);
                System.out.println("El número de mangos por caja es: " + mangosPorCaja);
                System.out.println("El número de naranjas por caja es: " + naranjasPorCaja);
                break;
            }

            cantidadCajas--;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la cantidad de mangos y la cantidad de naranjas, separadas por un espacio: ");
        int cantidadMangos = scanner.nextInt();
        int cantidadNaranjas = scanner.nextInt();

        MangosNaranjas mn = new MangosNaranjas(cantidadMangos, cantidadNaranjas);
        mn.imprimirCajas();

        scanner.close();
    }
}