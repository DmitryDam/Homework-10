document.getElementById('maxnum').onclick = maxnumber;
  function maxnumber() {
     var num1 = +document.getElementById('num1').value;
     var num2 = +document.getElementById('num2').value;
     var rez = document.getElementById('rez');
 
     if (num1 > num2) {
         rez.innerHTML = 'Первое число больше';
     } else if (num1 < num2) {
         rez.innerHTML = 'Второе число больше';
     } else if (num1 == '' && num2 == '') {
         alert('введите числа');
     } else {
         rez.innerHTML = 'Числа равны';
     }
 }

document.getElementById('flat').onclick = flatnumber
  function flatnumber() {
     var num3 = document.getElementById('num3').value;
     var rez3 = document.getElementById('rez3');
 
     if (num3 >= 1 && num3 <= 20) {
         rez3.innerHTML ='Первый подъезд';
     } else if (num3 >= 21 && num3 <= 48) {
         rez3.innerHTML ='Второй подъезд';
     } else if (num3 >= 49 && num3 <= 90) {
         rez3.innerHTML ='Третий подъезд';
     } else {
         rez3.innerHTML ='Нет такой квартиры';
     }
 }
document.getElementById('login').onclick = login;
  function login() {
    var log = document.getElementById('log').value;
    var pass = document.getElementById('pass').value;
     
    if (log == 'ivan' && pass == '334455') {
             alert('Добро пожаловать');
    } else if (log == 'alex' && pass == '777') {
             alert('Добро пожаловать');
    } else if (log == 'petr' && pass == 'b5678') {
             alert('Добро пожаловать');
    } else {
             alert('Ошибка входа');
    }
}

 document.getElementById('year').onclick = year;
 
 function year() {
     var year = +document.getElementById('num5').value;
     var age = 2017-year;

      if (age >= 16 && age <=160) {
         alert('Добро пожаловать');     
         rez5.innerHTML ='Ваш возраст'+'-'+(age)+'лет';
     } else if (age > 0 && age < 16) {
         alert('вход воспрещен');
         rez5.innerHTML ='Ваш возраст'+'-'+(age)+'лет';
     } else {
         alert('Введите год рождения из 4-х чисел')
     }
 }

document.getElementById('exp').onclick = exp;

function exp() {
    var expAge = document.getElementById('expAge').value;

    if (expAge == '' || expAge < 0) {
        rez6.innerHTML ='Ошибка! Введите стаж.';
    } else if (expAge >= 0 && expAge < 3) {
        rez6.innerHTML ='Надбавка 0%';
    } else if (expAge >= 3 && expAge < 10) {
        rez6.innerHTML ='Надбавка 10%';
    } else if (expAge >= 10 && expAge < 30) {
        rez6.innerHTML ='Надбавка 20%';
    } else if (expAge >= 30) {
        rez6.innerHTML ='Надбавка 30%';
    }
} 

//     if ((17-year)<=17; {
//         alert('мало');
//     }
//     var a = 17-year;
//     var b = 2017-year;
//     if (a>=16 || b>=16) {
//     alert('Добро пожаловать');
//     } 
//     else {
//     alert('Ошибка входа');
//     // rez6.innerHTML ='Вход воспрещен';
//     }

// }

 
//      if (age >= 16) {
//          alert('Wellcome');
//      } else if (age > 0 && age < 16) {
//          alert('Come when you turn 16 ...');
//      } else {
//          alert('enter your age ...')
//      }
//  }

// document.getElementById('btn1').onclick = mEqual;
// function mEqual (){
//     var a=+document.getElementById('num1').value;

//     if (a>=0 && a<100) {
//     //истина
//     console.log(17-a);
//     }

//     else {
 
//     console.log(2017-a);
//     }
// }

//  document.getElementById('year').onclick = year;
 
//  function year() {
//      var year = +document.getElementById('num5').value;
//      var age = 2017-year;

//     if (year>=0 && year<18) {
//     console.log(17-year);
//     rez5.innerHTML ='Ваш возраст'+'-'+(17-year)+'лет';
//     }
//     else if (year>=18 && year<100) {
//     console.log(17-year);
//     rez5.innerHTML ='Неправильно указан год рождения';
//     }
//     else {
//     rez5.innerHTML ='Ваш возраст'+'-'+(2017-year)+'лет';
//     }
//     // if ((17-year)<=17; {
//     //     alert('мало');
//     // }
//     var a = 17-year;
//     var b = 2017-year;
//     if (a>=16 || b>=16) {
//     alert('Добро пожаловать');
//     } 
//     else {
//     alert('Ошибка входа');
//     // rez6.innerHTML ='Вход воспрещен';
//     }

// }