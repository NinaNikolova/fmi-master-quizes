// Object, Class, and Profile Diagrams. Class Stereotypes and Associations.
export const mysql4 = [
	{
		index: 1,
		question: "Which of the following is a basic UML 2.x diagram?",
		choices: [
			"Behaviour and structure",
			"Painting"
		],
		correctAnswer: "Behaviour and structure",
		imageURL: null
	},
	{
		index: 2,
		question: "Which of the following is NOT a behaviour diagram?",
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
		question: "Who aren’t user requirements important for?",
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
		index: 4,
		question: "What don’t functional requirements include?",
		choices: [
			"Statements of services the system should provide",
			"Domain requirements",
			"Timing constraints",
			"Describe functionality or system services",
			"High-level statements of what the system should do"
		],
		correctAnswer: "Timing constraints",
		imageURL: null
	},
	{
		index: 5,
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
		index: 6,
		question: "Which of the following is NOT a primary focus of Object-Oriented Design (OOD)?",
		choices: [
			"Defining the solution to the problem",
			"Creating the system requirements",
			"Defining components, classes, and interfaces",
			"Refining candidate objects from analysis"
		],
		correctAnswer: "Creating the system requirements",
		imageURL: null
	},
	{
		index: 7,
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
		index: 8,
		question: "Which of the following is NOT true about classes?",
		choices: [
			"A class is a description of a set of objects with common properties, behavior, and responsibilities.",
			"Classes are mainly used by designers, implementers, and testers.",
			"Using stereotypes like «entity», «boundary», and «control» is mandatory for all classes.",
			"A class can have reports containing information regarding a specific class within the design model."
		],
		correctAnswer: "Using stereotypes like «entity», «boundary», and «control» is mandatory for all classes.",
		imageURL: null
	},
	{
		index: 9,
		question: "Which of the following is NOT a typical part of defining a class?",
		choices: [
			"Name",
			"Brief description",
			"Responsibility",
			"The number of instances the class can create"
		],
		correctAnswer: "The number of instances the class can create",
		imageURL: "https://media.geeksforgeeks.org/wp-content/uploads/20240118123645/Class-Notation.webp"
	},
	{
		index: 10,
		question: "Which of these is NOT a property of a class?",
		choices: [
			"Attributes",
			"Operations",
			"Relationships",
			"Object instances"
		],
		correctAnswer: "Object instances",
		imageURL: "https://media.geeksforgeeks.org/wp-content/uploads/20240118123645/Class-Notation.webp"
	},
	{
		index: 11,
		question: "Which type of inheritance is known as 'interface inheritance'?",
		choices: [
			"Sub-typing",
			"Implementation inheritance",
			"Polymorphism",
			"Encapsulation"
		],
		correctAnswer: "Sub-typing",
		imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/uml-class-diagram-tutorial/16-realization.png"
	},
	{
		index: 12,
		question: "What is the main purpose of encapsulation?",
		choices: [
			"To enclose all parts of an abstraction within a class",
			"To allow direct access to an object's internal state",
			"To improve code modularity",
			"To hide implementation details from other classes"
		],
		correctAnswer: "To allow direct access to an object's internal state",
		imageURL: null
	},
	{
		index: 13,
		question: "Which of these is NOT a benefit of information hiding?",
		choices: [
			"Hiding implementation details to reduce interdependencies",
			"Allowing classes to be modified directly by external entities",
			"Increasing modularity in code",
			"Enhancing security by restricting access to data"
		],
		correctAnswer: "Allowing classes to be modified directly by external entities",
		imageURL: null
	},
	{
		index: 14,
		question: "Which of the following statements about CRC cards is NOT correct?",
		choices: [
			"CRC cards provide a card-like visualization of classes.",
			"Each CRC card includes the class description, attributes, and responsibilities.",
			"CRC stands for Class Responsibility Collaborations.",
			"CRC cards are used to visualize detailed code implementations."
		],
		correctAnswer: "CRC cards are used to visualize detailed code implementations.",
		imageURL: "https://media.geeksforgeeks.org/wp-content/uploads/20240415153758/What-are-CRC-Cards_1.webp"
	},
	{
		index: 15,
		question: "Which of the following is NOT true about analysis objects?",
		choices: [
			"Analysis objects represent user-level concepts rather than actual software classes and components.",
			"The analysis model should avoid including system classes and components.",
			"Analysis classes are detailed software representations ready for implementation.",
			"Analyses classes make a natural transition from user requirements → system design."
		],
		correctAnswer: "Analysis classes are detailed software representations ready for implementation.",
		imageURL: null
	},
	{
		index: 16,
		question: "Which of the following is NOT a purpose of encapsulation in OOP?",
		choices: [
			"To enclose all parts of an abstraction within a class",
			"To allow direct access to an object's internal state",
			"To improve code modularity",
			"To hide implementation details from other classes"
		],
		correctAnswer: "To allow direct access to an object's internal state",
		imageURL: null
	},
	{
		index: 17,
		question: "Which of the following statements about UML attributes is INCORRECT?",
		choices: [
			"Attributes are structural features of a classifier.",
			"Attributes are used to define characteristics like 'id' and 'name'.",
			"Attributes are only used for configuration management."
		],
		correctAnswer: "Attributes are only used for configuration management.",
		imageURL: "https://media.geeksforgeeks.org/wp-content/uploads/20240118123645/Class-Notation.webp"
	},
	{
		index: 18,
		question: "What is the main role of boundary classes in a system?",
		choices: [
			"Managing data storage within the system",
			"Coordinating the actor's interactions with the system's internals"
		],
		correctAnswer: "Coordinating the actor's interactions with the system's internals",
		imageURL: "https://sparxsystems.com/enterprise_architect_user_guide/17.0/images/mvc-pattern.png"
	},
	{
		index: 19,
		question: "Which type of analysis class manages interactions between the user and the system?",
		choices: [
			"Boundary class",
			"Control class",
			"Entity class"
		],
		correctAnswer: "Boundary class",
		imageURL: "https://sparxsystems.com/enterprise_architect_user_guide/17.0/images/mvc-pattern.png"
	},
	{
		index: 20,
		question: "What is the primary purpose of stereotypes in analysis classes?",
		choices: [
			"To simplify code structure by combining similar classes",
			"To categorize classes based on their function"
		],
		correctAnswer: "To categorize classes based on their function",
		imageURL: "https://www.uml-diagrams.org/notation/profile-stereotype-actor.png"
	},
	{
		index: 21,
		question: "What do entity classes represent in a system?",
		choices: [
			"Classes managing user interactions",
			"Classes holding and updating information about specific phenomena",
			"Classes controlling behavior"
		],
		correctAnswer: "Classes holding and updating information about specific phenomena",
		imageURL: null
	},
	{
		index: 22,
		question: "What does a class diagram typically NOT include?",
		choices: [
			"Object states",
			"Attributes",
			"Operations",
			"Relationships"
		],
		correctAnswer: "Object states",
		imageURL: null
	},
	{
		index: 23,
		question: "In UML, which element represents restrictions or conditions that must be true?",
		choices: [
			"Stereotype",
			"Constraint",
			"Association",
			"Tagged value"
		],
		correctAnswer: "Constraint",
		imageURL: "https://www.visual-paradigm.com/servlet/editor-content/guide/uml-unified-modeling-language/how-to-model-constraints-in-uml/sites/7/2019/09/class-diagram-constraint-example.png"
	},
	{
		index: 24,
		question: "Which of the following defines a relationship between classes in a UML diagram?",
		choices: [
			"Aggregation",
			"Abstraction",
			"Tagged value",
			"Constraint"
		],
		correctAnswer: "Aggregation",
		imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/uml-class-diagram-tutorial/07-relationships-between-classes.png"
	},
	{
		index: 25,
		question: "What is NOT an activity typically involved in analysis?",
		choices: [
			"Finding entity, boundary, and control objects",
			"Creating UI layouts for user interfaces",
			"Mapping use cases to objects",
			"Modeling state-dependent behavior"
		],
		correctAnswer: "Creating UI layouts for user interfaces",
		imageURL: null
	},
	{
		index: 26,
		question: "What is the primary purpose of encapsulation in OOP?",
		choices: [
			"To bundle data and methods that operate on that data",
			"To expose all internal details of an object",
			"To directly manipulate an object's state"
		],
		correctAnswer: "To bundle data and methods that operate on that data",
		imageURL: null
	}

];