const allQuestions = {
  easy: [{ //1
    type: 'radio',
    question: 'Як визначити змінну в JavaScript?',
    options: ['let x;', 'variable x;', 'x = 5;'],
    correctAnswer: 0,
    points: 1
  }, { //2
    type: 'checkbox',
    question: 'Які з перерахованих типів даних в JavaScript є примітивними?',
    options: ['Number', 'Object', 'String', 'Boolean'],
    correctAnswer: [0, 2, 3],
    points: 1
  }, { //3
    type: 'dropdown',
    question: 'Який оператор використовується для порівняння значень і типів в JavaScript?',
    options: ['==', '===', '!=', '!=='],
    correctAnswer: 1,
    points: 1
  }, { //4
    type: 'radio',
    question: 'Що таке "Hoisting" в контексті JavaScript?',
    options: ['Підняття функції чи змінної вверх області видимості', 'Створення копії змінної', 'Зменшення обсягу коду'],
    correctAnswer: 0,
    points: 1
  }, { //5
    type: 'checkbox',
    question: 'Які з цих циклів існують в JavaScript?',
    options: ['for', 'while', 'loop', 'foreach'],
    correctAnswer: [0, 1],
    points: 1
  }, { //6
    type: 'dropdown',
    question: 'Що повертає оператор typeof для типу даних Array?',
    options: ['object', 'array', 'string', 'number'],
    correctAnswer: 0,
    points: 1
  }, { //7
    type: 'radio',
    question: 'Як вивести текст на екран використовуючи JavaScript?',
    options: ['console.log()', 'print()', 'alert()', 'log()'],
    correctAnswer: 2,
    points: 1
  }, { //8
    type: 'checkbox',
    question: 'Які з перерахованих можливностей використання змінних в JavaScript є правильними?',
    options: ['Зберігання та оновлення даних', 'Створення функцій', 'Взаємодія з користувачем'],
    correctAnswer: [0, 1, 2],
    points: 1
  }, { //9
    type: 'dropdown',
    question: 'Як збільшити змінну x на 1 в JavaScript?',
    options: ['x = x + 1;', 'increment x;', 'x++;', 'addOne(x);'],
    correctAnswer: 2,
    points: 1
  }, { //10
    type: 'radio',
    question: 'Що таке "scope" змінної в JavaScript?',
    options: ['Тип змінної', 'Місце декларації змінної в коді', 'Масштаб видимості змінної'],
    correctAnswer: 2,
    points: 1
  }, { //11
    type: 'checkbox',
    question: 'Які з подій можуть виникнути при взаємодії користувача з веб-сторінкою?',
    options: ['click', 'hover', 'submit', 'keydown'],
    correctAnswer: [0, 2, 3],
    points: 1
  }, { //12
    type: 'dropdown',
    question: 'Яка різниця між "let" і "const" в JavaScript?',
    options: ['Обидві дозволяють оголошення змінних', '"let" не можна переприсвоїти, а "const" можна', '"const" не можна переприсвоїти, а "let" можна', 'Немає різниці'],
    correctAnswer: 1,
    points: 1
  }, { //13
    type: 'radio',
    question: 'Що таке замикання (closure) в JavaScript?',
    options: ['Функція, яка завжди повертає true', 'Об\'єкт, який зберігає дані', 'Функція, що містить змінні з області видимості батьківської функції'],
    correctAnswer: 2,
    points: 1
  }, { //14
    type: 'checkbox',
    question: 'Які з методів рядка в JavaScript повертають новий рядок?',
    options: ['toUpperCase()', 'toLowerCase()', 'concat()', 'slice()'],
    correctAnswer: [0, 1, 2, 3],
    points: 1
  }, { //15
    type: 'dropdown',
    question: 'Що виведе консоль за виклику console.log(typeof undefined);?',
    options: ['"undefined"', '"object"', '"string"', '"number"'],
    correctAnswer: 0,
    points: 1
  }], medium: [{ //1
    type: 'radio',
    question: 'Як створити функцію в JavaScript?',
    options: ['function myFunction() {}', 'let myFunction = function() {};', 'const myFunction = () => {};', 'function: myFunction {}'],
    correctAnswer: 0,
    points: 2
  }, { //2
    type: 'checkbox',
    question: 'Які з цих типів даних в JavaScript є посиланнями?',
    options: ['Number', 'Object', 'String', 'Boolean'],
    correctAnswer: [1],
    points: 2
  }, { //3
    type: 'dropdown',
    question: 'Що таке "callback-функція" в JavaScript?',
    options: ['Функція, яка викликає іншу функцію', 'Функція, яка приймає функцію як аргумент', 'Функція, яка викликає сама себе', 'Функція, яка завжди повертає колбек'],
    correctAnswer: 1,
    points: 2
  }, { //4
    type: 'radio',
    question: 'Як вибрати всі елементи з класом "example" в JavaScript?',
    options: ['document.getElementByClass("example")', 'document.querySelectorAll(".example")', 'document.getElementsByClass("example")', 'document.select(".example")'],
    correctAnswer: 1,
    points: 2
  }, { //5
    type: 'checkbox',
    question: 'Які методи масиву в JavaScript міняють оригінальний масив?',
    options: ['map()', 'filter()', 'slice()', 'splice()'],
    correctAnswer: [0, 3],
    points: 2
  }, { //6
    type: 'dropdown',
    question: 'Які методи рядка в JavaScript повертають індекс першого входження підрядка?',
    options: ['indexOf()', 'search()', 'findIndex()', 'includes()'],
    correctAnswer: 0,
    points: 2
  }, { //7
    type: 'radio',
    question: 'Що таке "Event Delegation" в JavaScript?',
    options: ['Створення власних подій', 'Виведення даних з об\'єкта події', 'Динамічне призначення обробників подій батьківському елементу'],
    correctAnswer: 2,
    points: 2
  }, { //8
    type: 'checkbox',
    question: 'Які методи об\'єкта Date в JavaScript повертають компоненти часу?',
    options: ['getHours()', 'getMinutes()', 'getTimezoneOffset()', 'getSeconds()'],
    correctAnswer: [0, 1, 3],
    points: 2
  }, { //9
    type: 'dropdown',
    question: 'Що таке "RESTful API"?',
    options: ['Мова програмування', 'Спосіб організації API за принципами REST', 'Методологія розробки', 'Назва фреймворку'],
    correctAnswer: 1,
    points: 2
  }, { //10
    type: 'radio',
    question: 'Як визначити довжину масиву в JavaScript?',
    options: ['array.length()', 'array.size', 'array.length', 'array.count'],
    correctAnswer: 2,
    points: 2
  }, { //11
    type: 'checkbox',
    question: 'Які з перерахованих подій відносяться до миші в JavaScript?',
    options: ['mousemove', 'click', 'keydown', 'resize'],
    correctAnswer: [0, 1],
    points: 2
  }, { //12
    type: 'dropdown',
    question: 'Як визначити, чи існує елемент з певним ідентифікатором в JavaScript?',
    options: ['document.checkElementById()', 'document.getElementById()', 'document.findId()', 'document.selectId()'],
    correctAnswer: 1,
    points: 2
  }, { //13
    type: 'radio',
    question: 'Що таке "JSON"?',
    options: ['JavaScript Object Notation', 'JavaScript Orientation Notation', 'JavaScript Option Notification', 'JavaScript Operator Navigation'],
    correctAnswer: 0,
    points: 2
  }, { //14
    type: 'checkbox',
    question: 'Які методи масиву в JavaScript не змінюють оригінальний масив?',
    options: ['push()', 'pop()', 'concat()', 'slice()'],
    correctAnswer: [2, 3],
    points: 2
  }, { //15
    type: 'dropdown',
    question: 'Що повертає метод масиву join() в JavaScript?',
    options: ['Рядок, утворений об\'єднанням всіх елементів масиву', 'Кількість елементів в масиві', 'Суму всіх елементів масиву', 'Об\'єкт, представляючи масив'],
    correctAnswer: 0,
    points: 2
  }], hard: [{ //1
    type: 'checkbox',
    question: 'Яка змінна буде глобальною?',
    options: ['var a;', 'let b;', 'const c;', 'function test() { var d; }'],
    correctAnswer: [0, 2],
    points: 3
  }, { //2
    type: 'radio',
    question: 'Який з типів даних в JavaScript є примітивним?',
    options: ['Object', 'Array', 'String', 'Function'],
    correctAnswer: 2,
    points: 3
  }, { //3
    type: 'dropdown',
    question: 'Який оператор використовується для присвоювання значення змінній?',
    options: ['=', '==', '===', ':='],
    correctAnswer: 0,
    points: 3
  }, { //4
    type: 'checkbox',
    question: 'Які з цих типів даних в JavaScript є не змінюваними (immutable)?',
    options: ['Number', 'String', 'Array', 'Object'],
    correctAnswer: [1, 3],
    points: 3
  }, { //5
    type: 'radio',
    question: 'Яка різниця між let та const в контексті об\'єктів?',
    options: ['Обидві не можна змінювати', 'let можна переприсвоїти, const - ні', 'const можна переприсвоїти, let - ні', 'Обидві можна переприсвоїти'],
    correctAnswer: 1,
    points: 3
  }, { //6
    type: 'checkbox',
    question: 'Що правильно щодо функцій в JavaScript?',
    options: ['Функції можуть бути присвоєні змінним', 'Функції можуть бути передані як аргументи', 'Функції не можуть повертати значення', 'У функції може бути тільки один параметр'],
    correctAnswer: [0, 1],
    points: 3
  }, { //7
    type: 'radio',
    question: 'Яка змінна буде видима всередині блоку коду (if, for, while)?',
    options: ['var', 'let', 'const', 'function'],
    correctAnswer: 1,
    points: 3
  }, { //8
    type: 'dropdown',
    question: 'Який оператор використовується для строгого порівняння з урахуванням типів?',
    options: ['==', '===', '!=', '!=='],
    correctAnswer: 1,
    points: 3
  }, { //9
    type: 'checkbox',
    question: 'Де функція може бути видимою?',
    options: ['Всюди', 'Тільки в середині іншої функції', 'Тільки в тому ж самому файлі', 'Лише в тому ж самому блоку коду'],
    correctAnswer: [1, 2],
    points: 3
  }, { //10
    type: 'radio',
    question: 'Який тип даних має значення NaN (Not a Number)?',
    options: ['Number', 'String', 'Object', 'Undefined'],
    correctAnswer: 0,
    points: 3
  }, { //11
    type: 'dropdown',
    question: 'Який оператор використовується для визначення типу змінної?',
    options: ['typeof', 'instanceof', 'type', 'is'],
    correctAnswer: 0,
    points: 3
  }, { //12
    type: 'checkbox',
    question: 'Які способи оголошення функцій в JavaScript є коректними?',
    options: ['function myFunction() {}', 'var myFunction = function() {};', 'const myFunction = () => {};', 'myFunction: function() {}'],
    correctAnswer: [0, 1, 2],
    points: 3
  }, { //13
    type: 'radio',
    question: 'Як об\'єкти отримують доступ до властивостей і методів?',
    options: ['Прототипно', 'За допомогою класів', 'За допомогою наслідування', 'За допомогою декларацій'],
    correctAnswer: 0,
    points: 3
  }, { //14
    type: 'dropdown',
    question: 'У якому порядку виконується код?',
    options: ['Від верху вниз', 'Знизу вгору', 'Асинхронно', 'За допомогою стеку викликів'],
    correctAnswer: 2,
    points: 3
  }, { //15
    type: 'checkbox',
    question: 'Які можливості замикань в JavaScript?',
    options: ['Доступ до зовнішніх змінних', 'Створення приватних змінних', 'Обмеження доступу до функцій', 'Захист від втрати даних'],
    correctAnswer: [0, 1],
    points: 3
  }]
};

