double price() {
  
    return quantity * itemPrice -
        Math.max(0, quantity - 500) * itemPrice * 0.05 +
        Math.min(quantity * itemPrice * 0.1, 100.0);
}
