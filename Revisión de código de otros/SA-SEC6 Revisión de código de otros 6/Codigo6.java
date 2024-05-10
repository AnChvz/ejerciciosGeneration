package org.generation.revisioncodigo;

import java.util.Scanner;

public class Codigo6 {
	public static void main(String[] args) {
		Scanner sn = new Scanner(System.in);
		int[] n = new int[20];

	    for (int i = 0; i < 20; i++) {
	      n[i] = (int)(Math.random() * 381) + 20;//del 20 al 400
	      System.out.print(n[i] + " ");  
	    }
	  
	    System.out.println("\n¿Qué números quiere resaltar? ");
	    System.out.println("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
	    System.out.println("¿Que opción eliges?");
	    int opcion = sn.nextInt();
	    /*int opcion = Integer.parseInt(System.console().readLine()); cambiarlo por scanner*/

	    int multiplo = (opcion == 1) ? 5 : 7;

	    for(int e : n) {
	      if (e % multiplo == 0) {
	        System.out.print("[" + e + "] ");
	      }else {
	        System.out.print(e + " ");
	      }
	}
    sn.close();
	}
}
