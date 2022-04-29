public double calculatePerimeter(int shape) {
    double perimeter = 0;
    switch(shape) {
case SQUARE:
     perimeter = 4 * a;
     break;
case RECTANGLE:
      perimeter = 2 * (a + b);
      break;
case CIRCLE:
      perimeter = 2 * Math.PI * r;
      break;
    }
return perimeter;
}
