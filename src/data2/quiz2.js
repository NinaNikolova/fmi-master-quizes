// Z нотация. Логики и доказателства
export const mysql2 = [
    {
        index: 1,
        question: "Какви са основните елементи на формалната система?",
        choices: [
            "Теореми и аксиоми",
            "Формален език -синтаксис/азбука + граматични правила/ и система за извод-заключение /аксиоми + правила за извод/",
        ],
        correctAnswer: "Формален език -синтаксис/азбука + граматични правила/ и система за извод-заключение /аксиоми + правила за извод/",
        imageURL: null
    },

    {
        index: 3,
        question: "Какво включва системата за извод/заключение (семантика) във формалната система?",
        choices: [
            "Граматични правила и азбука",
            "Аксиоми и правила за извод",
        ],
        correctAnswer: "Аксиоми и правила за извод",
        imageURL: null
    },

    {
        index: 5,
        question: "Кои аспекти на проектираната система трябва да бъдат описани във формалната спецификация?",
        choices: [
            "Състояния на системата, структури от данни, техни свойства и операции",
            "Релации между обектите и системните състояния"
        ],
        correctAnswer: "Състояния на системата, структури от данни, техни свойства и операции",
        imageURL: null
    },
    {
        index: 6,
        question: "Кои две теории са в основата на всяка софтуерна спецификация в Z нотацията?",
        choices: [
            "Теорията на графите и теорията на числата",
            "Математическата логика и теорията на множествата",
        ],
        correctAnswer: "Математическата логика и теорията на множествата",
        imageURL: null
    },
    {
        index: 7,
        question: "Какво е Z нотацията?",
        choices: [
            "Z нотацията организира структури, наречени схеми за: 1/събиране информацията,2/ формулиране на общи описания,3/доказателства за изследване характеристиките на системата.",
            "Графични диаграми за визуализиране на състоянието на системата",

        ],
        correctAnswer: "Z нотацията организира структури, наречени схеми за: 1/събиране информацията,2/ формулиране на общи описания,3/доказателства за изследване характеристиките на системата.",
        imageURL: null
    },
    {
        index: 6,
        question: "За какво може да се използва езикът на схемите в Z нотацията?",
        choices: [
            "За проектиране на графичен интерфейс и визуализиране на данни",
            "За описание на тип(данни), състоянието на системата и начините за промяна на състоянието",
        ],
        correctAnswer: "За описание на тип(данни), състоянието на системата и начините за промяна на състоянието",
        imageURL: null
    },
    {
        index: 7,
        question: "Кои са двете основни формални системи, използвани в логиката за описание на софтуерни системи?",
        choices: [
            "Пропозиционна логика и предикатна логика",
            "Автоматна теория и лингвистика"
        ],
        correctAnswer: "Пропозиционна логика и предикатна логика",
        imageURL: null
    },
    {
        index: 8,
        question: "Кой не е от основни методи за доказателство, използвани за тези системи?",
        choices: [
            "Дедукция (Natural deduction)",
            "Доказателство чрез опровергаване (Proof by contradiction)",
            "Доказателство чрез анализ на случаи (Proof by case analysis)",
            "Разсъждение чрез равенства (Equational reasoning)",
            "Хеширане на данни",
        ],
        correctAnswer: "Хеширане на данни",
        imageURL: null
    },
    {
        index: 9,
        question: "Какво представлява пропозиционната логика?",
        choices: [
            "Метод за създаване на сложни математически уравнения",
            "Езикът на логиката, базиран на твърдения, които могат да бъдат или верни, или неверни",
        ],
        correctAnswer: "Езикът на логиката, базиран на твърдения, които могат да бъдат или верни, или неверни",
        imageURL: null
    },
    {
        index: 10,
        question: "Твърдението е изявление (изказване) за предполагаем факт. То е или вярно или невярно, но никога и двете. Кое от следните твърдения не е пример за пропозиционно твърдение?",
        choices: [
            "Портокалът е плод",
            "Паролата е осемзнакова символна поредица",
            "Пет е по-голямо от четири",
            "Ще си купим ли картофи днес?"
        ],
        correctAnswer: "Ще си купим ли картофи днес?",
        imageURL: null
    },
    {
        index: 12,
        question: "Кой оператор има най-висок приоритет в пропозиционната логика?",
        choices: [
            "¬ (отрицание - 'не')",
            "∧ (конюнкция - 'и')",
            "∨ (дизюнкция - 'или')",
            "→ (импликация - 'ако... то')",
            "↔ (еквиваленция - 'ако и само ако')"
        ],
        correctAnswer: "¬ (отрицание - 'не')",
        imageURL: null
    },
    {
        index: 13,
        question: "Какво означава всеки примитивен символ (p, q, r, ...) в пропозиционната логика?",
        choices: [
            "Програмен код за логически операции",
            "Твърдение, което се свързва със съответната си стойност на истинност: истина (t) или лъжа (f)",
        ],
        correctAnswer: "Твърдение, което се свързва със съответната си стойност на истинност: истина (t) или лъжа (f)",
        imageURL: null
    },
    {
        index: 14,
        question: "Как се определя истинността на сложни твърдения в пропозиционната логика?",
        choices: [
            "От истинността на съставящите ги твърдения",
            "От броя на логическите оператори",
        ],
        correctAnswer: "От истинността на съставящите ги твърдения",
        imageURL: null
    },
    {
        index: 16,
        question: "Какво представлява тавтологията в пропозиционната логика?",
        choices: [
            "Твърдение, което винаги е невярно",
            "Твърдение, което винаги е вярно",
        ],
        correctAnswer: "Твърдение, което винаги е вярно",
        imageURL: null
    },
    {
        index: 17,
        question: "Кое от следните твърдения е пример за противоречие (contradiction, винаги не е вярно)?",
        choices: [
            "p ∧ ¬p",
            "p ∨ ¬p",
        ],
        correctAnswer: "p ∧ ¬p",
        imageURL: null
    },
    {
        index: 18,
        question: "Кое от следните твърдения е случайност (contingency)?",
        choices: [
            "Твърдение, което винаги е вярно",
            "Твърдение, което е нито истина, нито лъжа",
        ],
        correctAnswer: "Твърдение, което е нито истина, нито лъжа",
        imageURL: null
    },

    {
        index: 24,
        question: "Каква е връзката между предпоставката и заключението в дедукцията?",
        choices: [
            "Истинността на заключението е следствие на истинността на предпоставката",
            "Заключението е независимо от предпоставките",
        ],
        correctAnswer: "Истинността на заключението е следствие на истинността на предпоставката",
        imageURL: "https://lawschooli.com/wp-content/uploads/2014/01/conclusion-housedog-1024x5851.png"
    },
    {
        index: 25,
        question: "Как се конструира доказателството чрез дедукция?",
        choices: [

            "Отпред назад, започвайки с предпоставките",
            "Отзад напред, използва се формулираната цел, за да се избере подходящо правилото за извод",
        ],
        correctAnswer: "Отзад напред, използва се формулираната цел, за да се избере подходящо правилото за извод",
        imageURL: null
    },
    {
        index: 30,
        question: "Какво гласи правилото на Modus Tollens (the formal name for indirect proof or proof by contradiction)?",
        choices: [
            "Ако q е вярно, то p е вярно",
            "Ако p => q е вярно и q е лъжа, то p е лъжа",
        ],
        correctAnswer: "Ако p => q е вярно и q е лъжа, то p е лъжа",
        imageURL: null
    },

    {
        index: 34,
        question: "Каква е техниката при доказателство чрез разглеждане на различни случаи?",
        choices: [
            "Прекъсваме доказателството на части и след това ги комбинираме",
            "Доказваме твърдения чрез индукция",
        ],
        correctAnswer: "Прекъсваме доказателството на части и след това ги комбинираме",
        imageURL: null
    },
    {
        index: 37,
        question: "Какво гласи правилото на Modus Ponens (Latin: mode - affirms /твърдя/)?",
        choices: [
            "Ако p е вярно и p => q е вярно, то q е вярно",
            "Ако q е вярно, то p е вярно",
        ],
        correctAnswer: "Ако p е вярно и p => q е вярно, то q е вярно",
        imageURL: null
    },

    {
        index: 44,
        question: "Какво представляват универсалните твърдения в предикатната логика?",
        choices: [
            "Отнасят се само до числови стойности.",
            "Описват характеристики общи на всеки обект от разглежданото множество.",
        ],
        correctAnswer: "Описват характеристики общи на всеки обект от разглежданото множество.",
        imageURL: null
    },

    {
        index: 47,
        question: "Кои елементи включва азбуката на предикатната логика?",
        choices: [
            "Само пропозиционни символи.",
            "Определителите ∀ /универсален/,  ∃ /екзистенциален/ и ●, както и символи от пропозиционната логика.",
        ],
        correctAnswer: "Определителите ∀ /универсален/,  ∃ /екзистенциален/ и ●, както и символи от пропозиционната логика.",
        imageURL: null
    },
    {
        index: 51,
        question: "Кое от следните е вярно за правилото за заместване (Substitution rule) в предикатната логика?",
        choices: [
            "Ако m = n, тогава валидното за n не е валидно за m.",
            "Ако m = n, то валидното за n е валидно и за m.",
        ],
        correctAnswer: "Ако m = n, то валидното за n е валидно и за m.",
        imageURL: null
    },

    {
        index: 53,
        question: "Какво означава символа ': =' в предикатната логика?",
        choices: [
            "Той представя факта, че два обекта са еднакви.",
            "Той представя факта, че два обекта не са еднакви."
        ],
        correctAnswer: "Той представя факта, че два обекта са еднакви.",
        imageURL: null
    },

];