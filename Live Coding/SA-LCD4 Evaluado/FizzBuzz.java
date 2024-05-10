package org.generation.liveCoding;

public class FizzBuzz {

	//Método núm 1-100
	public void multiplos() {
		for(int i=1;i<=100;i++) {
			//si es multiplo de 3
			if(i%3==0 && i%5==0) {
				System.out.println("FizzBuzz");
			}else if(i%5==0) {
				System.out.println("Buzz");//si es multiplo de 5
			}else if(i%3==0) {//multiplo 3 y 5
				System.out.println("Fizz");
			}else {
				System.out.println(i);
			}
		}
	}
	public static void main(String[] args) {
		//Crear el objeto
		FizzBuzz objeto= new FizzBuzz();
		objeto.multiplos();
		
	}

}
