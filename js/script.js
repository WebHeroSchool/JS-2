let question1 = {
  question: 'What is the capital of Russia?',
  answer: 'Moscow'
}
question1.currectAnswer = 'Moscow';
question1.answer=['Moscow','Minsk','New York'];
console.log(question1);


let question2 = {
  question: 'Имя писателя Пушкина?',
  answer: 'Александр',
  currectAnswer: 'c'
}
question2.answer=['Олег','Андрей'];
console.log(question2);

let question3 = {
  question: 'Сколько спутников у Земли?',
  answer: '1',
  currectAnswer: '1'
}
question3.answer=['2','3','0'];
console.log(question3);

let question4 = {
  question: 'Как называется спутник Земли?',
  answer: 'Луна',
  currectAnswer: 'Луна'
}
question4.answer=['Сатурн','Венера'];
console.log(question4);

//преобразование в массив
let arr1=Object.entries(question1);
arr1.forEach(([key,value]) =>{
console.log(key);
console.log(value);
});
let arr2=Object.entries(question2);
arr2.forEach(([key,value]) =>{
console.log(key);
console.log(value);
});
let arr3=Object.entries(question3);
arr3.forEach(([key,value]) =>{
console.log(key);
console.log(value);
});
let arr4=Object.entries(question4);
arr4.forEach(([key,value]) =>{
console.log(key);
console.log(value);
});


//объединение массивов
let arr=arr1.concat(arr2,arr3,arr4);
console.log(arr);

//поиск 
/*
arr.forEach((item)=>{
  if(item.currectAnswer === 'c'){
    console.log(item);
  }
});*/

const otbor=arr.filter((item) => item === 'c');
console.log(otbor);
