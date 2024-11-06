function convert() 
        {
            let userChoice;
            let number, converter;


            userChoice = document.getElementById("choice").value * 1;
            number = document.getElementById("num").value * 1;


            console.log(userChoice);
            console.log(number);


            if (userChoice == 1)
            {
                converter = (number - 32) * (5 / 9); // Fahrenheit to Celsius
            }
            else if (userChoice == 2)
            {
                converter = (number * 9 / 5) + 32; // Celsius to Fahrenheit
            }
            else if (userChoice == 3)
            {
                converter = number * 3.281; // Meter to Feet
            }
            else
            {
                converter = number * 0.3048; // Feet to Meters
            }


            document.getElementById("convertLabel").innerHTML = 'The converted value of ' + number + ' is:';
            document.getElementById("convertedVal").value = converter.toFixed(3);  
        }

function incomeTax()
        {
            let userNum = 0, tax = 0;

            userNum = document.getElementById("userNumber").value*1;

            console.log(userNum);

            if(userNum <= 250000)
            {
                tax = 0;
            }
            else if(userNum > 250000 && userNum <= 400000)
            {
                tax = (userNum-250000)*0.20;
            }
            else if(userNum > 400000 && userNum <= 800000)
            {
                tax = 30000 + ((userNum-400000)*0.25);
            }
            else if(userNum > 800000 && userNum <= 2000000)
            {
                tax = 130000 + ((userNum-800000)*0.30);
            }
            else if (userNum > 2000000 && userNum <= 8000000)
            {
                tax = 490000 + ((userNum-2000000)*0.32);
            }
            else
            {
                tax = 2410000 + ((userNum-8000000)*0.35);
            }

            tax = tax.toFixed(2);
            document.getElementById("taxedIncome").value = tax;
        }
