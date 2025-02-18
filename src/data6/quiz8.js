export const mysql8 = [
  {
    index: 1,
    question: "Какво е Object Constraint Language (OCL)?",
    choices: [
      "Език за спецификации без странични ефекти.",
      "Инструмент за автоматично генериране на код.",
    ],
    correctAnswer: "Език за спецификации без странични ефекти.",
    imageURL: null
  },
  {
    index: 2,
    question: "Каква е основната цел на OCL?",
    choices: [
      "Да генерира автоматично UML диаграми.",
      "Да осигури формални ограничения върху UML модели.",
    ],
    correctAnswer: "Да осигури формални ограничения върху UML модели.",
    imageURL: null
  },
  {
    index: 3,
    question: "Какви типове ограничения могат да бъдат определени с помощта на OCL?",
    choices: [
      "Инварианти, предусловия и постусловия.",
      "Само времеви зависимости.",
    ],
    correctAnswer: "Инварианти, предусловия и постусловия.",
    imageURL: null
  },
  {
    index: 4,
    question: "Какво НЕ е вярно за инвариантите в OCL?",
    choices: [
      "Това е ограничение от тип «invariant» или inv.",
      "Трябва да е верен за всички инстанции на типа.",
      "От тип Boolean.",
      "Нищо от изброеното."
    ],
    correctAnswer: "Нищо от изброеното",
    imageURL: null
  },
  {
    index: 6,
    question: "Как се определят ограниченията върху атрибутите в OCL?",
    choices: [
      "Чрез контекста на класа, към който принадлежи атрибутът.",
      "Чрез директно задаване в UML диаграмата.",
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
    question: "Каква е целта на времевите диаграми в UML?",
    choices: [
      "Да илюстрират времевата информация за събития и състояния.",
      "Да покажат връзките между класове.",
    ],
    correctAnswer: "Да илюстрират времевата информация за събития и състояния.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 9,
    question: "Кои времеви ограничения НЕ са верни в диаграмите на времето?",
    choices: [
      "{t..t+5s} } Продължителността на събитието или състоянието трябва да бъде 5 секунди или по-малко.",
      "{<5s} Продължителността на събитието или състоянието трябва да бъде по-малка от 5 секунди.",
      "{>5s, <10s} Продължителността на събитието или състоянието трябва да бъде по-голяма от 5 секунди, но по-малка от 10 секунди.",
      "{t} Продължителността на събитието или състоянието трябва да бъде равна на стойността на t - може да бъде всяка стойност на времето.",
      "{t..t*5} Продължителността на събитието или състоянието трябва да бъде стойността на t, умножена по 5.",
      "Нищо от изброеното"
    ],
    correctAnswer: "Нищо от изброеното",
    imageURL: null
  },
  {
    index: 10,
    question: "Как се описват състоянията в диаграмите на времето?",
    choices: [
      "Вертикално, използвайки връзки.",
      "Хоризонтално, до участниците, с които са свързани.",
    ],
    correctAnswer: "Хоризонтално, до участниците, с които са свързани.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 11,
    question: "Каква е основната цел на Model Driven Architecture (MDA)?",
    choices: [
      "Да отдели спецификацията на функционалностите от имплементацията.",
      "Да автоматизира процесите на тестване на софтуер.",
    ],
    correctAnswer: "Да отдели спецификацията на функционалностите от имплементацията.",
    imageURL: "https://www.omg.org/mda/images/mda_diagram.gif"
  },
  {
    index: 12,
    question: "Кой модел в MDA описва бизнес логиката на системата?",
    choices: [
      "CIM (Computation Independent Model).",
      "PIM (Platform Independent Model).",
      "PSM (Platform Specific Model).",
      "Код"
    ],
    correctAnswer: "PIM (Platform Independent Model).",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 13,
    question: "Каква е основната разлика между CIM и PIM в MDA?",
    choices: [
      "CIM описва изискванията, докато PIM описва системната логика.",
      "CIM и PIM са идентични модели."
    ],
    correctAnswer: "CIM описва изискванията, докато PIM описва системната логика.",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 14,
    question: "Какви са ползите от използването на PIM модели в MDA?",
    choices: [
      "Намалена сложност на платформения код.",
      "Подобрена преносимост, продуктивност и поддръжка.",
    ],
    correctAnswer: "Подобрена преносимост, продуктивност и поддръжка.",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 17,
    question: "Какви операции НЕ могат да се извършват върху колекции в OCL?",
    choices: [
      "->includes(object)",
      "->includesAll(collection)",
      "->size",
      "->isEmpty",
      "->notEmpty",
      "->sum()",
      "->count(object)",
      "->add",
      "->select",
      "->reject()",
      "->collect()",
      "->forAll()",
      "->exists()",
      "->iterate()",
    ],
    correctAnswer: "->add",
    imageURL: null
  },

  {
    index: 19,
    question: "Какво задават времевите ограничения в диаграмите на времето?",
    choices: [
      "Методи за взаимодействие.",
      "Продължителността на събитията и състоянията.",
    ],
    correctAnswer: "Продължителността на събитията и състоянията.",
    imageURL: null
  },

  {
    index: 21,
    question: "Необходимо ли е комбинирането на UML и OCL за изграждане на модели - достатъчно точни, за да позволят автоматично преобразуване на модел в код?",
    choices: [
      "Да",
      "Не",
    ],
    correctAnswer: "Да",
    imageURL: null
  },
  {
    index: 22,
    question: "Какво НЕ е вярно относно OCL?",
    choices: [
      "OCL е формален език, който остава лесен за четене и писане",
      "OCL е чист език за спецификации",
      "OCL не е език за програмиране, а за моделиране",
      "Оценката на OCL израз е мигновена - състоянията на обектите в модела не могат да се променят по време на оценката",
      "OCL е език за програмиране",
      "OCL може да се използва не само за писане на ограничения, но и за всякакви изрази за запитвания",
      "OCL е декларативен език - какво трябва да се направи, но не и как"
    ],
    correctAnswer: "OCL е език за програмиране",
    imageURL: null
  }
];