import Typed from "typed.js";
let questionNumber = 0;
const typed = new Typed("#welcome", {
  strings: [
    "<i>Your Welcome To The Quiz Arena ,</i>  Insert in your Name and Password .",
    ". . . Enjoy the Ultimate power of The Brain ! ",
    ". . .  sign In to continue to the Next Page !!",
    "!! THE QUIZ ARENA !!",
  ],

  typeSpeed: 55,
});

// Questions
const QuestionBank = [
  {
    cat_id: 1,
    category: "English",
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
    cat_id: 1,
    category: "English",
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
    cat_id: 1,
    category: "English",
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
    cat_id: 1,
    category: "English",
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
    cat_id: 1,
    category: "English",
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
    cat_id: 1,
    category: "English",
    quiz: `"Kagame milked the cows." (Begin : The cows .....)`,
    options: {
      A: "The cows  Kagame milked them",
      B: "The cows were milked and it was Kagame ",
      C: "The cows were milked by Kagame ",
      D: "The cows were milked by him Kagame ",
    },
    answer: "C",
  },
  {
    cat_id: 2,
    category: "Math",
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
    cat_id: 2,
    category: "Math",
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
    cat_id: 2,
    category: "Math",
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
    cat_id: 2,
    category: "Math",
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
    cat_id: 2,
    category: "Math",
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
    cat_id: 2,
    category: "Math",
    quiz: `The base area of a cube is 28cm squared. Find the Volume of the cube`,
    options: {
      A: "120 cm cubed",
      B: "140 cm cubed",
      C: "30 cm cubed",
      D: "80 cm cubed ",
    },
    answer: "B",
  },
  {
    cat_id: 3,
    category: "Science",
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
    cat_id: 3,
    category: "Science",
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
    cat_id: 3,
    category: "Science",
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
    cat_id: 3,
    category: "Science",
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
    cat_id: 3,
    category: "Science",
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
    cat_id: 3,
    category: "Science",
    quiz: `State the function of the Liver as abody organism`,
    options: {
      A: "To filter urine from the blood",
      B: "To remove toxins from the blood ",
      C: "To add toxins in the blood ",
      D: "To center blood in the kidneys ",
    },
    answer: "B ",
  },
  {
    cat_id: 4,
    category: "Sst",
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
    cat_id: 4,
    category: "Sst",
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
    cat_id: 4,
    category: "Sst",
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
    cat_id: 4,
    category: "Sst",
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
    cat_id: 4,
    category: "Sst",
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
    cat_id: 4,
    category: "Sst",
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

// signing
const SectionContainer = document.querySelector(".home-section");
console.log(SectionContainer);
const InputElms = document.querySelectorAll(".todoInput");

const QuizForm = document.getElementById("QuizForm");
// console.log(InputElms, QuizForm);

// EVENT LISTENERS
QuizForm.addEventListener("submit", function submitForm(e) {
  e.preventDefault();
  const InputValues = InputElms.values;
  // console.log(InputValues);

  if (!InputElms.values > 0) {
    // console.log("Failled");
  } else {
    // console.log("logged in");
    InputElms.values = ``;
    displaySection2();
  }
});
// const storedSignIn = localStorage.getItem("cart");

// let signIn = storedSignIn ? storedSignIn : [];

// // Add Items to Local storage
// localStorage.setItem("logged In", InputElms);

// Subject EL

function displaySection2() {
  SectionContainer.innerHTML = ` 
   <section class="QuizSection2">
  <div class="SubjectBtns">
    <button id="subjectButtons" data-id="1" class="EngBtn">ENGLISH</button>
    <span class="text-white text-3xl">?</span>
    <button id="subjectButtons" data-id="2" class="MathBtn">MATH</button>
  <span class="text-white text-3xl">?</span>
    <button id="subjectButtons" data-id="3" class="SciBtn">SCIENCE</button>
  <span class="text-white text-3xl">?</span>
    <button id="subjectButtons" data-id="4" class="SstBtn">SST</button>
  </div>
</section>
   `;

  const note = document.querySelector(".note");
  console.log(note);
  function showNotification(message) {
    note.textContent = message;
    note.style.left = "10px";
    setTimeout(() => {
      note.style.left = "-300px";
    }, 3000);
  }
  //buttons For each
  const buttons = document.querySelectorAll("#subjectButtons");
  // console.log(buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", function selectSubject(e) {
      const btnId = e.target.dataset.id;
      // console.log(QuestionBank, btnId);

      // filtering questions according to subject click
      const filteredQuestions = QuestionBank.filter((question) => {
        return question.cat_id == btnId;
      });
      //on page load
      renderQuestion(filteredQuestions);
      console.log(filteredQuestions);
      showNotification(
        `${filteredQuestions[questionNumber].category} Questions`
      );
      SectionContainer.style.display = "none";
      nextBtn.style.display = "flex";
      questionContainer.style.display = "flex";
      nextBtn.addEventListener("click", function NextQuestion() {
        renderQuestion(filteredQuestions);
      });
      console.log(nextBtn);
    });
  });
  const questionContainer = document.querySelector(".Qtncontainer");
  console.log(questionContainer);
  const nextBtn = document.querySelector(".nextBtn");
  console.log("Nextbtn clicked");

  // render questions function
  let score = 0;
  function renderQuestion(filteredQuestions) {
    questionNumber++;
    if (questionNumber == 6) {
      showNotification(` Questions are done`);
      // alert("questions are done");
      questionContainer.innerHTML = `

      <div class="ScoredDiv">
           <h2 class="scoredHd">Overall Score</h2>
           <p class="score flex align-center justify-center ">${score}</p>
         </div>
         `;
      nextBtn.textContent = "Next Subject";
      nextBtn.addEventListener("click", function nextSubject() {
        console.log("Going to next subject");
      });
    }

    questionContainer.innerHTML = `
    <h3 class="filteredSubject">${filteredQuestions[questionNumber].category}</h3>
       <h2 class="question" id="question">${filteredQuestions[questionNumber].quiz}</h2>
        <ul class="solution">
          <li><span class="Optnz">A.</span> <span >${filteredQuestions[questionNumber].options.A}</span></li>
          <li><span class="Optnz">B.</span> <span >${filteredQuestions[questionNumber].options.B}</span></li>
          <li><span class="Optnz">C.</span> <span >${filteredQuestions[questionNumber].options.C}</span></li>
          <li><span class="Optnz">D.</span> <span >${filteredQuestions[questionNumber].options.D}</span></li>
        </ul>
    `;
    const optionAnswers = document.querySelectorAll("li");
    //  FOR EACH WITH EVENT LISTNER
    optionAnswers.forEach((optionAnswer) => {
      optionAnswer.addEventListener("click", function questionOption() {
        console.log(" Option clicked");
        const optionContent = optionAnswer.textContent.split(". ")[0];
        const currentQuestion = QuestionBank[questionNumber];
        const answer = currentQuestion.answer;
        console.log(optionContent, answer);

        if (optionContent == answer) {
          showNotification(`${optionContent}  ,  Is a correct Answer `);
          score++;
          console.log(score);
          // console.log("its a correct Answer");
          renderQuestion(filteredQuestions);
        } else {
          console.log(score);
          showNotification(`Wrong answer, ${answer} is the Answer `);
          // console.log("its a wrong answer");
          renderQuestion(filteredQuestions);
        }
      });
    });
  }
}
