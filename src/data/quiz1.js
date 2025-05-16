export const mysql1 = [
    {
        index: 1,
        question: "Какво е основното предназначение на SOAP?",
        choices: [
            "Изпращане на електронна поща",
            "Сериализация на информация за извикване на услуги в отдалечена система"
        ],
        correctAnswer: "Сериализация на информация за извикване на услуги в отдалечена система"
    },
    {
        index: 2,
        question: "Кой от следните протоколи е текстово-базиран?",
        choices: [
            "DCOM",
            "SOAP"
        ],
        correctAnswer: "SOAP"
    },
    {
        index: 3,
        question: "Кое е вярно относно спецификацията на SOAP съобщенията?",
        choices: [
            "Съобщенията са написани в JSON формат",
            "Съобщенията използват XML структура с envelope, header и body"
        ],
        correctAnswer: "Съобщенията използват XML структура с envelope, header и body"
    },
    {
        index: 4,
        question: "Какво съдържа SOAP Header?",
        choices: [
            "Основни данни на приложението",
            "Допълнителна информация за сигурност и обработка"
        ],
        correctAnswer: "Допълнителна информация за сигурност и обработка"
    },
    {
        index: 5,
        question: "Кой атрибут в SOAP Header указва задължителна обработка от получателя?",
        choices: [
            "Actor",
            "MustUnderstand"
        ],
        correctAnswer: "MustUnderstand"
    },
    {
        index: 6,
        question: "Кой елемент в SOAP съобщението съдържа данни, специфични за приложението?",
        choices: [
            "Header",
            "Body"
        ],
        correctAnswer: "Body"
    },
    {
        index: 7,
        question: "Коя характеристика НЕ е част от SOAP?",
        choices: [
            "Гъвкавост",
            "Зависимост от конкретен доставчик"
        ],
        correctAnswer: "Зависимост от конкретен доставчик"
    },
    {
        index: 8,
        question: "Каква е ролята на XML namespaces в SOAP?",
        choices: [
            "Да повишат сигурността на съобщенията",
            "Да разграничават елементи с еднакви имена от различни източници"
        ],
        correctAnswer: "Да разграничават елементи с еднакви имена от различни източници"
    },
    {
        index: 9,
        question: "Кой код за грешка се използва при невалидно пространство с имена?",
        choices: [
            "SOAP-ENV:VersionMismatch",
            "SOAP-ENV:Client"
        ],
        correctAnswer: "SOAP-ENV:VersionMismatch"
    },
    {
        index: 10,
        question: "Кой компонент на SOAP съобщението е задължителен?",
        choices: [
            "Envelope",
            "Fault"
        ],
        correctAnswer: "Envelope"
    },
    {
        index: 11,
        question: "Какво описва атрибутът 'encodingStyle' в SOAP?",
        choices: [
            "Типа MIME на съдържанието",
            "Правилата за сериализация на заглавията"
        ],
        correctAnswer: "Правилата за сериализация на заглавията"
    },
    {
        index: 12,
        question: "Кое от следните е пример за SOAP примитивен тип?",
        choices: [
            "array",
            "string"
        ],
        correctAnswer: "string"
    },
    {
        index: 13,
        question: "Кой е основният метод за предаване на SOAP съобщения?",
        choices: [
            "SMTP",
            "HTTP POST"
        ],
        correctAnswer: "HTTP POST"
    },
    {
        index: 14,
        question: "Какво съдържа елементът <faultString> в SOAP Fault?",
        choices: [
            "URI адрес",
            "Текстово описание на грешката"
        ],
        correctAnswer: "Текстово описание на грешката"
    },
    {
        index: 15,
        question: "Кое е вярно за SOAP кодиране?",
        choices: [
            "Използва JSON като стандарт",
            "Приема XML Schema като основа за типове"
        ],
        correctAnswer: "Приема XML Schema като основа за типове"
    },
    {
        index: 16,
        question: "Какъв тип протокол е SOAP в сравнение с CORBA и DCOM?",
        choices: [
            "Силно свързан",
            "Слабо свързан"
        ],
        correctAnswer: "Слабо свързан"
    },
    {
        index: 17,
        question: "Какво позволява RPC поддръжката в SOAP?",
        choices: [
            "Извикване на локални методи",
            "Извикване на методи на отдалечена система"
        ],
        correctAnswer: "Извикване на методи на отдалечена система"
    },
    {
        index: 18,
        question: "Какво НЕ трябва да съдържа едновременно SOAP Body?",
        choices: [
            "XML параметри и цифров подпис",
            "Данни за приложение и информация за грешка"
        ],
        correctAnswer: "Данни за приложение и информация за грешка"
    },
    {
        index: 19,
        question: "Какъв URI е препоръчително да се използва за пространство с имена в SOAP?",
        choices: [
            "Празен стринг („“)",
            "Пълен URI"
        ],
        correctAnswer: "Пълен URI"
    },
    {
        index: 20,
        question: "Кое от изброените е вярно за комплексните типове в SOAP?",
        choices: [
            "Поддържат се само едномерни масиви",
            "Изискват указване на тип и размер"
        ],
        correctAnswer: "Изискват указване на тип и размер"
    }
]
