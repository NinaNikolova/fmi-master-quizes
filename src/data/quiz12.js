export const mysql12 = [
  {
    index: 1,
    question: "При използване на връзка между класове от тип композиция, конструкторът на клас B трябва да бъде:",
    choices: [
      "извикан по време на създаване на клас A, за да се използва като част от него",
      "извикан след като клас A вече е създаден",
      "извикан едновременно с унищожаването на клас A",
      "не е необходимо да бъде извикан, клас B е независим от клас A"
    ],
    correctAnswer: "извикан по време на създаване на клас A, за да се използва като част от него",
    imageURL: null
  },
  {
    index: 2,
    question: "implementation inheritance и метод на клас с делегиране принадлежат към:",
    choices: [
      "създаване на обекти",
      "разделяне на класове",
      "взаимодействие между обекти",
      "насочване на изпълнение"
    ],
    correctAnswer: "взаимодействие между обекти",
    imageURL: null
  },
  {
    index: 3,
    question: "Целта на Use Case диаграмата може да съдържа:",
    choices: [
          "подробности за бизнес логиката и обектно-ориентирания модел",
      "отношения между класове, без да включва потребителски интерфейс",
        "описание на потребителските сценарии и техните взаимодействия",
      "само диаграми за съобщения между обекти"
    ],
    correctAnswer: "описание на потребителските сценарии и техните взаимодействия",
    imageURL: null
  },
  {
    index: 4,
    question: "За да отговаря на OCP (Open/Closed Principle), една софтуерна рамка трябва да бъде:",
    choices: [
      "отворена за промени, но затворена за модификации",
      "отворена за модификации, но затворена за промени",
      "затворена за всички видове промени",
      "отворена за нови функционалности, но затворена за разширения"
    ],
    correctAnswer: "отворена за нови функционалности, но затворена за разширения",
    imageURL: null
  },
  {
    index: 5,
    question: "Когато има само „една връзка“ между класовете, това може да се нарече:",
    choices: [
      "композиране",
      "агрегация",
      "асоциация",
      "независимост"
    ],
    correctAnswer: "асоциация",
    imageURL: null
  },
  {
    index: 6,
    question: "Показаната на фигурата връзка се отнася до типа:",
    choices: [
      "композиция",
      "агрегация",
      "асоциация",
      "зависимост"
    ],
    correctAnswer: "агрегация",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/uml-aggregation-vs-composition/08-uml-aggregation-example.png"
  },
  {
    index: 7,
    question: "Кои са основните концепции на най-ниско ниво на UML?",
    choices: [
      "модул, клас, обект",
      "наследяване, агрегация, интерфейс",
      "компоненти, съобщения, пакети",
      "функции, свойства, методи"
    ],
    correctAnswer: "модул, клас, обект",
    imageURL: null
  },
  {
    index: 8,
    question: "Кой принцип за проектиране на софтуер е базиран на идеята, че модулите на високо ниво не трябва да зависят от модулите на ниско ниво, а и двата типа модули трябва да зависят от абстракции?",
    choices: [

      "Single Responsibility Principle",
            "Dependency Inversion Principle",
      "Liskov Substitution Principle",
      "Open/Closed Principle"
    ],
    correctAnswer: "Dependency Inversion Principle",
    imageURL: null
  },
  {
    index: 9,
    question: "Степента на кохезия (Cohesion) в един модел на софтуерната архитектура се измерва с:",
    choices: [
      "степента на функционалната свързаност между отделните модули",
      "индекса на декомпозируемост на системата",
      "кохезивната отказоустойчивост на системата",
      "индекса на композируемост на системата",
      "броя връзки между отделните модули"
    ],
    correctAnswer: "степента на функционалната свързаност между отделните модули",
    imageURL: null
  },
  {
    index: 10,
    question: "Когато има само „слаба връзка“ между класовете, напр. ClassA има метод/и, които съдържат параметър на ClassB, но ClassA не поддържа референция към екземпляр на ClassB, то в диаграмата на класовете това може да се укаже чрез:",
    choices: [
      "зависимост",
      "агрегация",
      "генерализация",
      "реализация",
      "композиция",
      "\"слаба\" асоциация"
    ],
    correctAnswer: "\"слаба\" асоциация",
    imageURL: null
  },
  {
    index: 11,
    question: "UML моделът на поведението може да съдържа:",
    choices: [
      "диаграми на взаимодействието и на компонентите (components diagrams)",
      "диаграми на класовете и на интерфейса (interface diagrams)",
      "диаграми на взаимодействието и на състоянието (statechart diagrams)",
      "единствено диаграми на взаимодействието (interaction diagrams)",
      "диаграми на състоянието (state), на активностите и на взаимодействието (interaction diagrams)"
    ],
    correctAnswer: "диаграми на състоянието (state), на активностите и на взаимодействието (interaction diagrams)",
    imageURL: null
  },
  {
    index: 12,
    question: "За да отговаря на OCP (Open/Closed Principle), една софтуерна рамка трябва да бъде:",
    choices: [
      "отворена или затворена както за модификации, така и за разширения",
      "нито един от останалите отговори не е верен",
      "отворена за разширения, но затворена за модификации",
      "отворена за модификации, но затворена за разширения"
    ],
    correctAnswer: "отворена за разширения, но затворена за модификации",
    imageURL: null
  },
  {
    index: 13,
    question: "При описание на сценарий на случай на употреба (use case scenario) трябва да зададем входни и изходни условия (Entry and Exit conditions).",
    choices: [
      "Истина",
      "Лъжа"
    ],
    correctAnswer: "Истина",
    imageURL: null
  },
  {
    index: 14,
    question: "Подредете типа на свързаност от най-желан към най-нежелан с оглед на добър дизайн на софтуерната архитектура:",
    choices: [
      "Data Coupling - Control Coupling - Global Data Coupling - Internal Data Coupling",
      "Global Data Coupling - Internal Data Coupling - Data Coupling - Control Coupling",
      "Data Coupling - Internal Data Coupling - Control Coupling - Global Data Coupling",
      "Control Coupling - Data Coupling - Global Data Coupling - Internal Data Coupling"
    ],
    correctAnswer: "Data Coupling - Internal Data Coupling - Control Coupling - Global Data Coupling",
    imageURL: null
  },
  {
    index: 15,
    question: "Подредете видовете кохезия от най-желана към най-нежелана:",
    choices: [
      "Functional Cohesion, Sequential Cohesion, Communicational Cohesion, Procedural Cohesion, Temporal Cohesion, Logical Cohesion, Coincidental Cohesion",
      "Coincidental Cohesion, Logical Cohesion, Temporal Cohesion, Procedural Cohesion, Communicational Cohesion, Sequential Cohesion, Functional Cohesion",
      "Logical Cohesion, Functional Cohesion, Sequential Cohesion, Procedural Cohesion, Communicational Cohesion, Temporal Cohesion, Coincidental Cohesion",
      "Procedural Cohesion, Sequential Cohesion, Functional Cohesion, Communicational Cohesion, Temporal Cohesion, Logical Cohesion, Coincidental Cohesion"
    ],
    correctAnswer: "Functional Cohesion, Sequential Cohesion, Communicational Cohesion, Procedural Cohesion, Temporal Cohesion, Logical Cohesion, Coincidental Cohesion",
    imageURL: null
  },
  {
    index: 16,
    question: "Класове, които моделират взаимодействието между системата и нейното обкръжение (един или повече актьори), са със стереотип на:",
    choices: [
      "актьорски класове",
      "контролни класове",
      "интерфейсни класове",
      "гранични класове"
    ],
    correctAnswer: "гранични класове",
    imageURL: null
  },
  {
    index: 17,
    question: "UML изгледът на потребителските случаи (Use Case view) може да съдържа:",
    choices: [
      "единствено диаграми на потребителските случаи (use case diagrams)",
      "диаграми на потребителските случаи, на сътрудничеството и на класовете",
      "диаграми на потребителските случаи, на последователност и на комуникация",
      "диаграми на потребителските случаи и на последователност (sequence diagrams)",
      "диаграми на потребителските случаи, на състоянието, на последователност и на комуникация"
    ],
    correctAnswer: "диаграми на потребителските случаи, на сътрудничеството и на класовете",
    imageURL: null
  },
  // {
  //   index: 11,
  //   question: "Заместването на наследяването на имплементация (implementation inheritance) на методи на клас с делегиране (delegation) към тези методи решава проблемите с:",
  //   choices: [
  //     "тестването на кода",
  //     "разширяемостта на системата от класове",
  //     "използването на подтипове",
  //     "поддръжката на кода",
  //     "нарастването на дълбочината на дървото на наследяване",
  //     "множественото наследяване"
  //   ],
  //   correctAnswer: [
  //     "разширяемостта на системата от класове",
  //     "поддръжката на кода",
  //     "нарастването на дълбочината на дървото на наследяване",
  //     "множественото наследяване"
  //   ],
  //   imageURL: null
  // },
  {
    index: 18,
    question: "Един клас може да се ползва като върнат тип или като тип на параметър на операция на съставния клас, ако:",
    choices: [
      "може да се ползва като върнат тип или като тип на параметър на операция на съставния клас",
      "всички останали отговори са неверни",
      "може да се ползва като върнат тип, но не може да се ползва като тип на параметър на операция на съставния клас",
      "не може да се ползва като върнат тип или като тип на параметър на операция на съставния клас",
      "не може да се ползва като върнат тип, но може да се ползва като тип на параметър на операция на съставния клас"
    ],
    correctAnswer: "може да се ползва като върнат тип или като тип на параметър на операция на съставния клас",
    imageURL: null
  }



];