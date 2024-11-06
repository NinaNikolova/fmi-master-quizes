// Aggregation and Composition. Inheritance. Design principles
export const mysql5 = [
    {
        index: 1,
        question: "Which of the following is NOT a key principle of analysis modeling?",
        choices: [
            "Understanding and representing the information domain of a problem",
            "Defining the functions that the software performs",
            "Modeling the software's behavior in response to external events",
            "Moving from essential information toward implementation detail",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 2,
        question: "Which of the following is NOT a principle of design modeling?",
        choices: [
            "Design should be traceable to the requirements model",
            "System architecture should be considered in the design",
            "Components should be loosely coupled to each other",
            "Design models should be easily understandable",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 3,
        question: "Which of the following is NOT a type of structural relationship between classes in UML class diagrams?",
        choices: [
            "Association",
            "Aggregation",
            "Linkage",
            "Composition"
        ],
        correctAnswer: "Linkage",
        imageURL: null
    },
    {
        index: 4,
        question: "Which of the following is NOT true about association?",
        choices: [
            "It represents peer-to-peer relations",
            "One object is independent of another object",
            "It is implemented in objects as references",
            "One object is aware of the existence of another object"
        ],
        correctAnswer: "One object is independent of another object",
        imageURL: null
    },
    {
        index: 5,
        question: "Which of the following statements is NOT true about weak and strong associations?",
        choices: [
            "A weak association may link to another class as a parameter",
            "A strong association holds a reference to an instance of another class",
            "Both weak and strong associations imply ownership",
            "None of the above"
        ],
        correctAnswer: "Both weak and strong associations imply ownership",
        imageURL: "https://help.bizzdesign.com/resources/Storage/horizzon-help/setting-the-aggregation-kind-of-a-uml-association-relationship/worddav1704509fc6f29a46fe190b4db86e3885.png"
    },
    {
        index: 6,
        question: "Which of the following is NOT true about aggregation?",
        choices: [
            "Aggregation models a whole-part relationship",
            "Containment in aggregation is by reference",
            "Aggregation implies a compositional relationship",
            "None of the above"
        ],
        correctAnswer: "Aggregation implies a compositional relationship",
        imageURL: "https://help.bizzdesign.com/resources/Storage/horizzon-help/setting-the-aggregation-kind-of-a-uml-association-relationship/worddav1704509fc6f29a46fe190b4db86e3885.png"
    },
    {
        index: 7,
        question: "Which of the following statements about shared aggregation is NOT true?",
        choices: [
            "Shared aggregation allows for multiplicity greater than one",
            "Destroying the aggregate destroys its parts",
            "Parts can exist independently of the aggregate",
            "Shared aggregation forms a graph with many roots"
        ],
        correctAnswer: "Destroying the aggregate destroys its parts",
        imageURL: null
    },
    {
        index: 8,
        question: "Which of the following statements about composition is NOT correct?",
        choices: [
            "The lifespan of individual objects depends on the aggregate",
            "Composition implies ownership and coincident lifetime",
            "Links in composition cannot be changed once established",
            "A composite aggregation forms a tree structure"
        ],
        correctAnswer: "Links in composition cannot be changed once established",
        imageURL: null
    },
    {
        index: 9,
        question: "Which of the following is NOT true about nested classes?",
        choices: [
            "A class or interface can nest other classifiers",
            "Nested classifiers have independent namespaces",
            "UML 2.x uses 'nested within' as a synonym for 'owned by'",
            "Nested classifiers are defined within the containing class"
        ],
        correctAnswer: "Nested classifiers have independent namespaces",
        imageURL: null
    },
    {
        index: 10,
        question: "Which of the following statements about composite structure diagrams is NOT true?",
        choices: [
            "Composite structure diagrams show internal structures only",
            "They were added in UML 2.x",
            "They provide a logical view of a structured classifier",
            "They allow representation of inner classes and parts"
        ],
        correctAnswer: "Composite structure diagrams show internal structures only",
        imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-composite-structure-diagram/02-simple-composite-structure-diagram.png"
    },
    {
        index: 11,
        question: "Which of the following is NOT a principle of generalization?",
        choices: [
            "It enables inheritance",
            "It shows a 'kind of' relationship",
            "Specialization is equivalent to generalization",
            "An instance of a subclass can be used as the superclass"
        ],
        correctAnswer: "Specialization is equivalent to generalization",
        imageURL: "https://www.uml-diagrams.org/class-diagrams/class-generalizaion-shared.png"
    },
    {
        index: 12,
        question: "Which statement about single and multiple inheritance is correct?",
        choices: [
            "A class can only inherit from one class",
            "A class can inherit from multiple classes through multiple inheritance"
        ],
        correctAnswer: "A class can inherit from multiple classes through multiple inheritance",
        imageURL: null
    },
    {
        index: 13,
        question: "Which of the following statements about abstract classes is NOT true?",
        choices: [
            "An abstract class lacks complete implementation",
            "Concrete classes inherit from abstract classes",
            "Abstract classes can be instantiated directly",
            "Abstract classes define a blueprint for subclasses"
        ],
        correctAnswer: "Abstract classes can be instantiated directly",
        imageURL: null
    },
    {
        index: 14,
        question: "What is the purpose of an abstract class in OOP?",
        choices: [
            "To provide a blueprint for concrete classes",
            "To automatically create instances of subclasses"
        ],
        correctAnswer: "To provide a blueprint for concrete classes",
        imageURL: null
    },
    {
        index: 15,
        question: "Which of the following statements about polymorphism is NOT true?",
        choices: [
            "Polymorphism enables dynamic method selection at runtime",
            "Encapsulation and inheritance facilitate polymorphism",
            "Polymorphism only applies to operations defined in subclasses",
            "None of the above"
        ],
        correctAnswer: "Polymorphism only applies to operations defined in subclasses",
        imageURL: null
    },
    {
        index: 16,
        question: "What is NOT true about subtyping?",
        choices: [
            "It means the descendant can substitute for its ancestor",
            "It is a special case of polymorphism",
            "Generalizations should be between classes of the same stereotype",
            "Subtyping ensures that changes in subtypes will affect ancestors"
        ],
        correctAnswer: "Subtyping ensures that changes in subtypes will affect ancestors",
        imageURL: null
    },
    {
        index: 17,
        question: "Which of the following is NOT true about delegation?",
        choices: [
            "Delegation is an alternative to inheritance for reuse",
            "Delegation provides a complete implementation for the delegating class",
            "Delegation can reduce the complexity of class hierarchies",
            "Delegation relies on having references to other classes"
        ],
        correctAnswer: "Delegation provides a complete implementation for the delegating class",
        imageURL: null
    },
    {
        index: 18,
        question: "Which of the following is NOT a feature of interfaces?",
        choices: [
            "An interface defines a set of behaviors offered by a class",
            "Interfaces can provide complete implementations",
            "Interfaces allow different classes to use the same methods",
            "Interfaces support multiple inheritance of types"
        ],
        correctAnswer: "Interfaces can provide complete implementations",
        imageURL: null
    },
    {
        index: 19,
        question: "Which statement about realization in UML is NOT true?",
        choices: [
            "Realization specifies a contract that another class guarantees to fulfill",
            "Realization applies only to class relationships, not use cases",
            "Realization uses a dashed line with a hollow arrowhead",
            "Realization allows inheritance of behavior from interfaces"
        ],
        correctAnswer: "Realization applies only to class relationships, not use cases",
        imageURL: null
    },
    {
        index: 20,
        question: "Which of the following statements about dependency is NOT true?",
        choices: [
            "A dependency indicates that one element uses another",
            "Dependency requires all elements in the client to depend on the supplier",
            "Dependency is represented by an open arrow pointing to the supplier",
            "A dependency relationship can connect packages or classes"
        ],
        correctAnswer: "Dependency requires all elements in the client to depend on the supplier",
        imageURL: null
    },
    {
        index: 21,
        question: "Which of the following statements about package diagrams is NOT correct?",
        choices: [
            "Package diagrams show the arrangement of model elements",
            "They only show dependencies between classes, not packages",
            "Package diagrams provide different views of a system",
            "They show structure and dependencies in larger projects"
        ],
        correctAnswer: "They only show dependencies between classes, not packages",
        imageURL: null
    },
    {
        index: 22,
        question: "Which of the following is NOT a SOLID design principle?",
        choices: [
            "Single Responsibility Principle (SRP)",
            "Interface Segregation Principle (ISP)",
            "Open/Closed Principle (OCP)",
            "Interface Implementation Principle (IIP)"
        ],
        correctAnswer: "Interface Implementation Principle (IIP)",
        imageURL: null
    },
    {
        index: 23,
        question: "Which of the following is NOT an aim of encapsulation?",
        choices: [
            "To enclose all parts of an abstraction within a class",
            "To allow direct access to an object's internal state",
            "To hide implementation details from other classes",
            "To improve code modularity"
        ],
        correctAnswer: "To allow direct access to an object's internal state",
        imageURL: null
    },
    {
        index: 24,
        question: "What is the purpose of aggregation in UML?",
        choices: [
            "To represent a 'part-whole' relationship between classes",
            "To enforce a strict ownership relationship",
            "To define a lifecycle dependency between objects",
            "To allow shared ownership among objects"
        ],
        correctAnswer: "To represent a 'part-whole' relationship between classes",
        imageURL: null
    },
    {
        index: 25,
        question: "What is the primary function of a boundary class?",
        choices: [
            "To coordinate data storage",
            "To manage interactions between the user and the system",
            "To provide internal logic for processing",
            "To represent a set of related attributes"
        ],
        correctAnswer: "To manage interactions between the user and the system",
        imageURL: null
    },
    {
        index: 26,
        question: "Which of the following is NOT a use for class diagrams?",
        choices: [
            "Modeling class relationships and structure",
            "Representing runtime object interactions",
            "Documenting attributes and operations",
            "Providing a static view of the system"
        ],
        correctAnswer: "Representing runtime object interactions",
        imageURL: null
    }
];