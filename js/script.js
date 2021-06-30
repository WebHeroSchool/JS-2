let question1 = {
  question: 'What is the capital of Russia?',
  answer: 'Moscow'
}
question1.correctAnswer = 'Moscow';
question1.answer=['Moscow','Minsk','New York'];


let question2 = {
  question: 'Третья по счету буква в англ алфавите',
  answer: 'c',
  correctAnswer: 'c'
}
question2.answer=['c','d'];


let question3 = {
  question: 'Сколько спутников у Земли?',
  answer: '1',
  correctAnswer: '1'
}
question3.answer=['2','1','0'];


let question4 = {
  question: 'Как называется спутник Земли?',
  answer: 'Луна',
  correctAnswer: 'Луна'
}
question4.answer=['Сатурн','Луна'];

const arr=[];
arr.push(question1,question2,question3,question4);
console.log(arr);

arr.forEach((item) => {
  if(item.correctAnswer==='c'){
  console.log(item);
  }
});





