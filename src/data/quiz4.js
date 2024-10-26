// Object, Class, and Profile Diagrams. Class Stereotypes and Associations.
export const mysql4 = [
	{
		index: 1,
		question: "Which of the following is basic UML 2.x diagrams?",
		choices: [
			"Behaviour and structure",
			"Communication Plan",
			"Flowchart Diagram",
			"Relationship Model"
		],
		correctAnswer: "Behaviour and structure",
		imageURL: null
	},
	{
		index: 2,
		question: "Which of the following isn't behaviour diagram?",
		choices: [
			"Activity",
			"Interaction",
			"Class",
			"State machine",
			"Use case"
		],
		correctAnswer: "Class",
		imageURL: null
	},
	{
		index: 3,
		question: "Which of the following isn't structure diagram?",
		choices: [
			"Activity",
			"Component",
			"Class",
			"Object",
			"Composite structure",
			"Deployment",
			"Package",
			"Profile"
		],
		correctAnswer: "Activity",
		imageURL: null
	},
	{
		index: 4,
		question: "Which of the following isn't interaction diagram?",
		choices: [
			"Communication",
			"Interaction overview",
			"Class",
			"Sequence",
			"Timing",

		],
		correctAnswer: "Class",
		imageURL: null
	},
	{
		index: 5,
		question: "User requirements are statements in natural language plus diagrams of the services the system provides and its operational constraints. They are written for customers?",
		choices: [
			"Yes",
			"No"
		],
		correctAnswer: "Yes",
		imageURL: null
	},
	{
		index: 6,
		question: "System requirements - a structured document setting out detailed descriptions of the system’s functions, services and operational constraints. Defines what should be implemented so may be part of a contract between client and contractor. Written for dev-op’s?",
		choices: [
			"Yes",
			"No"
		],
		correctAnswer: "Yes",
		imageURL: null
	},
	{
		index: 7,
		question: "Who aren't user requirements important for? ",
		choices: [
			"Client managers",
			"System end-users",
			"Client engineers",
			"Contractor managers",
			"System architects",
			"Software developers"
		],
		correctAnswer: "Software developers",
		imageURL: null
	},
	{
		index: 8,
		question: "Who aren't system requirements important for? ",
		choices: [
			"System end-users",
			"Client engineers",
			"Contractor managers",
			"System architects",
			"Software developers"
		],
		correctAnswer: "Contractor managers",
		imageURL: null
	},
	{
		index: 9,
		question: "Which of the following statements isn't true regarding non-functional requirements?",
		choices: [
			"Constraints on the services or functions offered by the system such as timing constraints, constraints on the development process, standards, etc.",
			"Often apply to the system as a whole rather than individual features or services.",
			"Statements of services the system should provide",
			"Non-functional requirements may be more critical than functional requirements. If these are not met, the system may be useless.",
			"Process requirements may also be specified mandating a particular IDE, programming language or development method."
		],
		correctAnswer: "Statements of services the system should provide",
		imageURL: null
	},
	{
		index: 10,
		question: "What don't functional requirements include?",
		choices: [
			"Statements of services the system should provide, how the system should react to particular inputs and how the system should behave in particular situations.",
			"May state what the system should not do",
			"Domain requirements -  a subset of the functional req’s",
			"Timing constraints",
			"Describe functionality or system services",
			"May be highlevel statements of what the system should do",
			"Functional system requirements should describe the system services in detail"
		],
		correctAnswer: "Timing constraints",
		imageURL: null
	},
	{
		index: 10,
		question: "What doesn't non-functional classfication include?",
		choices: [
			"Product requirements",
			"Organisational requirements",
			"External requirements",
			"Domains",

		],
		correctAnswer: "Domains",
		imageURL: null
	},
	{
		index: 11,
		question: "Which of the following is NOT a focus of Object-Oriented Analysis (OOA)?",
		choices: [
			"Defining the problem in terms of real-world objects",
			"Identifying candidate software objects",
			"Designing the system architecture",
			"Exploring solution alternatives"
		],
		correctAnswer: "Designing the system architecture",
		imageURL: null
	},
	{
		index: 12,
		question: "Which of the following is NOT a primary focus of Object-Oriented Design (OOD)?",
		choices: [
			"Defining the solution to the problem",
			"Creating the system requirements",
			"Defining components, classes, and interfaces",
			"Refining candidate objects from analysis",
		],
		correctAnswer: "Creating the system requirements",
		imageURL: null
	},
	{
		index: 13,
		question: "Which of the following correctly identifies the two scales of Object-Oriented Design (OOD)?",
		choices: [
			"Architectural design and component design",
			"System design and environment design",
		],
		correctAnswer: "Architectural design and component design",
		imageURL: null
	},
	{
		index: 14,
		question: "Which of the following statements is NOT true about objects?",
		choices: [
			"An object represents an entity, either real-world or conceptual.",
			"Identity: Each object has a unique identity.",
			"State: An object's state includes its properties and relationships.",
			"Behavior: An object cannot have behavior or operations."
		],
		correctAnswer: "Behavior: An object cannot have behavior or operations.",
		imageURL: null
	},
	{
		index: 15,
		question: "Which of the following statements about classes is NOT true?",
		choices: [
			"A class is a description of a set of objects with common properties, behavior, and responsibilities.",
			"Classes are mainly used by designers, implementers, and testers.",
			"Worker: Analyst and mainly Designer",
			"Using stereotypes like «entity», «boundary», and «control» is mandatory for all classes.",
			"A class can have reports containing information regarding a specific class within the design model."
		],
		correctAnswer: "Using stereotypes like «entity», «boundary», and «control» is mandatory for all classes.",
		imageURL: null
	},
	{
		index: 16,
		question: "Which of the following statements about objects and classes is NOT true?",
		choices: [
			"A class is a template used to create objects.",
			"Each object is an instance of some class.",
			"An object can be an instance of multiple classes.",
			"A class defines the properties and behavior shared by all its instances."
		],
		correctAnswer: "An object can be an instance of multiple classes.",
		imageURL: null
	},
	{
		index: 17,
		question: "Which of the following is NOT a typical part of defining a class?",
		choices: [
			"Name",
			"Brief description",
			"Responsibility",
			"The number of instances the class can create"
		],
		correctAnswer: "The number of instances the class can create",
		imageURL: null
	},
	{
		index: 18,
		question: "Which of the following is NOT considered a property of a class?",
		choices: [
			"Attributes",
			"Operations",
			"Relationships",
			"Object instances"
		],
		correctAnswer: "Object instances",
		imageURL: null
	},
	{
		index: 19,
		question: "Which of the following is a Conceptual Level Definition in Object-Oriented Programming?",
		choices: [
			"Class",
			"Object",
			"Inheritance",
			"Abstraction"
		],
		correctAnswer: "Abstraction",
		imageURL: null
	},
	{
		index: 20,
		question: "Which of the following is NOT a Language Level Definition in Object-Oriented Programming?",
		choices: [
			"Class",
			"Object",
			"Delegation",
			"Inheritance"
		],
		correctAnswer: "Delegation",
		imageURL: null
	},
	{
		index: 21,
		question: "Which of the following is NOT a Conceptual Level Definition in Object-Oriented Programming?",
		choices: [
			"Abstraction",
			"Object",
			"Delegation",
			"Encapsulation",
			"Information Hiding",
			"Hierarchy"
		],
		correctAnswer: "Object",
		imageURL: null
	},

	{
		index: 22,
		question: "Which type of inheritance is also known as 'interface inheritance'?",
		choices: [
			"Sub-typing",
			"Implementation inheritance",
			"Polymorphism",
			"Encapsulation"
		],
		correctAnswer: "Sub-typing",
		imageURL: null
	},
	{
		index: 23,
		question: "In sub-typing, a subtype relationship is typically described using which of the following arguments?",
		choices: [
			"has-a",
			"is-a",
			"uses-a",
			"contains-a"
		],
		correctAnswer: "is-a",
		imageURL: null
	},

	{
		index: 24,
		question: "Which of the following is NOT a characteristic of sub-typing?",
		choices: [
			"A logical classification of B as a subtype of A.",
			"Called interface inheritance.",
			"Only some operations of the supertype are applicable",
			"A is usually abstract class (or an interface in Java)",
			"All (or almost all) operations of A are applicable to B."
		],
		correctAnswer: "Only some operations of the supertype are applicable",
		imageURL: null
	},
	{
		index: 25,
		question: "Which type of inheritance is often controversial in object-oriented design?",
		choices: [
			"Sub-typing",
			"Implementation inheritance",
			"Interface inheritance",
			"Polymorphic inheritance"
		],
		correctAnswer: "Implementation inheritance",
		imageURL: null
	},
	{
		index: 26,
		question: "Using the implementation of A for convenience in B. A is often concrete. Only some the operations of the operations of A are applicable to B. We probably won't use Bs in place of As. What is this?",
		choices: [
			"Sub-typing",
			"Implementation inheritance",
			"Composition",
			"Encapsulation"
		],
		correctAnswer: "Implementation inheritance",
		imageURL: null
	},
	{
		index: 27,
		question: "What isn't abstraction?",
		choices: [
			"Extracting the essential details about an item or group of items, while ignoring the unessential details.",
			"Providing detailed implementation of items",
			"The process of identifying common patterns that have systematic variationss; an abstraction represents the common pattern and provides a means for specifying which variation to use.",
		],
		correctAnswer: "Providing detailed implementation of items",
		imageURL: null
	},
	{
		index: 28,
		question: "Which of the following is NOT a way to reuse classes?",
		choices: [
			"Generalizing a class through parameterization",
			"Create a new class B which delegates operations to A, usually by having an object of class A as an instance variable and calling methods on that object. B is then a client of A.",
			"Creating a new class as a subclass",
			"Eliminating the superclass entirely"
		],
		correctAnswer: "Eliminating the superclass entirely",
		imageURL: null
	},

];