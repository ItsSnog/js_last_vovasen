// сума чисел від 1 до 4
function sum_1(a){
	var sum = 0;
	for (var i = 0; i < a; i++){
		sum +=i;
	}
	return sum;
}
console.log("Сума чисел від 1 до 3 = " + sum_1(4));

// сума чисел від 20 до 220
function sum_2(a, b){
	var sum = 0;
	for (var i = a; i < b; i++){
		sum += i;
	}
	return sum;
}
console.log("Сума чисел від 20 до 220 = " + sum_2(20, 221));

//парні числа від 1 до 20 з використанням continue
function even_1(a, b){
	for (var i = a; i < b; i++){
		if (i % 2 == 1){
			continue;
		}
		console.log(i);
	}
}
even_1(1, 21);

//парні числа від 1 до 20 без continue
function even_2(a, b){
	for (var i = a; i < b; i++){
		if (i % 2 == 0){
			console.log(i);
		}
	}
}
even_2(1, 21);

//непарні числа від 1 до 30 з використання while
function odd(a, b){
	while(a < b){
		if (a%2!==0){
			console.log(a);
		}
		a++;
	}
}
odd(10, 30)

//цикл від 1 до 15 і зупинитись на певному числі
function my_day(a){
	for(var i = 1; i < 15; i++){
		if(i===a){
			break;
		} else {
			console.log(i);
		}
	}
}
my_day(8);

//переписати цикл for на while
function rewrite(a){
	while(a<5){
		console.log(`number ${a} =)`);
		a++;
	}
}
rewrite(0);

//ввести число більше 100
function more_100_1(){
	var user = 0;
	while(user <= 100){
		user = prompt("ввести число більше 100","196");
	}
	console.log("Ви ввели число більше 100")
}
more_100_1();

//ввести число більше 100 do while
function more_100_2(a){
	do{
      var user_number = prompt('Введіть число більше 100','169')
    }	while(user_number < a){}
	console.log("ви ввели число = " + user_number)
}
	
more_100_2(100);

//показати решітки))
function diez(){
	var diez = "#";
	for (var i = 0; i < 8; i++){
		console.log(diez);
		diez += diez[i];
	}
}
diez();