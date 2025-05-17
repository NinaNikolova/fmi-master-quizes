export const mysql4 = [
	{
		index: 1,
		question: "Какво означава REST в контекста на уеб услугите?",
		choices: [
			"Remote Execution of Server Transactions",
			"Rapid Elastic Service Transfer",
			"REpresentational State Transfer",
			"Redundant Secure Transactions"
		],
		correctAnswer: "REpresentational State Transfer",
		imageURL: null
	},
	{
		index: 2,
		question: "Кой HTTP метод се използва за създаване на нов ресурс?",
		choices: [
			"GET",
			"POST",
			"DELETE",
			"HEAD"
		],
		correctAnswer: "POST",
		imageURL: null
	},
	{
		index: 3,
		question: "Кой HTTP метод е безопасен и идемпотентен?",
		choices: [
			"POST",
			"DELETE",
			"PUT",
			"GET"
		],
		correctAnswer: "GET",
		imageURL: null
	},
	{
		index: 4,
		question: "Как се нарича ресурс, съставен от други ресурси?",
		choices: [
			"Колекция",
			"Съставен ресурс",
			"Идемпотентен ресурс",
			"Абстрактен ресурс"
		],
		correctAnswer: "Съставен ресурс",
		imageURL: null
	},
	{
		index: 5,
		question: "Каква е основната характеристика на HTTP протокола?",
		choices: [
			"Работи само с POST заявки",
			"Поддържа сесии на сървъра",
			"Протокол със състояние",
			"Протокол без състояние"
		],
		correctAnswer: "Протокол без състояние",
		imageURL: null
	},
	{
		index: 6,
		question: "Как се нарича възможността HTTP заявките и отговорите да се наблюдават от прокси или защитна стена?",
		choices: [
			"Идентификация",
			"Кеширане",
			"Видимост",
			"Удостоверяване"
		],
		correctAnswer: "Видимост",
		imageURL: null
	},
	{
		index: 7,
		question: "Кой от следните методи НЕ е идемпотентен?",
		choices: [
			"PUT",
			"GET",
			"DELETE",
			"POST"
		],
		correctAnswer: "POST",
		imageURL: null
	},
	{
		index: 8,
		question: "Кой HTTP метод се използва за изтриване на ресурс?",
		choices: [
			"HEAD",
			"DELETE",
			"PUT",
			"OPTIONS"
		],
		correctAnswer: "DELETE",
		imageURL: null
	},
	{
		index: 9,
		question: "Как се идентифицират ресурсите в RESTful архитектура?",
		choices: [
			"С IP адрес",
			"С cookie",
			"С URL/URI",
			"С JSON обект"
		],
		correctAnswer: "С URL/URI",
		imageURL: null
	},
	{
		index: 10,
		question: "Кой HTTP метод позволява обновяване на съществуващ ресурс?",
		choices: [
			"PUT",
			"GET",
			"HEAD",
			"OPTIONS"
		],
		correctAnswer: "PUT",
		imageURL: null
	},
	{
		index: 11,
		question: "Кое от следните е пример за използване на POST при асинхронни задачи?",
		choices: [
			"Изтриване на потребител",
			"Изпращане на запитване с голям обем данни",
			"Обновяване на ресурс",
			"Проверка на статус на заявка"
		],
		correctAnswer: "Изпращане на запитване с голям обем данни",
		imageURL: null
	},
	{
		index: 12,
		question: "Какво е основното предимство на съставните ресурси?",
		choices: [
			"По-лесна идентификация на URI",
			"По-добра сигурност",
			"Извличане на обединена информация с една заявка",
			"По-бързо кеширане"
		],
		correctAnswer: "Извличане на обединена информация с една заявка",
		imageURL: null
	},
	{
		index: 13,
		question: "Какво означава MIME в контекста на RESTful услуги?",
		choices: [
			"Метод за криптиране",
			"Метод за кодиране на URI",
			"Формат за представяне на съдържание",
			"Тип на база данни"
		],
		correctAnswer: "Формат за представяне на съдържание",
		imageURL: null
	},
	{
		index: 14,
		question: "Коя HTTP заглавка указва типа на съдържанието?",
		choices: [
			"Content-Length",
			"Content-Type",
			"Accept",
			"Authorization"
		],
		correctAnswer: "Content-Type",
		imageURL: null
	},
	{
		index: 15,
		question: "Какво прави HTTP методът OPTIONS?",
		choices: [
			"Изтрива ресурс",
			"Показва наличните методи за даден ресурс",
			"Създава нов ресурс",
			"Обновява съществуващ ресурс"
		],
		correctAnswer: "Показва наличните методи за даден ресурс",
		imageURL: null
	},
	{
		index: 16,
		question: "Какво е идемпотентен HTTP метод?",
		choices: [
			"Метод, който винаги създава нов ресурс",
			"Метод, който променя състоянието на сървъра всеки път",
			"Метод, при който многократното изпълнение води до същия резултат",
			"Метод, който използва JSON"
		],
		correctAnswer: "Метод, при който многократното изпълнение води до същия резултат",
		imageURL: null
	},
	{
		index: 17,
		question: "Кога е подходящо да се използва PUT вместо POST?",
		choices: [
			"Когато сървърът генерира URI",
			"Когато клиентът задава URI",
			"Когато се изисква удостоверяване",
			"Когато се използва XML"
		],
		correctAnswer: "Когато клиентът задава URI",
		imageURL: null
	},
	{
		index: 18,
		question: "Какво се използва за запазване на състояние в REST архитектура?",
		choices: [
			"Сесии на сървъра",
			"Кеширане на POST заявки",
			"Кодиране в URI",
			"Cookies"
		],
		correctAnswer: "Кодиране в URI",
		imageURL: null
	},
	{
		index: 19,
		question: "Какво НЕ е вярно за метода POST?",
		choices: [
			"Използва се за създаване на нови ресурси",
			"Методът е идемпотентен",
			"Не се кешира от HTTP кеш",
			"Не се повтаря автоматично от инструменти"
		],
		correctAnswer: "Методът е идемпотентен",
		imageURL: null
	},
	{
		index: 20,
		question: "Какво е целта на използването на колекции в RESTful услуги?",
		choices: [
			"Изолиране на данни по сигурност",
			"Разделяне на GET и POST",
			"Групиране на ресурси и изпълнение на операции върху тях",
			"Изпращане на JSON като MIME"
		],
		correctAnswer: "Групиране на ресурси и изпълнение на операции върху тях",
		imageURL: null
	}
];

