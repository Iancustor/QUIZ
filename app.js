const InputEl = document.querySelectorAll("input");

const SignupBtn = document.querySelector(".SignupBtn");
const QuizSection1 = document.querySelector(".QuizSection1");
const QuizSection2 = document.querySelector(".QuizSection2");

// CALLING SUBJECT BTNS
const English = document.querySelector(".EngBtn");
const Math = document.querySelector(".MathBtn");
const Science = document.querySelector(".SciBtn");
const Sst = document.querySelector(".SstBtn");

const questionContainer = document.querySelector(".Qtncontainer");
const nextBtn = document.querySelector(".nextBtn");

const EngQuestionBank = [
  {
    quiz: ` She is not shabby, she is not stupid.(Join Using ..... neither ...nor ...)`,
    options: {
      A: "Shes  shabby neither  nor stupid",
      B: "Shabby she not neither she is nor stupid",
      C: "Shes neither shabby nor stupid",
      D: "Shes neither shabby  and nor stupid",
    },
    answer: "C",
  },
  {
    quiz: ` She is not shabby, she is not stupid.(Join Using ..... neither ...nor ...)`,
    options: {
      A: "Shes  shabby neither  nor stupid",
      B: "Shabby she not neither she is nor stupid",
      C: "Shes neither shabby nor stupid",
      D: "Shes neither shabby  and nor stupid",
    },
    answer: "C",
  },
  {
    quiz: "The teacher from whom I borrowed a red pen has left (Rewrite and begin : The teachers .....) ",
    options: {
      A: "The teacher I borrowed a red pen has left",
      B: "The teachers from whom I borrowed a red pen have left",
      C: "The teachers with whom I took a pen has left",
      D: "The teacher who gave me a red has gone",
    },
    answer: "B",
  },
  {
    quiz: `"Stop playing , boys" ordered the coach.(Begin : The Coach ....)`,
    options: {
      A: "The coach order the boys to stop playing",
      B: "The coach told the boys to stop playing",
      C: "The coach  ordered the boys that they  should stop  to play",
      D: "The coach ordered the boys to stop playing",
    },
    answer: "D",
  },
  {
    quiz: `"Ethan asked Dube where he had put his bag"(Rewrite ending : ....?" Ethan asked.)`,
    options: {
      A: "Where have you put my bag, Ethan asked",
      B: "where is my bag Ethan asked",
      C: "where dube asked  he placed his bag",
      D: "Ethan asked Dube  that where he had put his bag",
    },
    answer: "A",
  },
  {
    quiz: `"Kagame milked the cows." (Begin : The cows .....)`,
    options: {
      A: "The cows  Kagame milked them",
      B: "The cows were milked and it was Kagame ",
      C: "The cows were milked by Kagame ",
      D: "The cows were milked by him Kagame ",
    },
    answer: "C",
  },
];

const MathQuestionBank = [
  {
    quiz: ` The cost of three pens is sh.9000. How many pens will one buy with  sh.15000 ?`,
    options: {
      A: "3 pens",
      B: "8 pens",
      C: "5 pens",
      D: "4 pens",
    },
    answer: "C",
  },
  {
    quiz: ` The cost of three pens is sh.9000. How many pens will one buy with  sh.15000 ?`,
    options: {
      A: "3 pens",
      B: "8 pens",
      C: "5 pens",
      D: "4 pens",
    },
    answer: "C",
  },
  {
    quiz: "Betty is 3 years older than Ritah. The sum of their age is 19. How old is Betty ? ",
    options: {
      A: "5 years ",
      B: "11 years",
      C: "20 years",
      D: "15 years",
    },
    answer: "B",
  },
  {
    quiz: `An Examination which took 2 and Half hours ended at 5:30pm. At What did the examination start.`,
    options: {
      A: "3:00 pm",
      B: "1:00 pm",
      C: "6:00 pm",
      D: "7:00 pm",
    },
    answer: "A",
  },
  {
    quiz: `Given that K and 37 deg are complementally angles. Find the value of K.`,
    options: {
      A: "40 deg",
      B: "35 deg",
      C: "20 deg",
      D: "53 deg",
    },
    answer: "D",
  },
  {
    quiz: `The base area of a cube is 28cm squared. Find the Volume of the cube`,
    options: {
      A: "120 cm cubed",
      B: "140 cm cubed",
      C: "30 cm cubed",
      D: "80 cm cubed ",
    },
    answer: "B",
  },
];

