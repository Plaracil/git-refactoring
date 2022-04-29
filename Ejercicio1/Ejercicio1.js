public double calculateArea(int shape) {
double area = 0;
switch(shape) {
       case SQUARE:
       area = a * a;
       break;
case RECTANGLE:
      area = a * b;
      break;
case CIRCLE:
     area = Math.PI * r * r;
      break;
}
return area;