const levels = {
  easy: chooseRandomQuestions(allQuestions.easy, 10),
  medium: chooseRandomQuestions(allQuestions.medium, 10),
  hard: chooseRandomQuestions(allQuestions.hard, 10),
};

function chooseRandomQuestions(questions, count) {
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  return shuffledQuestions.slice(0, count);
}

let currentQuestion = 0;
let userAnswers = [];
let shuffledQuestions = [];
let questionCount = 0;

function startTest() {
  const userForm = document.getElementById('userForm');

  if (userForm.checkValidity()) {
    userForm.style.display = 'none';
    document.getElementById('testName').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';

    const allQuestions = levels.easy.concat(levels.medium, levels.hard);
    shuffledQuestions = shuffleQuestionsAndOptions(allQuestions);

    showQuestion();
  } else {
    alert('Будь ласка, заповніть обов\'язкові поля.');
  }
}

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function shuffleQuestionsAndOptions(questions) {
  const shuffledQuestions = shuffleArray(questions);

  for (const question of shuffledQuestions) {
    question.options = shuffleArray(question.options);
  }

  return shuffledQuestions;
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const answerButton = document.getElementById('answerButton');

  answerButton.style.display = 'block';
  questionCount++;

  questionElement.textContent = shuffledQuestions[currentQuestion].question + ` (${questionCount}` +
    `/${levels.easy.length + levels.medium.length + levels.hard.length})`;
  optionsElement.innerHTML = '';

  switch (shuffledQuestions[currentQuestion].type) {
    case 'radio':
      shuffledQuestions[currentQuestion].options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'answer';
        radioBtn.value = index.toString();
        radioBtn.id = 'option' + index;

        const label = document.createElement('label');
        label.textContent = option.toString();
        label.htmlFor = 'option' + index;

        optionsElement.appendChild(radioBtn);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
      });
      break;

    case 'checkbox':
      shuffledQuestions[currentQuestion].options.forEach((option, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'answer';
        checkbox.value = index.toString();
        checkbox.id = 'option' + index;

        const label = document.createElement('label');
        label.textContent = option.toString();
        label.htmlFor = 'option' + index;

        optionsElement.appendChild(checkbox);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
      });
      break;

    case 'dropdown':
      const dropdown = document.createElement('select');
      dropdown.name = 'answer';

      shuffledQuestions[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index.toString();
        optionElement.text = option.toString();
        dropdown.appendChild(optionElement);
      });

      optionsElement.appendChild(dropdown);
      break;
  }
}

