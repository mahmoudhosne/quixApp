'use strict';

let calcDegree = 1;

// function to get dom ele
const getDomEle = function (domClassName) {
  return document.querySelector(`.${domClassName}`);
};
// function to remove class
const removeClass = function (elementName, className) {
  return elementName.classList.remove(`${className}`);
};
// function to add class
const addClass = function (elementName, className) {
  return elementName.classList.add(`${className}`);
};

// function to show message if all radio circles are empty

const showMessage = function (ele) {
  removeClass(ele, 'hidden');
  return (ele.textContent = 'you should choose first');
};

// function to reset all radio circle
const resetAllCircle = function (radioCircles) {
  for (let circle of radioCircles) {
    circle.checked = false;
    circle.checked = false;
    circle.checked = false;
  }
};

// instructions before start any exam
const chooseLang = getDomEle('choose-lang');
(function (ele) {
  return (ele.textContent = 'choose from those languges . . . !');
})(chooseLang);

// btns languges

const jsBtn = getDomEle('js-qs-type');
const cPlusPlusBtn = getDomEle('cpp-qs-type');
const lanuages = ['java script Qustions. !', 'c++ Qustions. !'];

const AllLanguageQuestions = [
  {
    qustionTitle: 'Is javascript the best programming language for the web ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 0,
    type: 0,
    id: 1,
  },
  {
    qustionTitle: 'is java script high level language ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 0,
    type: 0,
    id: 2,
  },
  {
    qustionTitle: 'is java script supported pass values by reference ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 0,
    id: 3,
  },
  {
    qustionTitle: 'is java script supported functional programming ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 0,
    type: 0,
    id: 4,
  },
  {
    qustionTitle: 'how much types of functions in java script ?',
    answer: ['one type', 'two types', 'three types'],
    correctAnswer: 2,
    type: 0,
    id: 5,
  },
  {
    qustionTitle: 'is java script dynamic programming language ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 0,
    type: 0,
    id: 6,
  },
  {
    qustionTitle: 'string in java script is a reference data type ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 0,
    id: 7,
  },
  {
    qustionTitle: 'object in java script is a primitive data type ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 0,
    id: 8,
  },
  {
    qustionTitle: 'Can javascript handle databases ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 0,
    type: 0,
    id: 9,
  },
  {
    qustionTitle: 'Does the arrow function have this keyword ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 0,
    id: 10,
  },
  {
    qustionTitle: 'is java scipt ?',
    answer: [
      'single thraed',
      'Multi paradigm Programming Language',
      'all the above ',
    ],
    correctAnswer: 2,
    type: 0,
    id: 11,
  },
  {
    qustionTitle: 'What are data types in javascript ?',
    answer: ['primitive data type', 'reference data type', 'all the above'],
    correctAnswer: 2,
    type: 0,
    id: 12,
  },
  {
    qustionTitle: 'what is mutate in java scipt ?',
    answer: ['values can change', 'values cannot change', 'all the above'],
    correctAnswer: 0,
    type: 0,
    id: 13,
  },
  {
    qustionTitle: 'what is type coercion in javascript ?',
    answer: [
      'can now type of data dynamic',
      'can now type of data manual',
      'all the above',
    ],
    correctAnswer: 0,
    type: 0,
    id: 14,
  },
  {
    qustionTitle: 'What is type conversion in javascript ?',
    answer: [
      'Variables cannot be converted to another data type',
      'Variables can be converted to \n a new variable and another data type',
      'all the above',
    ],
    correctAnswer: 1,
    type: 0,
    id: 15,
  },
  {
    qustionTitle: 'what is the first citizen in java script ?',
    answer: ['function', 'object', 'array'],
    correctAnswer: 0,
    type: 0,
    id: 16,
  },
  {
    qustionTitle: 'java script support producural programming ?',
    answer: ['yes', 'no', 'don"t now'],
    correctAnswer: 0,
    type: 0,
    id: 17,
  },
  {
    qustionTitle: 'java script support oop ?',
    answer: ['yes', 'no', 'don"t now'],
    correctAnswer: 0,
    type: 0,
    id: 18,
  },
  {
    qustionTitle: 'What does the javascript engine consist of ?',
    answer: ['call stack', 'memory heap', 'all the above'],
    correctAnswer: 0,
    type: 0,
    id: 19,
  },
  {
    qustionTitle:
      'Does the call stack store all\n the variables in the global and then run the execution context ?',
    answer: ['yes', 'no', 'don"t now'],
    correctAnswer: 0,
    type: 0,
    id: 20,
  },
  {
    qustionTitle:
      'Does the memory heap store functions , arrays , objects and just has a refrance in call stack; ?',
    answer: ['yes', 'no', 'don"t now'],
    correctAnswer: 0,
    type: 0,
    id: 21,
  },
  {
    qustionTitle: 'java script is a ...... programming language ?',
    answer: ['interpreter ', 'compiled', 'jit'],
    correctAnswer: 2,
    type: 0,
    id: 22,
  },
  {
    qustionTitle: 'c++ is a dynamic programming language ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 1,
    id: 1,
  },
  {
    qustionTitle: 'c++ have a Garbage collected ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 1,
    id: 2,
  },
  {
    qustionTitle: 'c++ is a high level programming language ?',
    answer: ['yes', 'no', "don't now"],
    correctAnswer: 1,
    type: 1,
    id: 3,
  },
];

