// Requirement analysis. Use Case Diagrams. Relationships
export const mysql3 = [
    {
        index: 1,
        question: "Which of the following is NOT a domain depicted in requirements models (also called analysis models)?",
        choices: [
            "The information domain",
            "The functional domain",
            "The behavioral domain",
            "The architectural domain"
        ],
        correctAnswer: "The architectural domain"
    },
    {
        index: 2,
        question: "What do design models in software engineering represent?",
        choices: [
            "The software architecture, the user interface, and component-level details that help practitioners construct the software effectively.",
            "Customer requirements across the information, functional, and behavioral domains."
        ],
        correctAnswer: "The software architecture, the user interface, and component-level details that help practitioners construct the software effectively."
    },
    {
        index: 3,
        question: "Which of the following is NOT one of the principles of requirements modeling?",
        choices: [
            "The information domain of a problem must be represented and understood.",
            "The functions that the software performs must be ignored.",
            "The functions that the software performs must be defined.",
            "The behavior of the software consequence of external events.",
            "The models that describe information, function, and behavior must be partitioned in a manner that shows detail in a layered (or hierarchical) fashion.",
            "The analysis task should move from essential information toward implementation detail."
        ],
        correctAnswer: "The functions that the software performs must be ignored."
    },
    {
        index: 4,
        question: "Which of the following statements about non-functional requirements is NOT accurate?",
        choices: [
            "Non-functional requirements impose constraints on the services offered by the system.",
            "Non-functional requirements often apply to the system as a whole rather than individual features.",
            "Non-functional requirements may include timing constraints and standards.",
            "Non-functional requirements are focused only on what the system should do."
        ],
        correctAnswer: "Non-functional requirements are focused only on what the system should do."
    },
    {
        index: 5,
        question: "Which of the following is NOT a non-functional requirement classification?",
        choices: [
            "Product requirements, which specify how the delivered product must behave (execution speed, reliability).",
            "Organisational requirements, which arise from organisational policies and procedures (process standards, implementation requirements).",
            "External requirements, which arise from external factors (legislative requirements).",
            "Design requirements, which specify the visual and aesthetic aspects of the system."
        ],
        correctAnswer: "Design requirements, which specify the visual and aesthetic aspects of the system."
    },
    {
        index: 6,
        question: "Which of the following is NOT typically a part of a requirements document structure?",
        choices: [
            "Preface",
            "Introduction",
            "Glossary",
            "User requirements definition",
            "Implementation code",
            "System architecture",
            "System requirements specification",
            "System models",
            "System evolution",
            "Appendices",
            "Index"
        ],
        correctAnswer: "Implementation code"
    },
    {
        index: 7,
        question: "Which of the following is NOT true about Use cases in UML?",
        choices: [
            "Use cases are a scenario-based technique that identifies the actors in an interaction and interaction itself.",
            "A set of use cases should describe all possible interactions with the system.",
            "Use cases only provide textual descriptions without any graphical representation.",
            "High-level graphical models may be supplemented by sequence diagrams to add detail to use-cases."
        ],
        correctAnswer: "Use cases only provide textual descriptions without any graphical representation."
    },
    {
        index: 8,
        question: "Which of the following is NOT true about UML use case diagrams?",
        choices: [
            "Use case diagrams provide an overview of usage requirements for a system.",
            "Use case diagrams are paintings.",
            "They describe actual system/software requirements.",
            "Use case diagrams are useful for simple presentations to management and project stakeholders."
        ],
        correctAnswer: "Use case diagrams are paintings."
    },
    {
        index: 9,
        question: "Which of the following is NOT typically considered an element of use case diagrams?",
        choices: [
            "Actors, which are individuals or systems that interact with the system.",
            "Use cases, which describe a sequence of actions that provide value to an actor.",
            "Data models, which define the database structure for the system.",
            "Associations, which represent the interactions between actors and use cases.",
            "Other relations – include, extend, generalize and depend",
            "System boundary boxes (optional) - rectangles around the use cases to indicates the scope of your system",
            "Packages (optional) - UML constructs that enable you to organize model elements (such as use cases) into groups."
        ],
        correctAnswer: "Data models, which define the database structure for the system."
    },
    {
        index: 10,
        question: "Which of the following is NOT a question to consider when finding use cases?",
        choices: [
            "What are the system tasks for each actor you have identified?",
            "Will the actor need to inform the system about sudden, external changes?",
            "What is the programming language used to develop the system?",
            "What use cases will support and maintain the system?",
            "Does the actor need to be informed about certain occurrences in the system?",
            "Can all features be performed by the use cases you have identified?"
        ],
        correctAnswer: "What is the programming language used to develop the system?"
    },
    {
        index: 11,
        question: "Which of the following is NOT a guideline for documenting the flow of events in a use case?",
        choices: [
            "Describe how the use case starts and ends.",
            "Detail the user interface design for clarity.",
            "Describe what data is exchanged between the actor and the use case",
            "Describe only the events that belong to the use case.",
            "Describe the flow of events , not only the functionality. To enforce this, start every action with 'When the actor ... '",
            "Avoid vague terminology such as 'for example', 'etc.' and 'information' - description stile",
            "Detail the flow of events - all 'whats' should be answered"
        ],
        correctAnswer: "Detail the user interface design for clarity."
    },
    {
        index: 12,
        question: "Which of the following is NOT a component of the flow of events in a use case?",
        choices: [
            "Basic flows represented by a straight arrow.",
            "Alternative flows represented by curves.",
            "Pre-condition, which is the required state of the system before starting the use case.",
            "Post-condition, which indicates the user interface design after the use case has ended."
        ],
        correctAnswer: "Post-condition, which indicates the user interface design after the use case has ended."
    },
    {
        index: 13,
        question: "Which of the following is NOT a field in the template for describing a use case?",
        choices: [
            "Name – unambiguous and unique across the system.",
            "Actors",
            "Flow of events – a sequence of numbered interactions for the use case; accomplished either by the actor (left column) or by the system (right);",
            "Exit conditions – need to be TRUE after use case completion.",
            "Entry conditions – need to be TRUE before use case initiation",
            "Quality conditions – non-functional requirements",
            "Testing conditions"
        ],
        correctAnswer: "Testing conditions"
    },
    {
        index: 14,
        question: "Which of the following statements about concrete and abstract use cases is NOT true?",
        choices: [
            "A concrete use case is initiated by an actor and constitutes a complete flow of events.",
            "An abstract use case is instantiated and performs operations on its own.",
            "Abstract use cases are included in, extended into, or generalize other use cases.",
            "No separate instances are created from abstract use cases.",
            "When a concrete use case is initiated, an instance of the use case is created."
        ],
        correctAnswer: "An abstract use case is instantiated and performs operations on its own."
    },
    {
        index: 15,
        question: "Which of the following is NOT an attribute of a use case?",
        choices: [
            "ID – a unique value for identifying the use case.",
            "Rank – describes the importance of the use case.",
            "Leaf – indicates whether it is possible to further specialize a use case. If the value is true, then it is not possible to further specialize the use case.",
            "Node - indicates the data type of the use case.",
            "Root - indicates whether the use case has no ancestors (true for no ancestors)"
        ],
        correctAnswer: "Node - indicates the data type of the use case."
    },
    {
        index: 16,
        question: "Which of the following statements about associations in use case diagrams is NOT true?",
        choices: [
            "Associations are indicated by solid lines between actors and use cases.",
            "An association exists whenever an actor is involved with an interaction described by a use case.",
            "Associations are modeled as dotted lines connecting use cases and actors.",
            "Arrowheads are often used to indicate the direction of the initial invocation of the relationship (but not the direction of information exchange)."
        ],
        correctAnswer: "Associations are modeled as dotted lines connecting use cases and actors."
    },
    {
        index: 17,
        question: "Which of the following statements about the <<Include>> relationship is NOT true?",
        choices: [
            "Including use case includes the 'addition' and owns the include relationship.",
            "Addition is use case that is to be included.",
            "The including use case can depend on the input parameters of the included use case.",
            "The including use case may depend only on the result of the included use case.",
            "This value is obtained as a result of the execution of the included use case."
        ],
        correctAnswer: "The including use case can depend on the input parameters of the included use case."
    },
    {
        index: 18,
        question: "Which of the following statements about the relationship between base use cases and inclusion use cases is NOT true?",
        choices: [
            "The base use case has control of the relationship to the inclusion use case and can depend on the result of performing the inclusion",
            "The base use case can access the attributes of the inclusion use case.",
            "The inclusion use case encapsulated and represents behavior that can be reused in different base use cases.",
            "Neither the base nor the inclusion use case may access each other's attributes."
        ],
        correctAnswer: "The base use case can access the attributes of the inclusion use case."
    },
    {
        index: 19,
        question: "Which of the following statements about the extend-relationship in use cases is NOT true?",
        choices: [
            "The extend-relationship specifies how the behavior of the extension use case can be inserted into the base use case.",
            "The execution of a use-case instance follows the base use case and its extension.",
            "The extension behavior is shown in the base use case.",
            "The extension use case does not alter the primary flow of the base use case."
        ],
        correctAnswer: "The extension behavior is shown in the base use case."
    },
    {
        index: 20,
        question: "Which of the following statements about dependency relationships in modeling is NOT true?",
        choices: [
            "A dependency signifies that a single element requires other model elements for its specification.",
            "Changes in one model element will affect the elements it depends on.",
            "The complete semantics of the depending element is independent of the supplier elements.",
            "The client element is dependent on the definition of the supplier element(s)."
        ],
        correctAnswer: "The complete semantics of the depending element is independent of the supplier elements."
    },
    {
        index: 21,
        question: "Which of the following statements about use-case generalization is NOT true?",
        choices: [
            "Defines a relationship from a child use case to a parent use case.",
            "The child use case can specialize all behavior and characteristics described for the parent use case.",
            "Allows for hierarchical organization of use cases.",
            "General- References the general classifier in the Generalization relationship.",
            "Specific - References the specializing classifier in the Generalization relationship.",
            "The use-case model - describes a system's requirements in terms of use cases.",
            "Substitu table- Indicates whether the specific classifier can be used wherever the general classifier can be used. If true, the execution traces of the specific classifier will be a superset of the execution traces of the general classifier.",
            "Nothing of above is true"
        ],
        correctAnswer: "Nothing of above is true"
    },
    {
        index: 22,
        question: "Which of the following statements about use-case packages is NOT true?",
        choices: [
            "A use-case package is used to structure the use-case model by dividing it into smaller parts.",
            "A use-case package can include use cases, actors, relationships, diagrams, and other packages.",
            "Use-case packages cannot contain relationships between use cases and actors.",
            "A graph can show the hierarchy of use-case packages, with arrows indicating possible ownership."
        ],
        correctAnswer: "Use-case packages cannot contain relationships between use cases and actors."
    },
    {
        index: 23,
        question: "Which of the following is NOT a requirement capturing activity?",
        choices: [
            "Identifying Actors",
            "Identifying Scenarios",
            "Identifying Use Cases",
            "Refining Use Cases",
            "Identifying Relationships among Use Cases and Diagrams",
            "Identifying Non-functional Requirements",
            "Identifying Relationships among Actors and Use Cases",
            "Identifying Initial Analyses Objects"
        ],
        correctAnswer: "Identifying Relationships among Use Cases and Diagrams"
    }

];