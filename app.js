let title1 = 'Q1';
console.log(title1);

let nickname = 'yaa';
let age = 29;
let selfint = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(selfint);


let title2 = 'Q2';
console.log(title2);

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let langtext = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(langtext);


let title3 = 'Q3';
console.log(title3);

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };
console.log(user.age);


let title4 = 'Q4';
console.log(title4);

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];
  console.log(playerList[1].favorites[1]);


let title5 = 'Q5';
console.log(title5);

let sum = (playerList[0].age + playerList[1].age + playerList[2].age);
console.log(sum / 3);


let title6 = 'Q6';
console.log(title6);

function sayHello() {
    let hello = 'Hello';
    console.log(hello);
}
sayHello();

let sayWorld = function(){
    let World = 'World';
    console.log(World);
}
sayWorld();


let title7 = 'Q7';
console.log(title7);

user.birthday = '2000-09-27';
user.greeting = function() {
    console.log('Hello!');
};
console.log(user);
user.greeting();


let title8 = 'Q8';
console.log(title8);

let calc = {};
calc.add = function getArea(x,y) {
    let add = x + y;
    console.log(add);
}
calc.add(3,4);

calc.subtract = function getArea(x,y) {
    let sub = x - y;
    console.log(sub);
}
calc.subtract(11,1);

calc.multiply = function getArea(x,y) {
    let mul = x * y;
    console.log(mul);
}
calc.multiply(7,7);

calc.divide = function getArea(x,y) {
    let div = x / y;
    console.log(div);
}
calc.divide(15,3);


let title9 = 'Q9';
console.log(title9);

calc.remainder = function getArea(x,y){
    let rem = x % y;
    return rem;
}
console.log(5 + 'を' + 3 + 'で割った余りは' + (calc.remainder(5,3)) + 'です。');


let title10 = 'Q10';
console.log(title10);

/*function foo() {
    let x = 1;  =>関数内でしか参照できないローカル変数(スコープが有効)
  }
  console.log(x);  =>スコープの有効範囲外のため変数を参照できずエラーが出る*/


let title11 = 'Q11';
console.log(title11);

const integer = Math.floor(Math.random() * 9);
console.log(integer);


let title12 = 'Q12';
console.log(title12);

function alertmsg(){
  console.log('Hello World!');
}
setTimeout(alertmsg,3000);


let title13 = 'Q13';
console.log(title13);

let num = -8;
if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else if (num === 0) {
    console.log('num is 0');
}


let title14 = 'Q14';
console.log(title14);

let numbers = [];
for (let i = 0; i < 100; i++) {
    numbers.push(i);
}
console.log(numbers);


let title15 = 'Q15';
console.log(title15);

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let mx = 0; mx < mixed.length; mx++) {
    let value = mixed[mx]; 

    if (typeof value === 'string') { 
    console.log('not number');
} else if (value % 2 === 1) {
    console.log('odd');
} else {
    console.log('even');
}
};