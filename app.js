    //Chapter 06 (Math Expression ii)

    //1.
    var x = x + 1;
    var x = x++;
    console.log(x);
    
        //2.
    var x = 100;
    
    var exp = --x;
    console.log(exp);
    
       //3.
    var x = 50;
    
    var y = x++;
    
    console.log(x);
    
       //4.
    var y = 50;
    
    var z = --y;
    
    console.log(z);
    
      //5.
    var num = 1;
    
    var newNum = num--;
    
    console.log(num);
    
       //6.
    var oldVar = 10;
    
    var newVar = oldVar++;
    
    console.log(oldVar);
    
       //7.
    var num = 10;
    
    num++;
    
    console.log(num);
    
        //Chapter 07 (Math Expression iii) 
    
      //1,2
    var calculatedNum = 2 + (2 * 6);
    
    var calculatedNum = (2 + 2) * 6;
    
    console.log(calculatedNum);
    
      //3.
    var calculatedNum = (2 + 2) * (4 + 2);
    
    console.log(calculatedNum);
    
       //4.
    var calculatedNum = ((2 + 2) * 4) + 2;
    
    console.log(calculatedNum);
    
       //5.
    var cost = (2 + 2) * (4 + 10);
    
    console.log(cost);
    
       //6.
    var cost = 2 + (2 * 4) + 10;
    
    console.log(cost);
    
       //7.
    var cost = 4 / (2 *4);
    
    console.log(cost);
    
       //Chapter 08 (Concatenating Text Strings)
    
       //1.
    var num = "2" + "2";
    
    console.log(num);
    
       //2.
    var message = ("Hello," + "Dolly");
    
    alert(message);
    
       //3.
    alert("33" + 3);
    
       //4.
    alert("Pakistan" + "Zindabad");
    
       //5.
    var result = "The answer is " + 42;
    
    console.log(result);
    
      //6.
    var firstpart = "Hello, ";
    
    var secondpart = "World!";
    
    var thirdpart = firstpart + secondpart;
    
    console.log(thirdpart);
    
    
       //Chapter 09 (Prompts)
    
       //1.
    var firstName = prompt("Enter first name!");
    
       //2.
    var country = prompt("Country?" , "China");
    
      //3.
    var yourName = prompt("Enter your name");
    
       //4.
    var userInput = prompt("What is your favorite color?" , "Blue");
    
       //5.
    var message = "What is your favorite Fruit?";
    
    var defaultResponse = "Apple";
    
    var userResponse = prompt(message, defaultResponse);
    
        //6.
    var userResponse = prompt("what is your favorite colot?" , "Blue");  // Display the prompt and store the user's response
    
    alert("Your favorite color is " + userResponse);
    
           // MATH EXPRESSIONS
    
       //1.
    document.write("Result:  <br> The value of a is: 10  <br>  ..................................  <br> <br>");
    
    
    var a = 10;
    document.write("The value of ++a is: " + ++a  + "<br>"); //pre increament
    document.write("Now the value of a is: " + a + "<br> <br><br> <br>");
    
       
    var a = 11;
    var b = a++; 
    document.write("The value of a++ is: " + b + "<br>");  //post increament
    document.write("Now the value of a is: " + a + "<br> <br><br><br>");
    
    
    var a = 12;
    document.write("The value of --a is: " + --a  + "<br>"); //pre dicreament
    document.write("Now the value of a is: " + a + "<br> <br><br><br>");
    
    
    var a = 11;
    var b = a--; 
    document.write("The value of a-- is: " + b + "<br>");  //post increament
    document.write("Now the value of a is: " + a + "<br><br><br> <br>");
    
    
        //2.
    var a = 2 , b = 1;
    var result = --a - --b + ++b + b--;
    console.log(result);
       //explain the output at each stage
    var result1 = --a;
    var result2 = --a - --b;
    var result3 = --a - --b + ++b;
    var result4 = --a - --b + ++b + b--;
    
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    
        //3.
    var userName = prompt("Please enter your name:");  //Prompt the user to enter their name
    
    console.log("Hello, " + userName + "! Nice to meet you.");  //Greet the user using their name
    