// function to get correct answer

let currentCorrectAnswer = 0;
const correctAnswer = function (qustionArr, type, id) {
  for (let i of qustionArr) {
    if (i.type === type) {
      if (i.id === id) {
        currentCorrectAnswer = i.correctAnswer;
      }
    }
  }
};

// when press on any btn => show qustion section
// and current qustions exam
// remove btns sections
// show num qustion
// show reset btn
// show score box
// show first qustion and answers
// show next btn

// current question exam
const currentQustionExam = getDomEle('title-current-lang-exam');

// num qustion and score box
const scoreBox = getDomEle('question-number-box');

let numQustion = getDomEle('current-question-number');
const numberAllQestion = getDomEle('main-question-number');

// btns section
const btnsLangugesSection = getDomEle('choose-type-Q');

// qustion section
const qustionSection = getDomEle('qustion-box');

// back btn
const back = getDomEle('back-btn');

//qustions and answers
const mainQestion = getDomEle('mainQs');
// lables of radio circle
const labelFirstChoose = getDomEle('label-first-choose');
const labelSecondChoose = getDomEle('label-second-choose');
const labelThirdChoose = getDomEle('label-third-choose');

//radio check
const firstRadioCircle = document.getElementById(1);
const secondRadioCircle = document.getElementById(2);
const thirdRadioCircle = document.getElementById(3);

//next btn
const nextQustion = getDomEle('next');

// function to get all count qustions for any qustion type based in
// languges array

//

//
// To add any language or material,
//  just add the name of the image of the language or material in the matrix,
//  then add the question, and its test will appear when clicking on the image
const arr = ['java.png', 'c++.png', 'python.png', 'php.png'];
const languagePhoto = document.querySelector('.language-photo');

let typeQustion = 0;
let idQ;

const countQ = [];
const countAllQ = function (arr, count, type) {
  for (let i of arr) {
    const loopThrougObj = Object.entries(i);
    for (let [key, value] of loopThrougObj) {
      if (key === 'type') {
        if (value === type) {
          count.push(value);
        }
      }
    }
  }
};

//In this function ,
//  there are all the variables from which the
//  "hidden" class is deleted or added

const variablesWhoAddOrRemovedHidden = function () {
  addClass(chooseLang, 'hidden');
  removeClass(qustionSection, 'hidden');
  removeClass(currentQustionExam, 'hidden');
  addClass(btnsLangugesSection, 'hidden');
  removeClass(scoreBox, 'hidden');
  removeClass(reset, 'hidden');
  removeClass(nextQustion, 'hidden');
  removeClass(back, 'hidden');
};

for (let i of arr) {
  const photo = document.createElement('img');
  photo.src = `${i}`;
  languagePhoto.appendChild(photo);
  photo.addEventListener('click', function () {
    let sliceNamePhoto = photo.src.slice(photo.src.lastIndexOf('/') + 1);
    if (sliceNamePhoto === arr[0]) {
      idQ = 1;
      typeQustion = 0;
      numQustion.textContent = idQ;
      variablesWhoAddOrRemovedHidden();
      currentQustionExam.textContent = lanuages[0];
      showQustionAndAnswers(AllLanguageQuestions, typeQustion, idQ);
      countAllQ(AllLanguageQuestions, countQ, typeQustion);
      numberAllQestion.textContent = countQ.length;
    } else if (sliceNamePhoto === arr[1]) {
      idQ = 1;
      typeQustion = 1;
      numQustion.textContent = idQ;
      variablesWhoAddOrRemovedHidden();
      currentQustionExam.textContent = lanuages[1];
      showQustionAndAnswers(AllLanguageQuestions, typeQustion, idQ);
      countAllQ(AllLanguageQuestions, countQ, typeQustion);
      numberAllQestion.textContent = countQ.length;
    }
  });
}

