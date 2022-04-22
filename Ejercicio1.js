function Mayor(){

    let number1, number2, mayor;
    
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);

    if(number1 > number2){

        alert("El número " + number1 + " es mayor que el número " + number2)
        

    }else{

        alert("El número " + number2 + " es mayor que el número " + number1)
       
    }
}
