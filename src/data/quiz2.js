export const mysql2 = [
	{
		index: 1,
		question: "Какво описва WSDL спецификацията?",
		choices: [
			"Само местоположението на уеб услугата",
			"Какво прави уеб услугата, къде е достъпна и как да бъде извикана"
		],
		correctAnswer: "Какво прави уеб услугата, къде е достъпна и как да бъде извикана"
	},
	{
		index: 2,
		question: "Кой е кореновият елемент в WSDL документа?",
		choices: [
			"service",
			"definitions"
		],
		correctAnswer: "definitions"
	},
	{
		index: 3,
		question: "Какво описва елементът types в WSDL?",
		choices: [
			"Описание на съобщенията",
			"Типове данни, използвани в уеб услугата"
		],
		correctAnswer: "Типове данни, използвани в уеб услугата"
	},
	{
		index: 4,
		question: "Какво съдържа елементът message в WSDL?",
		choices: [
			"Адрес за достъп до услугата",
			"Логически единици от типизирана информация"
		],
		correctAnswer: "Логически единици от типизирана информация"
	},
	{
		index: 5,
		question: "Какво дефинира елементът portType?",
		choices: [
			"Конкретната реализация на услугата",
			"Абстрактен интерфейс като логическа група от операции"
		],
		correctAnswer: "Абстрактен интерфейс като логическа група от операции"
	},
	{
		index: 6,
		question: "Кой елемент дефинира реализацията на операция в SOAP контекст?",
		choices: [
			"soap:operation",
			"documentation"
		],
		correctAnswer: "soap:operation"
	},
	{
		index: 7,
		question: "Какъв стил на комуникация описва шаблонът 'One-way'?",
		choices: [
			"Съобщение с отговор",
			"Съобщение без отговор"
		],
		correctAnswer: "Съобщение без отговор"
	},
	{
		index: 8,
		question: "Какво определя атрибутът style в soap:binding?",
		choices: [
			"Типа на данните",
			"Стил на формата на SOAP съобщенията (rpc или document)"
		],
		correctAnswer: "Стил на формата на SOAP съобщенията (rpc или document)"
	},
	{
		index: 9,
		question: "Кой елемент в WSDL съдържа URI адрес за достъп до услугата?",
		choices: [
			"soap:address",
			"portType"
		],
		correctAnswer: "soap:address"
	},
	{
		index: 10,
		question: "Кой елемент осигурява възможност за импортиране на други WSDL документи?",
		choices: [
			"import",
			"binding"
		],
		correctAnswer: "import"
	},
	{
		index: 11,
		question: "Кой шаблон за комуникация е подходящ за синхронна комуникация със заявка и отговор?",
		choices: [
			"Request/Response",
			"Notification"
		],
		correctAnswer: "Request/Response"
	},
	{
		index: 12,
		question: "Какво определя атрибутът use в soap:body?",
		choices: [
			"Типа на транспортния протокол",
			"Начина на форматиране на SOAP съобщението (encoded или literal)"
		],
		correctAnswer: "Начина на форматиране на SOAP съобщението (encoded или literal)"
	},
	{
		index: 13,
		question: "Каква е ролята на елемента binding?",
		choices: [
			"Дефинира логическата структура на съобщенията",
			"Определя как клиентът и услугата обменят съобщения (протокол и формат)"
		],
		correctAnswer: "Определя как клиентът и услугата обменят съобщения (протокол и формат)"
	},
	{
		index: 14,
		question: "Кой елемент в WSDL съдържа допълнителна четима документация?",
		choices: [
			"documentation",
			"service"
		],
		correctAnswer: "documentation"
	},
	{
		index: 15,
		question: "Какво съдържа шаблонът за комуникация Notification?",
		choices: [
			"Изпращане на съобщение от услугата към клиента без очакване на отговор",
			"Изпращане на съобщение от клиента към услугата"
		],
		correctAnswer: "Изпращане на съобщение от услугата към клиента без очакване на отговор",
		imageURL: "https://slideplayer.com/slide/5243761/16/images/29/WSDL+%E2%80%93+Patterns+of+Operation.jpg"
	},
	{
		index: 16,
		question: "Какво описва атрибутът targetNamespace в definitions?",
		choices: [
			"Стил на съобщенията",
			"Логическото пространство с имена за услугата"
		],
		correctAnswer: "Логическото пространство с имена за услугата"
	},
	{
		index: 17,
		question: "Какво описва шаблонът Solicit/Response?",
		choices: [
			"Клиентът изпраща съобщение и получава отговор",
			"Услугата изпраща съобщение и получава отговор"
		],
		correctAnswer: "Услугата изпраща съобщение и получава отговор",
		imageURL: "https://slideplayer.com/slide/5243761/16/images/29/WSDL+%E2%80%93+Patterns+of+Operation.jpg"
	},
	{
		index: 18,
		question: "Кой шаблон е подходящ за асинхронна комуникация?",
		choices: [
			"One-way",
			"Request/Response"
		],
		correctAnswer: "One-way",
		imageURL: "https://slideplayer.com/slide/5243761/16/images/29/WSDL+%E2%80%93+Patterns+of+Operation.jpg"
	},
	{
		index: 19,
		question: "Какво дефинира елементът operation в portType?",
		choices: [
			"Типове данни в XML схема",
			"Операция с входни/изходни съобщения и грешки"
		],
		correctAnswer: "Операция с входни/изходни съобщения и грешки"
	},
	{
		index: 20,
		question: "Какъв тип комуникация описва шаблонът Request/Response?",
		choices: [
			"Клиентът получава съобщение без да е изпратил",
			"Клиентът изпраща съобщение и получава отговор"
		],
		correctAnswer: "Клиентът изпраща съобщение и получава отговор",
		imageURL: "https://slideplayer.com/slide/5243761/16/images/29/WSDL+%E2%80%93+Patterns+of+Operation.jpg"
	},
	{
		index: 21,
		question: "Кой не е от основните елементи на WSDL спецификацията?",
		choices: [
			"definitions",
			"types",
			"message",
			"operation",
			"portType",
			"binding",
			"service",
			"export",
			"documentation",
			"import"
		],
		correctAnswer: "export",
		imageURL: "https://www.researchgate.net/publication/329017186/figure/fig1/AS:693968564146184@1542466407560/The-WSDL-Document-Structure.ppm"
	},
	{
		index: 22,
		question: "Кой не е от атрибути на елемента definitions?",
		choices: [
			"name",
			"targetNamespace",
			"xmlns:tns",
			"xmlns",
			"xmlns:soap",
			"xmlns:xsd",
			"service",

		],
		correctAnswer: "service",
		imageURL: null
	},
	{
		index: 23,
		question: "Кой не е част от елемента types/ дефинира XML схеми или съдържа референции към външни XML схеми/?",
		choices: [
			"sequence - последователност от елементи",
			"all - дефинира всички дефинирани в комплексния тип елементи са задължителни",
			"xmlns",
		],
		correctAnswer: "xmlns",
		imageURL: null
	},
	{
		index: 24,
		question: "Part е част от елемента Message/логическите единици типизирана информация, които се обменят при комуникацията с уеб услугата/. Какво не е характерно за part - поделемент на message?",
		choices: [
			"Вградени типове в XML схема",
			"Комплексни типове, дефинирани в елемента types",
			"Комплексни типове, дефинирани във външни WSDL документи, реферирани с елемента import",
			"<wsdl:part name='PurchaseOrder' type='tns:POType'/>",
			"<portType name='Hello_PortType'>"
		],
		correctAnswer: "<portType name='Hello_PortType'>",
		imageURL: null
	},
	{
		index: 25,
		question: "Operation е част от елементите portType и binding. Какво не е характерно за него?",
		choices: [
			"Дефинира операция, която се предоставя от услугата",
			"Дефинира типове",
			"Съдържа най елемент input и/или един елемент output и произволен брой елементи fault",
		],
		correctAnswer: "Дефинира типове",
		imageURL: null
	},
	{
		index: 26,
		question: "Елементът binding дефинира начина, по който клиентът и уеб услугата си обменят съобщения. Кой елемент не съдържа?",
		choices: [
			"name - име, с което елемента binding се реферира в WSDL документа",
			"Дефинира типове",
			"type- Идентифицира елемента portType, за който се дефинира обвързване",
		],
		correctAnswer: "Дефинира типове",
		imageURL: null
	},
	{
		index: 27,
		question: "SOAP binding: Разширение на WSDL 1.1 за SOAP 1.1. Какво не е характерно за него?",
		choices: [
			"Не осигурява обвързването на WSDL документа със SOAP протокола",
			"Показва начина за специфициране на адреса за SOAP крайните точки",
			"При обвързване с HTTP, дефинира URI за SoapAction заглавието на HTTP заявката",
			"Списък с дефиниции за всички заглавни елементи в SOAP envelope",
			"Начин за специфициране на SOAP коренови елементи в WSDL",
			"Има атрибути style: стил за формата на SOAP съобщенията (rpc или document) и transport: транспортен протокол"
		],
		correctAnswer: "Не осигурява обвързването на WSDL документа със SOAP протокола",
		imageURL: null
	},
	{
		index: 28,
		question: "Какво не е характерно за soap:operation?",
		choices: [
			"Свързване на специфична операция със специфична SOAP реализация",
			"Има атрибут SOAPAction /SOAPAction заглавие на HTTP за идентифициране на услугата (крайна точка за заявка към услугата)",
			"Има атрибут style /стил за формата на SOAP съобщенията/",
			"Не свързва специфична операция със специфична SOAP реализация"
		],
		correctAnswer: "Не свързва специфична операция със специфична SOAP реализация",
		imageURL: null
	},
	{
		index: 28,
		question: "Какво не е характерно за soap:body?",
		choices: [
			"Входни и изходни съобщения",
			"Има атрибут use - определя дали частите на SOAP съобщението са кодирани",
			"Има атрибут namespace: пространство с имена, асоциирано с уеб услугата",
			"Не свързва специфична операция със специфична SOAP реализация",
			"Няма входни и изходни съобщения"
		],
		correctAnswer: "Няма входни и изходни съобщения",
		imageURL: null
	},
	{
		index: 28,
		question: "Какво не е характерно за service?",
		choices: [
			"Специфицира колекция от крайни точки за достъп до уеб услугата",
			"Има атрибут port - специфицира достъп до уеб услугата",
			"Има атрибут soap:address - URI на крайна точка за достъп до уеб услугата",
			"Има атрибут documentation - текстови коментари",
			"Има атрибут use"
		],
		correctAnswer: "Има атрибут use",
		imageURL: null
	}
]
