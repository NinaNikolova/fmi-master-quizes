export const mysql8 = [
  {
    index: 1,
    question: "Какво представлява Object Constraint Language (OCL)?",
    choices: [
      "Програмен език с възможности за управление на потока на изпълнение.",
      "Език за спецификация без странични ефекти.",
    ],
    correctAnswer: "Език за спецификация без странични ефекти.",
    imageURL: "https://slideplayer.com/slide/7285518/24/images/21/Basic+constructs+Let%2C+If-then-else+Standard+Library.jpg"
  },
  {
    index: 2,
    question: "Каква е основната цел на OCL?",
    choices: [
      "Да осигури формални ограничения върху UML моделите.",
      "Да създава UML диаграми автоматично.",
    ],
    correctAnswer: "Да осигури формални ограничения върху UML моделите.",
    imageURL: null
  },
  {
    index: 3,
    question: "Какви типове ограничения могат да се зададат чрез OCL?",
    choices: [
      "Ограничения само върху класове.",
      "Инварианти, предусловия и последващи условия.",
    ],
    correctAnswer: "Инварианти, предусловия и последващи условия.",
    imageURL: null
  },
  {
    index: 4,
    question: "Какво е предимството на използването на инварианти в OCL?",
    choices: [
      "Подобряват документацията и намаляват неяснотата.",
      "Генерират код автоматично.",
    ],
    correctAnswer: "Подобряват документацията и намаляват неяснотата.",
    imageURL: null
  },
  {
    index: 5,
    question: "Какво означава инвариант в контекста на OCL?",
    choices: [
      "Метод за валидиране на потребителски вход.",
      "Ограничение, което винаги е вярно за всички обекти от даден клас.",
    ],
    correctAnswer: "Ограничение, което винаги е вярно за всички обекти от даден клас.",
    imageURL: null
  },
  {
    index: 6,
    question: "Как се задават ограничения върху атрибутите в OCL?",
    choices: [
      "Чрез контекста на класа, към който принадлежи атрибутът.",
      "Чрез директно присвояване в UML диаграмата.",
    ],
    correctAnswer: "Чрез контекста на класа, към който принадлежи атрибутът.",
    imageURL: null
  },
  {
    index: 7,
    question: "Коя организация подкрепя развитието на OCL?",
    choices: [
      "OMG (Object Management Group)",
      "W3C",
      "ISO",
      "IEEE"
    ],
    correctAnswer: "OMG (Object Management Group)",
    imageURL: null
  },
  {
    index: 8,
    question: "Каква е ролята на времевите диаграми в UML?",
    choices: [
      "Показват връзките между класовете.",
      "Изобразяват времевата информация за събития и състояния.",
    ],
    correctAnswer: "Изобразяват времевата информация за събития и състояния.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 9,
    question: "Какви типове времеви ограничения могат да се дефинират в времеви диаграми?",
    choices: [
      "{t..t+5s}, {<5s}, {>5s, <10s}.",
      "Само абсолютни времеви стойности.",
    ],
    correctAnswer: "{t..t+5s}, {<5s}, {>5s, <10s}.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 10,
    question: "Как се описват състоянията в времеви диаграми?",
    choices: [
      "Вертикално, с помощта на връзки.",
      "Хоризонтално, до участниците, с които са свързани.",
    ],
    correctAnswer: "Хоризонтално, до участниците, с които са свързани.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 11,
    question: "Каква е основната цел на Model Driven Architecture (MDA)?",
    choices: [
      "Да разделя спецификацията на функционалностите от спецификацията на имплементацията.",
      "Да автоматизира процеса на тестване на софтуер.",
    ],
    correctAnswer: "Да разделя спецификацията на функционалностите от спецификацията на имплементацията.",
    imageURL: "https://www.omg.org/mda/images/mda_diagram.gif"
  },
  {
    index: 12,
    question: "Кой модел в MDA описва бизнес логиката на системата?",
    choices: [
      "PIM (Platform Independent Model).",
      "CIM (Computation Independent Model).",
      "PSM (Platform Specific Model).",
      "UML модел."
    ],
    correctAnswer: "PIM (Platform Independent Model).",
    imageURL: null
  },
  {
    index: 13,
    question: "Каква е основната разлика между CIM и PIM в MDA?",
    choices: [
      "CIM дефинира детайли за платформи, докато PIM не включва такива.",
      "CIM описва изискванията, докато PIM описва логиката на системата.",
    ],
    correctAnswer: "CIM описва изискванията, докато PIM описва логиката на системата.",
    imageURL: null
  },
  {
    index: 14,
    question: "Какви са предимствата на използването на PIM моделите в MDA?",
    choices: [
      "Намаляват сложността на кодовете на платформи.",
      "Подобряват преносимостта, продуктивността и поддръжката.",
    ],
    correctAnswer: "Подобряват преносимостта, продуктивността и поддръжката.",
    imageURL: null
  },
  {
    index: 15,
    question: "Какво представлява инвариантът 'self.numberOfEmployees > 50' в OCL?",
    choices: [
      "Ограничение, което изисква броят на служителите да е повече от 50.",
      "Израз, който връща логическа стойност false.",
    ],
    correctAnswer: "Ограничение, което изисква броят на служителите да е повече от 50.",
    imageURL: null
  },
  {
    index: 16,
    question: "Какво означава 'context CustomerCard invariant correctDates' в OCL?",
    choices: [
      "Описание на методи на класа CustomerCard.",
      "Ограничение за атрибути с дата в класа CustomerCard.",
    ],
    correctAnswer: "Ограничение за атрибути с дата в класа CustomerCard.",
    imageURL: null
  },
  {
    index: 17,
    question: "Какви операции могат да се прилагат върху колекции в OCL?",
    choices: [
      "->includes, ->select, ->size",
      "->add, ->remove, ->update",
    ],
    correctAnswer: "->includes, ->select, ->size",
    imageURL: null
  },
  {
    index: 18,
    question: "Какво изразява OCL ограничението 'context Module invariant: taken_by -> size > 7'?",
    choices: [
      "Един модул може да бъде записан от повече от 7 студенти.",
      "Модулът е задължителен за всички студенти.",
    ],
    correctAnswer: "Един модул може да бъде записан от повече от 7 студенти.",
    imageURL: null
  },
  {
    index: 19,
    question: "Какво представляват времевите ограничения в времевите диаграми?",
    choices: [
      "Ограничения за продължителността на събития и състояния",
      "Описание на методи за взаимодействие",

    ],
    correctAnswer: "Ограничения за продължителността на събития и състояния",
    imageURL: null
  },
  {
    index: 20,
    question: "Кое е вярно за контекст 'context Mortgage inv: startDate < endDate'?",
    choices: [
      "Началната дата на ипотеката трябва да е преди крайната дата.",
      "Ипотеката е валидна само при дефиниран размер на кредита.",
    ],
    correctAnswer: "Началната дата на ипотеката трябва да е преди крайната дата.",
    imageURL: null
  },

];