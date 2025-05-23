// Z нотация - Схеми
export const mysql5 = [

  {
    index: 1,
    question: "Какво е основно предимство на използването на схемите при Z нотацията?",
    choices: [
      "Схемите улесняват изчисленията със системите",
      "Схемите позволяват структуриране на спецификациите",
      "Схемите предлагат повторна употреба на описания",
      "Схемите подобряват четимостта на спецификациите"
    ],
    correctAnswer: "Схемите позволяват структуриране на спецификациите",
    imageURL: "https://www.researchgate.net/publication/309269540/figure/fig2/AS:457181129646082@1486011883572/Example-Z-Notation-Schema.png"
  },
  {
    index: 2,
    question: "Какво представлява 'нормализацията' на схемите?",
    choices: [
      "Премахване на неизползвани променливи от декларативната част",
      "Извеждане на единствена, каноничната форма на декларативната част",
    ],
    correctAnswer: "Извеждане на единствена, каноничната форма на декларативната част",
    imageURL: null
  },
  {
    index: 3,
    question: "Каква е основната цел на операцията 'преименуване' при схемите?",
    choices: [
      "Да въведе нови имена на променливи без да променя структурата на схемата",
      "Да премахне ненужни променливи, за да опрости схемата",
    ],
    correctAnswer: "Да въведе нови имена на променливи без да променя структурата на схемата",
    imageURL: null
  },
  {
    index: 4,
    question: "Как се описва операция, която променя състоянието на системата, използвайки Z схеми?",
    choices: [
      "Чрез включване на две схеми в декларативната част на схемата за операцията",
      "Чрез въвеждане на нови входни и изходни променливи в схемата"
    ],
    correctAnswer: "Чрез включване на две схеми в декларативната част на схемата за операцията",
    imageURL: null
  },
  {
    index: 5,
    question: "Каква е ролята на инвариантите при Z спецификациите?",
    choices: [
      "Описват изключителни условия, при които системата може да се провали",
      "Ограничават стойностите на променливите, запазвани в системното състояние",
    ],
    correctAnswer: "Ограничават стойностите на променливите, запазвани в системното състояние",
    imageURL: null
  },
  {
    index: 6,
    question: "Какво представлява 'дизюнкцията' на две Z схеми?",
    choices: [
      "Описва алтернативни поведения на системата",
      "Създава конюнктивно свързани състояния",
    ],
    correctAnswer: "Описва алтернативни поведения на системата",
    imageURL: null
  },
  {
    index: 7,
    question: "Как се представя грешката, когато операция е извикана извън прекондицията ѝ?",
    choices: [
      "Чрез отказ за изпълнение на операцията",
      "Чрез генериране на изключение, което прекъсва изпълнението",
    ],
    correctAnswer: "Чрез генериране на изключение, което прекъсва изпълнението",
    imageURL: null
  },
  {
    index: 8,
    question: "Каква е разликата между пред- и пост-условия при Z спецификациите?",
    choices: [
      "Пред-условията описват входните изисквания, а пост-условията - изхода",
      "Пред-условията описват начално състояние, а пост-условията - крайно състояние",
    ],
    correctAnswer: "Пред-условията описват начално състояние, а пост-условията - крайно състояние",
    imageURL: null
  },
  {
    index: 9,
    question: "Какво е основно ограничение на Z нотацията, според документа?",
    choices: [
      "Неподходяща за бързо разработване на софтуер",
      "Недостатъчна за спецификация на безкрайни състояния",
    ],
    correctAnswer: "Недостатъчна за спецификация на безкрайни състояния",
    imageURL: null
  },
  {
    index: 10,
    question: "Как можем да комбинираме различни Z схеми, за да създадем по-сложни спецификации?",
    choices: [
      "Чрез премахване на ограничения в предикатната част",
      "Чрез операциите конюнкция и дизюнкция",
    ],
    correctAnswer: "Чрез операциите конюнкция и дизюнкция",
    imageURL: null
  },
  {
    index: 11,
    question: "Каква е основната разлика между Z нотацията и машините на състоянието?",
    choices: [
      "Z нотацията се фокусира върху състоянието, а машините на състоянието - върху операциите",
      "Z нотацията не може да опише изключения, за разлика от машините на състоянието"
    ],
    correctAnswer: "Z нотацията се фокусира върху състоянието, а машините на състоянието - върху операциите",
    imageURL: null
  },
  {
    index: 12,
    question: "Каква е ролята на 'декорацията' при описание на операции в Z нотацията?",
    choices: [
      "Въвежда нови входни и изходни променливи в схемите",
      "Позволява да разграничим състоянието преди и след операцията",
    ],
    correctAnswer: "Позволява да разграничим състоянието преди и след операцията",
    imageURL: null
  },
  {
    index: 13,
    question: "Как се описва въвеждането на ново име и рождена дата в системата BirthdayBook?",
    choices: [
      "Чрез отрицание на съществуващо име в базата данни",
      "Чрез конюнкция на две схеми, описващи началното и крайното състояние",
    ],
    correctAnswer: "Чрез конюнкция на две схеми, описващи началното и крайното състояние",
    imageURL: null
  },
  {
    index: 14,
    question: "Как се описва търсенето на рождена дата на познато име в системата BirthdayBook?",
    choices: [
      "Чрез конюнкция на две схеми, описващи началното и крайното състояние",
      "Чрез въвеждане на нови входни и изходни променливи в схемата за операцията",
    ],
    correctAnswer: "Чрез въвеждане на нови входни и изходни променливи в схемата за операцията",
    imageURL: null
  },

  {
    index: 16,
    question: "Как се описва робастна версия на операция в Z нотацията?",
    choices: [
      "Чрез замяна на предикатна част със стойност 'true'",
      "Чрез конюнкция на основната операция със схема за обработка на грешки",
    ],
    correctAnswer: "Чрез конюнкция на основната операция със схема за обработка на грешки",
    imageURL: null
  },
  {
    index: 17,
    question: "Каква е основната разлика между Z нотацията и формалните методи като VDM (Vienna Development Method)?",
    choices: [
      "Z нотацията е по-математическа, докато VDM - по-програмно ориентирана",
      "Z нотацията не може да опише изключения, за разлика от VDM"
    ],
    correctAnswer: "Z нотацията е по-математическа, докато VDM - по-програмно ориентирана",
    imageURL: null
  },
  {
    index: 18,
    question: "Как се представя отрицанието на дадена Z схема?",
    choices: [
      "Чрез промяна на предикатната част с отрицание",
      "Чрез премахване на всички ограничения от предикатната част",
    ],
    correctAnswer: "Чрез промяна на предикатната част с отрицание",
    imageURL: null
  },
  {
    index: 19,
    question: "Как се обозначава достъпът до конкретен компонент в схемата?",
    choices: [
      "С оператора за отделяне (selection operator) '_._'",
      "С оператора за съединение '+.'",
      "С оператора за принадлежност '∈'",
      "С оператора за съпоставяне ':='"
    ],
    correctAnswer: "С оператора за отделяне (selection operator) '_._'",
    imageURL: null
  }

];