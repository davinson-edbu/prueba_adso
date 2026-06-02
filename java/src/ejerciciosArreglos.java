public class ejerciciosArreglos {
    public static void main(String[] args){
        // crear arreglo de numeros
        int[] numeros = {5, 23, 12, 14,54};
        // operacion basica: sumar los elementos del arreglo.
        int suma = 0;
        for (int i = 0; i< numeros.length; i++){
            suma += numeros[i];
        }
        System.out.println("la suma de los numeros es: "+ suma);
    }
}