const SciQuestionBank = [
  {
    quiz: ` Name the force that  is reduced by synovial fluid in a joint.`,
    options: {
      A: "Gravitational force",
      B: "Friction force",
      C: "Kinectic force",
      D: "Pressure",
    },
    answer: "B",
  },
  {
    quiz: ` Name the force that  is reduced by synovial fluid in a joint.`,
    options: {
      A: "Gravitational force",
      B: "Friction force",
      C: "Kinectic force",
      D: "Pressure",
    },
    answer: "B",
  },
  {
    quiz: "What part of the Human skeleton is protected by the Vertebral column ? ",
    options: {
      A: "Bones",
      B: "Skull",
      C: "Spinal cord",
      D: "Ribs",
    },
    answer: "C",
  },
  {
    quiz: `Define the term pitch as used in sound`,
    options: {
      A: "Pitch is the highness and lawness of Eco",
      B: "Pitch is the form of energy produced by vibration",
      C: "Pitch is the form of vibration produced by sound",
      D: "Pitch is the highness and lawness of sound",
    },
    answer: "D",
  },
  {
    quiz: `How is sound produced when a girl is talking ?`,
    options: {
      A: "By enlargement of the Vocal code",
      B: "By vibration of the Ambrico code",
      C: "By vibration of the Vocal code",
      D: "By Enlargement of the Gullet",
    },
    answer: "C",
  },
  {
    quiz: `State the function of the Liver as abody organism`,
    options: {
      A: "To filter urine from the blood",
      B: "To remove toxins from the blood ",
      C: "To add toxins in the blood ",
      D: "To center blood in the kidneys ",
    },
    answer: "B ",
  },
];

const SstQuestionBank = [
  {
    quiz: ` Which is the smallest continent in the World ?`,
    options: {
      A: "Austria",
      B: "Africa",
      C: "Uganda",
      D: "Australia",
    },
    answer: "D",
  },
  {
    quiz: ` Which is the smallest continent in the World ?`,
    options: {
      A: "Austria",
      B: "Africa",
      C: "Uganda",
      D: "Australia",
    },
    answer: "D",
  },
  {
    quiz: "Why does the government discourage poaching in a country ? ",
    options: {
      A: "To generate Income",
      B: "To promote Tourism",
      C: "To develop money",
      D: "To reduce thefty",
    },
    answer: "B",
  },
  {
    quiz: `What is population cencus ?`,
    options: {
      A: "Population cencus is the counting of people in an area",
      B: "Population cencus is the actual  number of people in an area",
      C: "Population cencus is the counting of animals in an area",
      D: "Population cencus is the total number of people  per square km",
    },
    answer: "A",
  },
  {
    quiz: `Give two enclave countries`,
    options: {
      A: "Dubai, Ethopia",
      B: "South Africa, China",
      C: "Madagascar, Zambia",
      D: "Uganda, Eritrea",
    },
    answer: "D",
  },
  {
    quiz: `Why is the Equator marked at 0 degres ?`,
    options: {
      A: "The Equator has latitudes and longitudes",
      B: "The Equator runs all over Uganda",
      C: "The Equator divides Uganda into two parts",
      D: "The Equator runs East and West",
    },
    answer: "C",
  },
];

let questionNumber = 0;

// EVENT LISTINERS
SignupBtn.addEventListener("click", SignupFunction);

NewEngQuestion();
English.addEventListener("click", function EnglishFunction() {
  alert("English");
  QuizSection2.style.display = "none";
  NewEngQuestion();
  nextBtn.style.display = "flex";
  questionContainer.style.display = "flex";

  // DURATION
  const displayDuration = 20000;

  setInterval(() => {
    NewEngQuestion();
  }, displayDuration);
  nextBtn.addEventListener("click", NewEngQuestion);
});
Math.addEventListener("click", function MathFunction() {
  alert("Math");
  QuizSection2.style.display = "none";
  NewMathQuestion();
  nextBtn.style.display = "flex";
  questionContainer.style.display = "flex";
  const displayDuration = 10000;
  setInterval(() => {
    NewMathQuestion();
  }, displayDuration);
  nextBtn.addEventListener("click", NewMathQuestion);
});

