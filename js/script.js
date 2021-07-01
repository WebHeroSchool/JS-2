let question1 = {
  question: 'What is the capital of Russia?',
  answer: 'Moscow'
}
question1.correctAnswer = 'A';
question1.answer=['A:Moscow','B:Minsk','C:New York'];


let question2 = {
  question: 'Сколько месяцев в году?',
  answer: '12',
  correctAnswer: 'C'
}
question2.answer=['A:10','B:11','C:12'];


let question3 = {
  question: 'Сколько спутников у Земли?',
  answer: '1',
  correctAnswer: 'A'
}
question3.answer=['A:1','B:2','C:0'];


let question4 = {
  question: 'Как называется спутник Земли?',
  answer: 'Луна',
  correctAnswer: 'B'
}
question4.answer=['A:Сатурн','B:Луна','C:Венера'];

//созд массива из объектов(вопросов)
const arr=[];
arr.push(question1,question2,question3,question4);
console.log(arr);
//вывод ответов,соотв "С"
arr.forEach((item) => {
  if(item.correctAnswer==='C'){
  console.log(item);
  }
});

//алгоритм для сравнения ответов польз с правильными
let yourAnswers=['A','B','C','B'];
let score =0;

arr.map((item, index) => {
  if (item.correctAnswer===yourAnswers[index]) {
    console.log(yourAnswers[index], '- Правильно');
    score++;
  } else {
    console.log(yourAnswers[index], '- Неправильно');
  }
})

//счетчик верных ответов

const question = document.getElementById('question');

function buildQuiz(score){
  question.innerHTML = 'Правильных ответов  ' + score
  question.style.color = 'red'
}
buildQuiz(score)

