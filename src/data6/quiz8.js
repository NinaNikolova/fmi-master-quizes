export const mysql8 = [
  {
    index: 1,
    question: "Какво представлява **Attribute selection** в контекста на **Data Mining**?",
    choices: [
      "Избор на случайни атрибути за подобряване на модела.",
      "Избор на най-подходящите атрибути за подобряване на производителността на модела.",
    ],
    correctAnswer: "Избор на най-подходящите атрибути за подобряване на производителността на модела.",
    imageURL: null
  },
  {
    index: 2,
    question: "Кой подход за **Attribute selection** е независим от конкретния алгоритъм за машинно обучение?",
    choices: [
      "**Wrapper approach**",
      "**Filter approach**",
    ],
    correctAnswer: "**Filter approach**",
    imageURL: null
  },
  {
    index: 3,
    question: "Какво е целта на **Attribute discretization** в **Data Mining**?",
    choices: [
      "Превръщане на числови атрибути в номинални за по-лесна обработка.",
      "Увеличаване на броя на атрибутите за по-добър модел.",
    ],
    correctAnswer: "Превръщане на числови атрибути в номинални за по-лесна обработка.",
    imageURL: null
  },
  {
    index: 4,
    question: "Кой метод за **Discretization** не използва информация за класа?",
    choices: [
      "**Supervised discretization**",
      "**Unsupervised discretization**",
    ],
    correctAnswer: "**Unsupervised discretization**",
    imageURL: null
  },
  {
    index: 5,
    question: "Кой от следните методи е пример за **Unsupervised discretization**?",
    choices: [
      "Базирана на ентропия",
      "**Equal-frequency binning**",
    ],
    correctAnswer: "**Equal-frequency binning**",
    imageURL: null
  },
  {
    index: 6,
    question: "Какво представлява **Supervised discretization**?",
    choices: [
      "Дискретизация без използване на информация за класовете.",
      "Дискретизация, която използва информация за класовете за определяне на интервалите.",
    ],
    correctAnswer: "Дискретизация, която използва информация за класовете за определяне на интервалите.",
    imageURL: null
  },
  {
    index: 7,
    question: "Кой принцип се използва при **Supervised discretization** базирана на ентропия?",
    choices: [
      "Принцип на минимална дължина на описанието (**MDL**)",
      "Минимизиране на абсолютната грешка",

    ],
    correctAnswer: "Принцип на минимална дължина на описанието (**MDL**)",
    imageURL: null
  },
  {
    index: 8,
    question: "Възможно ли е при **Entropy-based discretization** два съседни интервала да имат един и същ клас?",
    choices: [
      "Не, невъзможно е.",
      "Да, възможно е.",
    ],
    correctAnswer: "Да, възможно е.",
    imageURL: null
  },
  {
    index: 9,
    question: "Какво е целта на **Principal Component Analysis (PCA)**?",
    choices: [
      "Увеличаване на размерността на данните.",
      "Намаляване на размерността чрез намиране на важни посоки на вариация.",
    ],
    correctAnswer: "Намаляване на размерността чрез намиране на важни посоки на вариация.",
    imageURL: null
  },
  {
    index: 10,
    question: "Защо **Random projections** са предпочитани пред **PCA** в някои случаи?",
    choices: [
      "Защото са по-евтини изчислително и запазват разстоянията добре.",
      "Защото са по-точни.",

    ],
    correctAnswer: "Защото са по-евтини изчислително и запазват разстоянията добре.",
    imageURL: null
  },
  {
    index: 11,
    question: "Какво представлява **Reservoir sampling**?",
    choices: [
      "Метод за случайно избиране на фиксиран брой елементи от поток от данни.",
      "Метод за пълно копиране на данни в база данни.",
    ],
    correctAnswer: "Метод за случайно избиране на фиксиран брой елементи от поток от данни.",
    imageURL: null
  },
  {
    index: 12,
    question: "Кое от следните е пример за трансформация при **Text to attribute vectors**?",
    choices: [
      "Превръщане на текст в **bag of words** с TF × IDF стойности.",
      "Използване на цели числа за представяне на текст.",

    ],
    correctAnswer: "Превръщане на текст в **bag of words** с TF × IDF стойности.",
    imageURL: null
  },
  {
    index: 13,
    question: "Какво е целта на **Data cleansing** в **Data Mining**?",
    choices: [
      "Добавяне на шум към данните за подобряване на модела.",
      "Премахване или коригиране на грешни или непълни данни.",
    ],
    correctAnswer: "Премахване или коригиране на грешни или непълни данни.",
    imageURL: null
  },
  {
    index: 14,
    question: "Кой подход се използва при **Robust regression** за справяне с аномалии?",
    choices: [
      "Минимизиране на квадратична грешка.",
      "Минимизиране на абсолютна грешка или премахване на **outliers**.",
    ],
    correctAnswer: "Минимизиране на абсолютна грешка или премахване на **outliers**.",
    imageURL: null
  },
  {
    index: 15,
    question: "Какво е **Anomaly detection** в контекста на **Data Mining**?",
    choices: [
      "Откриване на необичайни или отклоняващи се записи.",
      "Откриване на нормални модели в данните.",

    ],
    correctAnswer: "Откриване на необичайни или отклоняващи се записи.",
    imageURL: null
  },
  {
    index: 16,
    question: "Кой метод за **Anomaly detection** използва комбинация от различни алгоритми?",
    choices: [
      "Използване на един алгоритъм за всички случаи.",
      "Консервативен консенсус от множество алгоритми, напр. **decision tree**, **nearest-neighbor**, **LDA**.",
    ],
    correctAnswer: "Консервативен консенсус от множество алгоритми, напр. **decision tree**, **nearest-neighbor**, **LDA**.",
    imageURL: null
  },
  {
    index: 17,
    question: "Какво е недостатък на **Anomaly detection** чрез консервативен консенсус?",
    choices: [
      "Не може да открие аномалии в големи набори данни.",
      "Може да засегне редки класове.",

    ],
    correctAnswer: "Може да засегне редки класове.",
    imageURL: null
  },
  {
    index: 18,
    question: "Какво представлява **Correlation-based Feature Selection (CFS)**?",
    choices: [
      "Метод за избор на атрибути чрез измерване на ентропия и взаимна несигурност между атрибути.",
      "Метод за случайно избиране на атрибути.",
    ],
    correctAnswer: "Метод за избор на атрибути чрез измерване на ентропия и взаимна несигурност между атрибути.",
    imageURL: null
  },
  {
    index: 19,
    question: "Защо **Naïve Bayes** се справя добре с нерелевантни атрибути?",
    choices: [
      "Защото игнорира всички атрибути.",
      "Защото предполага условна независимост между атрибутите.",
    ],
    correctAnswer: "Защото предполага условна независимост между атрибутите.",
    imageURL: null
  },
  {
    index: 20,
    question: "Кое от следните е пример за трансформация на **Time series**?",
    choices: [
      "Изместване (**shifting**) или разлика (**delta**) между стойности.",
      "Добавяне на случайни атрибути.",

    ],
    correctAnswer: "Изместване (**shifting**) или разлика (**delta**) между стойности.",
    imageURL: null
  }
];