const num = +prompt('Введите любое число');

if (num > 0)
    console.log(num);
else if (num < 0)
    console.log(-num);
else
    //для случая когда вводится 0 или -0
    console.log(Math.abs(num));