function nextQuestion() {
  let selectedOption;

  switch (shuffledQuestions[currentQuestion].type) {
    case 'radio':
    case 'checkbox':
      selectedOption = document.querySelector('input[name="answer"]:checked');
      break;

    case 'dropdown':
      selectedOption = document.querySelector('select[name="answer"]');
      break;
  }

  if (selectedOption) {
    userAnswers.push(parseInt(selectedOption.value));

    if (currentQuestion < shuffledQuestions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      finishTest();
    }
  } else {
    alert('Будь ласка, виберіть відповідь.');
  }
}

function finishTest() {
  let score = 0;
  let maxScore = 0;

  for (let i = 0; i < shuffledQuestions.length; i++) {
    if (userAnswers[i] === shuffledQuestions[i].correctAnswer) {
      score += shuffledQuestions[i].points;
    }
    maxScore += shuffledQuestions[i].points;
  }

  const userName = document.getElementById('userName').value;
  const userGroup = document.getElementById('userGroup').value;
  let resultMessage = `Прізвище та ім'я: ${userName} Група: ${userGroup} Загальна сума балів: ${score}/${maxScore}`;

  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('testName').style.display = 'block';

  for (let i = 0; i < shuffledQuestions.length; i++) {
    let difficulty = '';

    switch (shuffledQuestions[i].points) {
      case 1:
        difficulty = 'easy';
        break;
      case 2:
        difficulty = 'medium';
        break;
      case 3:
        difficulty = 'hard';
        break;
    }

    resultMessage += `<br><br>Питання ${i + 1} (${difficulty}): ${shuffledQuestions[i].question}<br>`;
    resultMessage += `Ваша відповідь: ${shuffledQuestions[i].options[userAnswers[i]]}<br>`;
    resultMessage += `Правильна відповідь: ${shuffledQuestions[i].options[shuffledQuestions[i].correctAnswer]}<br>`;
    resultMessage += `Ваша відповідь є ${userAnswers[i] === shuffledQuestions[i].correctAnswer ? `вірною` : 'невірною'}<br>`;
  }

  const testResultsDiv = document.getElementById('testResults');
  testResultsDiv.innerHTML = resultMessage;
}
