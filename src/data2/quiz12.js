export const mysql12 = [
  {
    index: 1,
    question: "Какво е синхронизация в контекста на конкурентното програмиране?",
    choices: [
      "Контрол на достъпа до споделени ресурси",
      "Създаване на множество нишки",
      "Избягване на грешки при входно-изходни операции",
      "Събиране на данни от различни източници"
    ],
    correctAnswer: "Контрол на достъпа до споделени ресурси",
    imageURL: ""
  },
  {
    index: 2,
    question: "Какво представлява процесната интерференция?",
    choices: [
      "Правилно синхронизиране на нишки",
      "Едновременен достъп и модифициране на споделен ресурс",
      "Създаване на паралелни процеси",
      "Разпределяне на изчислителни задачи"
    ],
    correctAnswer: "Едновременен достъп и модифициране на споделен ресурс",
    imageURL: ""
  },
  {
    index: 3,
    question: "Как се постига взаимно изключване в Java?",
    choices: [
      "Чрез ключовата дума static",
      "Чрез ключовата дума synchronized",
      "Чрез създаване на нови класове",
      "Чрез използване на многонишкови интерфейси"
    ],
    correctAnswer: "Чрез ключовата дума synchronized",
    imageURL: ""
  },
  {
    index: 4,
    question: "Какъв е проблемът в примера с градината (Ornamental Garden)?",
    choices: [
      "Липса на входни врати",
      "Загуба на броени посетители поради конкурентен достъп",
      "Неправилно изчисляване на площта",
      "Липса на синхронизация между входовете"
    ],
    correctAnswer: "Загуба на броени посетители поради конкурентен достъп",
    imageURL: ""
  },
  {
    index: 5,
    question: "Какво прави ключовата дума synchronized в Java?",
    choices: [
      "Създава нови нишки",
      "Забранява достъпа до методи",
      "Осигурява заключване на обект при метод извикване",
      "Ограничава паметта на обекта"
    ],
    correctAnswer: "Осигурява заключване на обект при метод извикване",
    imageURL: ""
  },
  {
    index: 6,
    question: "Какво е Lock в контекста на модели за взаимно изключване?",
    choices: [
      "Софтуерен механизъм за контрол на достъпа",
      "Физическо заключване",
      "Метод за криптиране",
      "Начин за създаване на нови обекти"
    ],
    correctAnswer: "Софтуерен механизъм за контрол на достъпа",
    imageURL: ""
  },
  {
    index: 7,
    question: "Защо конкурентните грешки са трудни за локализиране?",
    choices: [
      "Защото липсват добри инструменти",
      "Поради произволното прекъсване на нишки",
      "Заради сложността на операционните системи",
      "Ради липса на добри практики"
    ],
    correctAnswer: "Поради произволното прекъсване на нишки",
    imageURL: ""
  },
  {
    index: 8,
    question: "Какво представлява LTS (Labeled Transition System)?",
    choices: [
      "Система за управление на нишки",
      "Метод за моделиране на конкурентни системи",
      "Език за програмиране",
      "Механизъм за синхронизация"
    ],
    correctAnswer: "Метод за моделиране на конкурентни системи",
    imageURL: ""
  },
  {
    index: 9,
    question: "Каква е основната цел на взаимното изключване?",
    choices: [
      "Забавяне на програмата",
      "Предотвратяване на едновременен достъп до споделени ресурси",
      "Увеличаване на броя нишки",
      "Намаляване на паметта"
    ],
    correctAnswer: "Предотвратяване на едновременен достъп до споделени ресурси",
    imageURL: ""
  },
  {
    index: 10,
    question: "Какво се случва, когато два потока се опитат да влязат в синхронизиран метод?",
    choices: [
      "Единият поток се прекъсва",
      "Възниква грешка",
      "Другите потоци се блокират, докато първият приключи",
      "Методът се изпълнява паралелно"
    ],
    correctAnswer: "Другите потоци се блокират, докато първият приключи",
    imageURL: ""
  },
  {
    index: 11,
    question: "Какво е алтернативен начин за синхронизация в Java освен synchronized метод?",
    choices: [
      "Използване на static променливи",
      "Synchronized statement",
      "Създаване на нови класове",
      "Използване на volatile променливи"
    ],
    correctAnswer: "Synchronized statement",
    imageURL: ""
  },
  {
    index: 12,
    question: "Защо е важно всички методи на обект да са синхронизирани?",
    choices: [
      "За да се намали броят на нишките",
      "За да се гарантира пълна защита на обекта",
      "За да се увеличи производителността",
      "За да се намали паметта"
    ],
    correctAnswer: "За да се гарантира пълна защита на обекта",
    imageURL: ""
  },
  {
    index: 13,
    question: "Какво представляват споделените обекти?",
    choices: [
      "Обекти, които могат да се използват от множество нишки",
      "Локални променливи",
      "Константи",
      "Статични методи"
    ],
    correctAnswer: "Обекти, които могат да се използват от множество нишки",
    imageURL: ""
  },
  {
    index: 14,
    question: "Каква е целта на действието acquire в модела на взаимно изключване?",
    choices: [
      "Създаване на нова нишка",
      "Заключване на ресурс преди достъп",
      "Отключване на ресурс",
      "Прекъсване на нишка"
    ],
    correctAnswer: "Заключване на ресурс преди достъп",
    imageURL: ""
  },
  {
    index: 15,
    question: "Какъв е основният проблем при липса на синхронизация?",
    choices: [
      "Забавяне на програмата",
      "Загуба или корупция на данни",
      "Увеличаване на паметта",
      "Намаляване на производителността"
    ],
    correctAnswer: "Загуба или корупция на данни",
    imageURL: ""
  },
  {
    index: 16,
    question: "Коя е основната характеристика на конкурентното програмиране?",
    choices: [
      "Изпълнение на задачи последователно",
      "Едновременно изпълнение на множество задачи",
      "Забавяне на изчисленията",
      "Използване на повече памет"
    ],
    correctAnswer: "Едновременно изпълнение на множество задачи",
    imageURL: ""
  },
  {
    index: 17,
    question: "Какво показва LTS моделът в конкурентното програмиране?",
    choices: [
      "Точния код на програмата",
      "Състоянията и преходите между тях",
      "Броя на нишките",
      "Паметта на програмата"
    ],
    correctAnswer: "Състоянията и преходите между тях",
    imageURL: ""
  },
  {
    index: 18,
    question: "Защо е важно тестването на конкурентни системи?",
    choices: [
      "За да се увеличи броят на нишките",
      "За да се открият скрити грешки при многонишково изпълнение",
      "За да се намали паметта",
      "За да се забави програмата"
    ],
    correctAnswer: "За да се открият скрити грешки при многонишково изпълнение",
    imageURL: ""
  },
  {
    index: 19,
    question: "Кое е основното предизвикателство при конкурентното програмиране?",
    choices: [
      "Създаване на множество нишки",
      "Управление на споделени ресурси",
      "Намаляване на паметта",
      "Увеличаване на процесорното време"
    ],
    correctAnswer: "Управление на споделени ресурси",
    imageURL: ""
  },
  {
    index: 20,
    question: "Какво прави методът release в модела на взаимно изключване?",
    choices: [
      "Стартира нова нишка",
      "Отключва ресурса след приключване на операцията",
      "Създава нов обект",
      "Прекъсва текущата операция"
    ],
    correctAnswer: "Отключва ресурса след приключване на операцията",
    imageURL: ""
  }
]