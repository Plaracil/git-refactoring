public class Alquiler {
private Pelicula peli;
private int dias;
private static final int PRECIO = 2;
public Alquiler(Pelicula peli, int dias)
{
      peli = peli;
      dias = dias;
}
public double getRecargo() {
     double recargo = 0;
     switch(getPeli().getTipo()) {
           case Pelicula.NORMAL:
                 recargo = 1*dias*PRECIO;
                 break;
           case Pelicula.ESTRENO:
                recargo = 1.5*dias*PRECIO;
                 break;
           case Pelicula.BLURAY:
                recargo = 2*dias*PRECIO;
                break;
         }
           return recargo;