Science.addEventListener("click", function ScienceFunction() {
  alert("Science");
  QuizSection2.style.display = "none";
  NewSciQuestion();
  nextBtn.style.display = "flex";
  questionContainer.style.display = "flex";

  const displayDuration = 10000;

  setInterval(() => {
    NewSciQuestion();
  }, displayDuration);
  nextBtn.addEventListener("click", NewSciQuestion);
});

Sst.addEventListener("click", function SstFunction() {
  alert("Social Studies");
  QuizSection2.style.display = "none";
  NewSstQuestion();
  nextBtn.style.display = "flex";
  questionContainer.style.display = "flex";

  const displayDuration = 10000;

  setInterval(() => {
    NewSstQuestion();
  }, displayDuration);
  nextBtn.addEventListener("click", NewSstQuestion);
});

// FUNCTIONS

function displayMessage() {
  const message = document.querySelector(".message");
  console.log(message);
  message.textContent = "message";
  message.classList.add("show");
}

function SignupFunction() {
  QuizSection1.style.display = "none";
  QuizSection2.style.display = "flex";
  alert("Logged In");
}

function NewEngQuestion() {
  if (questionNumber === 5) {
    window.location = "scores.html";
    alert("English Questions Are Over");
  }

  questionNumber++;
  console.log(questionNumber);

  questionContainer.innerHTML = `
   <h2 class="question" id="question">${EngQuestionBank[questionNumber].quiz}</h2>
    <ul class="solution">
      <li><span class="Optnz">A.</span> <span >${EngQuestionBank[questionNumber].options.A}</span></li>
      <li><span class="Optnz">B.</span> <span >${EngQuestionBank[questionNumber].options.B}</span></li>
      <li><span class="Optnz">C.</span> <span >${EngQuestionBank[questionNumber].options.C}</span></li>
      <li><span class="Optnz">D.</span> <span >${EngQuestionBank[questionNumber].options.D}</span></li>
    </ul>

`;
  const optionAnswers = document.querySelectorAll("li");

  // FOR EACH WITH EVENT LISTNER
  optionAnswers.forEach((optionAnswer) => {
    optionAnswer.addEventListener("click", function EngOption() {
      console.log("clicked Option");
      const optionContent = optionAnswer.textContent.split(". ")[0];
      const currentQuestion = EngQuestionBank[questionNumber];
      const answer = currentQuestion.answer;
      console.log(optionContent, answer);
      let score = 0;
      if (optionContent == answer) {
        optionAnswer.style.backgroundColor = "green";
        console.log("its a correct Answer");
        alert(`${optionContent} ,  Is a correct Answer`);
        NewEngQuestion();
        score++;
        console.log(score);
      } else {
        console.log("its a wrong answer");
        optionAnswer.style.backgroundColor = "red";
        alert(`${optionContent} , Is a wrong answer`);
        NewEngQuestion();
      }
    });
  });
}
function NewSciQuestion() {
  // if (questionNumber === 5) {
  //   alert("Science Questions Are Over");
  //   nextBtn.textContent = "Restart";
  //   nextBtn.addEventListener("click", function () {
  //     console.log("restart clicked");
  //   });
  // }

  questionNumber++;
  console.log(questionNumber);
  // questionIndex = Math.floor(Math.random() * SciQuestionBank.length);
  // console.log(questionIndex);
  questionContainer.innerHTML = `
    <h2 class="question" id="question">${SciQuestionBank[questionNumber].quiz}</h2>
     <ul class="solution">
       <li><span>A.</span> <span>${SciQuestionBank[questionNumber].options.A}</span></li>
       <li><span>B.</span> <span>${SciQuestionBank[questionNumber].options.B}</span></li>
       <li><span>C.</span> <span>${SciQuestionBank[questionNumber].options.C}</span></li>
       <li><span>D.</span> <span>${SciQuestionBank[questionNumber].options.D}</span></li>
     </ul>

 `;
  const optionAnswers = document.querySelectorAll("li");

  // FOR EACH WITH EVENT LISTNER
  optionAnswers.forEach((optionAnswer) => {
    optionAnswer.addEventListener("click", function SciOption() {
      console.log("clicked Option");
      const optionContent = optionAnswer.textContent.split(". ")[0];
      const currentQuestion = SciQuestionBank[questionNumber];
      const answer = currentQuestion.answer;
      console.log(optionContent, answer);
      let score = 0;
      if (optionContent == answer) {
        optionAnswer.style.backgroundColor = "green";
        console.log("its a correct Answer");
        alert(`${optionContent} ,  Is a correct Answer`);
        NewSciQuestion();
        score++;
        console.log(score);
      } else {
        console.log("its a wrong answer");
        optionAnswer.style.backgroundColor = "red";
        alert(`${optionContent} , Is a wrong answer`);
        NewSciQuestion();
      }
    });
  });
}
function NewMathQuestion() {
  // if (questionNumber === 5) {
  //   alert("Math Questions Are Over");
  //   nextBtn.textContent = "Restart";
  //   nextBtn.addEventListener("click", function () {
  //     console.log("restart clicked");
  //   });
  // }

  questionNumber++;
  console.log(questionNumber);
  // questionIndex = Math.floor(Math.random() * MathQuestionBank.length);
  // console.log(questionIndex);
  questionContainer.innerHTML = `
    <h2 class="question" id="question">${MathQuestionBank[questionNumber].quiz}</h2>
     <ul class="solution">
       <li><span>A.</span> <span>${MathQuestionBank[questionNumber].options.A}</span></li>
       <li><span>B.</span> <span>${MathQuestionBank[questionNumber].options.B}</span></li>
       <li><span>C.</span> <span>${MathQuestionBank[questionNumber].options.C}</span></li>
       <li><span>D.</span> <span>${MathQuestionBank[questionNumber].options.D}</span></li>
     </ul>

 `;
  const optionAnswers = document.querySelectorAll("li");

  // FOR EACH WITH EVENT LISTNER
  optionAnswers.forEach((optionAnswer) => {
    optionAnswer.addEventListener("click", function MathOption() {
      console.log("clicked Option");
      const optionContent = optionAnswer.textContent.split(". ")[0];
      const currentQuestion = MathQuestionBank[questionNumber];
      const answer = currentQuestion.answer;
      console.log(optionContent, answer);
      let score = 0;
      if (optionContent == answer) {
        optionAnswer.style.backgroundColor = "green";
        console.log("its a correct Answer");
        alert(`${optionContent} ,  Is a correct Answer`);
        NewMathQuestion();
        score++;
        console.log(score);
      } else {
        console.log("its a wrong answer");
        optionAnswer.style.backgroundColor = "red";
        alert(`${optionContent} , Is a wrong answer`);
        NewMathQuestion();
      }
    });
  });
}
function NewSstQuestion() {
  // if (questionNumber === 5) {
  //   alert("Sst Questions Are Over");
  //   nextBtn.textContent = "Restart";
  //   nextBtn.addEventListener("click", function () {
  //     console.log("restart clicked");
  //   });
  // }

  questionNumber++;
  console.log(questionNumber);
  // questionIndex = Math.floor(Math.random() * SstQuestionBank.length);
  // console.log(questionIndex);
  questionContainer.innerHTML = `
    <h2 class="question" id="question">${SstQuestionBank[questionNumber].quiz}</h2>
     <ul class="solution">
       <li><span>A.</span> <span>${SstQuestionBank[questionNumber].options.A}</span></li>
       <li><span>B.</span> <span>${SstQuestionBank[questionNumber].options.B}</span></li>
       <li><span>C.</span> <span>${SstQuestionBank[questionNumber].options.C}</span></li>
       <li><span>D.</span> <span>${SstQuestionBank[questionNumber].options.D}</span></li>
     </ul>

 `;
  const optionAnswers = document.querySelectorAll("li");

  // FOR EACH WITH EVENT LISTNER
  optionAnswers.forEach((optionAnswer) => {
    optionAnswer.addEventListener("click", function SstOption() {
      console.log("clicked Option");
      const optionContent = optionAnswer.textContent.split(". ")[0];
      const currentQuestion = SstQuestionBank[questionNumber];
      const answer = currentQuestion.answer;
      console.log(optionContent, answer);
      let score = 0;
      if (optionContent == answer) {
        optionAnswer.style.backgroundColor = "green";
        console.log("its a correct Answer");
        alert(`${optionContent} ,  Is a correct Answer`);
        NewSstQuestion();
        score++;
        console.log(score);
      } else {
        console.log("its a wrong answer");
        optionAnswer.style.backgroundColor = "red";
        alert(`${optionContent} , Is a wrong answer`);
        NewMathQuestion();
      }
    });
  });
}