const showQustionAndAnswers = function (arr, type, idQ) {
  for (let i of arr) {
    if (i.type === type) {
      if (i.id === idQ) {
        mainQestion.textContent = i.qustionTitle;
        labelFirstChoose.textContent = i.answer[0];
        labelSecondChoose.textContent = i.answer[1];
        labelThirdChoose.textContent = i.answer[2];
      }
    }
  }
};

const endMassege = getDomEle('message');

// radio circle
const radioCircles = [firstRadioCircle, secondRadioCircle, thirdRadioCircle];
let checkedCircle = 0;
const getRadioChecked = function (arrRadioCircle) {
  for (let i of arrRadioCircle) {
    if (i.checked) {
      if (i.value === 'first') {
        checkedCircle = 0;
      } else if (i.value === 'second') {
        checkedCircle = 1;
      } else if (i.value === 'third') {
        checkedCircle = 2;
      }
    }
  }
};

// emotions to show in the massege end

const smileEmojy = getDomEle('smile-emotion');
const sadEmojy = getDomEle('sad-emotion');

// next click

nextQustion.addEventListener('click', function () {
  if (
    firstRadioCircle.checked ||
    secondRadioCircle.checked ||
    thirdRadioCircle.checked
  ) {
    endMassege.textContent = '';
    addClass(endMassege, 'hidden');
    getRadioChecked(radioCircles);
    correctAnswer(AllLanguageQuestions, typeQustion, idQ);
    idQ++;
    resetAllCircle(radioCircles);
    showQustionAndAnswers(AllLanguageQuestions, typeQustion, idQ);
    if (checkedCircle === currentCorrectAnswer) {
      calcDegree++;
      numQustion.textContent = idQ;
    } else {
      numQustion.textContent = idQ;
    }
    if (idQ > countQ.length) {
      idQ--;
      numQustion.textContent = idQ;
      addClass(qustionSection, 'hidden');
      addClass(nextQustion, 'hidden');
      removeClass(endMassege, 'hidden');
      addClass(back, 'hidden');
      endMassege.textContent =
        calcDegree >= countQ.length / 2
          ? `${smileEmojy.textContent} Congratulations, you passed the test. Your score is ${calcDegree}`
          : `${sadEmojy.textContent}  Your score did not pass the test the degree is ${calcDegree}`;
    }
  } else {
    showMessage(endMassege);
  }
});

// back btn
back.addEventListener('click', function () {
  idQ = idQ > 1 ? idQ - 1 : 1;
  calcDegree = calcDegree > 1 ? calcDegree - 1 : 0;
  numQustion.textContent = idQ;
  showQustionAndAnswers(AllLanguageQuestions, typeQustion, idQ);
});

// reset btn
const reset = getDomEle('reset-btn');

reset.addEventListener('click', function () {
  addClass(reset, 'hidden');
  numQustion.textContent = 0;
  numberAllQestion.textContent = '';
  addClass(scoreBox, 'hidden');
  currentQustionExam.textContent = '';
  addClass(currentQustionExam, 'hidden');
  chooseLang.textContent = 'Choose From Those Languges . . . !';
  removeClass(chooseLang, 'hidden');
  mainQestion.textContent = '';
  labelFirstChoose.textContent = '';
  labelSecondChoose.textContent = '';
  labelThirdChoose.textContent = '';
  resetAllCircle(radioCircles);
  addClass(qustionSection, 'hidden');
  addClass(nextQustion, 'hidden');
  removeClass(btnsLangugesSection, 'hidden');
  endMassege.textContent = '';
  addClass(endMassege, 'hidden');
  addClass(back, 'hidden');
  typeQustion = 0;
  idQ = 1;
  calcDegree = 1;
  currentCorrectAnswer = 0;
  countQ.length = 0;
});
