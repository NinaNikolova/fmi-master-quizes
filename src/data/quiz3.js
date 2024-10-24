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
        correctAnswer: "The architectural domain",
        imageURL: null
    },
    {
        index: 2,
        question: "What do design models in software engineering represent?",
        choices: [
            "The software architecture, the user interface, and component-level details that help practitioners construct the software effectively.",
            "Customer requirements across the information, functional, and behavioral domains.",
            "Only the user interface of the software system.",
            "The deployment process of the software on different environments."
        ],
        correctAnswer: "The software architecture, the user interface, and component-level details that help practitioners construct the software effectively.",
        imageURL: null
    },
    {
        index: 3,
        question: "In software engineering, two classes of models can be created. Which is not?",
        choices: [
            "Requirements models (also called analysis models)",
            "Design models",
            "Information customer models"
        ],
        correctAnswer: "Information customer models",
        imageURL: null
    },
    {
        index: 4,
        question: "Which of the following is NOT one of the principles of requirements modeling?",
        choices: [
            "The information domain of a problem must be represented and understood.",
            "The functions that the software performs must be ignored.",
            "The functions that the software performs must be defined.",
            "The behavior of the software consequence of external events.",
            "The models that describe information, function, and behavior must be partitioned in a manner that shows detail in a layered (or hierarchical) fashion.",
            "The analysis task should move from essential information toward implementation detail."
        ],
        correctAnswer: "The functions that the software performs must be ignored.",
        imageURL: null
    },
    {
        index: 5,
        question: "Which of the following statements about requirements is NOT true?",
        choices: [
            "A requirement may range from a high-level abstract statement to a detailed mathematical functional specification.",
            "Requirements may serve a dual function as the basis for a contract and must be strictly defined with no room for interpretation.",
            "Both high-level and detailed specifications may be called requirements.",
            "Requirements can be open to interpretation if they serve as the basis for a bid for a contract."
        ],
        correctAnswer: "Requirements may serve a dual function as the basis for a contract and must be strictly defined with no room for interpretation.",
        imageURL: null
    },
    {
        index: 6,
        question: "Which of the following is NOT true about user requirements?",
        choices: [
            "User requirements are statements in natural language and may include diagrams.",
            "User requirements are primarily written for developers and operations teams.",
            "User requirements describe the services the system provides and its operational constraints.",
            "User requirements are written for customers."
        ],
        correctAnswer: "User requirements are primarily written for developers and operations teams.",
        imageURL: null
    },
    {
        index: 7,
        question: "Which of the following statements about system requirements is NOT accurate?",
        choices: [
            "System requirements are a structured document detailing the system’s functions and operational constraints.",
            "System requirements define what should be implemented and may be part of a contract.",
            "System requirements are primarily written for customers to understand the system's capabilities.",
            "System requirements are focused on what the system must do and Written for dev-op’s."
        ],
        correctAnswer: "System requirements are primarily written for customers to understand the system's capabilities.",
        imageURL: null
    },
    {
        index: 8,
        question: "Which of the following is NOT true about functional requirements?",
        choices: [
            "Functional requirements state the services the system should provide.",
            "Functional requirements describe how the system should react to particular inputs.",
            "Functional requirements are constraints on the system's overall performance.",
            "Functional requirements may also state what the system should not do."
        ],
        correctAnswer: "Functional requirements are constraints on the system's overall performance.",
        imageURL: null
    },
    {
        index: 9,
        question: "Which of the following statements about non-functional requirements is NOT accurate?",
        choices: [
            "Non-functional requirements impose constraints on the services offered by the system.",
            "Non-functional requirements often apply to the system as a whole rather than individual features.",
            "Non-functional requirements may include timing constraints and standards.",
            "Non-functional requirements are solely focused on what the system should do."
        ],
        correctAnswer: "Non-functional requirements are solely focused on what the system should do.",
        imageURL: null
    },
    {
        index: 10,
        question: "Which of the following is NOT considered a subset of functional requirements?",
        choices: [
            "Domain requirements",
            "Constraints on the system from the domain of operation",
            "Timing constraints",
            "Statements of services the system should provide"
        ],
        correctAnswer: "Timing constraints",
        imageURL: null
    },
    {
        index: 11,
        question: "Which of the following statements about functional requirements is NOT true?",
        choices: [
            "Functional requirements describe the functionality or services provided by the system.",
            "Functional requirements are independent of the type of software and expected users.",
            "Functional user requirements may be high-level statements of what the system should do.",
            "Functional system requirements should describe the system services in detail.",
            "Depend on the type of software, expected users and the type of system where the software is used."
        ],
        correctAnswer: "Functional requirements are independent of the type of software and expected users.",
        imageURL: null
    },
    {
        index: 12,
        question: "Which of the following is NOT a characteristic of requirements completeness and consistency?",
        choices: [
            "Requirements should include descriptions of all necessary facilities - Complete",
            "Requirements should be free of conflicts or contradictions- Consistent",
            "Requirements should not be both - complete and consistent.",

        ],
        correctAnswer: "Requirements should not be both - complete and consistent.",
        imageURL: null
    },
    {
        index: 13,
        question: "Which of the following is NOT true regarding the consistency of requirements?",
        choices: [
            "There should be no conflicts or contradictions in the descriptions of system facilities.",
            "There should be conflicts or contradictions in the descriptions of system facilities.",

        ],
        correctAnswer: "There should be conflicts or contradictions in the descriptions of system facilities.",
        imageURL: null
    },
    {
        index: 14,
        question: "Which of the following is NOT true regarding non-functional requirements?",
        choices: [
            "Non-functional requirements define system properties and constraints such as reliability and response time.",
            "Non-functional requirements are always less critical than functional requirements.",
            "Constraints like I/O device capability and system representations are part of non-functional requirements.",
            "Non-functional requirements may include process requirements like the use of a specific programming language or IDE."
        ],
        correctAnswer: "Non-functional requirements are always less critical than functional requirements.",
        imageURL: null
    },
    {
        index: 15,
        question: "Which of the following is NOT a non-functional requirement classification?",
        choices: [
            "Product requirements, which specify how the delivered product must behave (e.g., execution speed, reliability).",
            "Organisational requirements, which arise from organisational policies and procedures (e.g., process standards, implementation requirements).",
            "External requirements, which arise from external factors (e.g., interoperability, legislative requirements).",
            "Design requirements, which specify the visual and aesthetic aspects of the system."
        ],
        correctAnswer: "Design requirements, which specify the visual and aesthetic aspects of the system.",
        imageURL: null
    },
    {
        index: 16,
        question: "Which of the following is NOT a correct metric for specifying non-functional requirements?",
        choices: [
            "Speed: Processed transactions per second, user/event response time, screen refresh time.",
            "Reliability: Mean time to failure, probability of unavailability, rate of failure occurrence.",
            "Ease of use: Training time, number of help frames, user satisfaction rate.",
            "Portability: Percentage of target-dependent statements, number of target systems.",
            "Size: Mbytes, Number of ROM chips",
            "Design: grafical presentation of systems",
            "Robustness: Time to restart after failure; Percentage of events causing failure; Probability of data corruptionon failure",
            "Portability: Percentage of target dependent statements; Number of target systems",
        ],
        correctAnswer: "Design: grafical presentation of systems",
        imageURL: null
    },
    {
        index: 17,
        question: "Which of the following is NOT true about the software requirements document?",
        choices: [
            "It is the official statement of what is required of the system developers.",
            "It serves as a design document specifying how the system should work.",
            "It should include both a definition of user requirements and a specification of the system requirements.",
            "It should focus on WHAT the system should do, rather than HOW it should do it."
        ],
        correctAnswer: "It serves as a design document specifying how the system should work.",
        imageURL: null
    },
    {
        index: 18,
        question: "Which of the following is NOT typically a user of a requirements document?",
        choices: [
            "System engineers, who use the document to understand what is required for system implementation.",
            "Managers",
            "Test engineers, who use the document to derive system tests and verify system functionality.",
            "End users, who design the architecture and technical specifications of the system.",
            "System customers",
            "System test engineers",
            "System maintenance engineers"
        ],
        correctAnswer: "End users, who design the architecture and technical specifications of the system.",
        imageURL: null
    },
    {
        index: 19,
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
        correctAnswer: "Implementation code",
        imageURL: null
    },
    {
        index: 20,
        question: "Which of the following is NOT true about the requirements specification process?",
        choices: [
            "It involves writing both user and system requirements in a requirements document.",
            "User requirements should be understandable by end-users and customers without technical backgrounds.",
            "System requirements are less detailed and avoid including any technical information.",
            "The requirements may be part of a contract and should be as complete as possible."
        ],
        correctAnswer: "System requirements are less detailed and avoid including any technical information.",
        imageURL: null
    },
    {
        index: 21,
        question: "Which of the following is NOT a commonly used way of writing a system requirements specification?",
        choices: [
            "Natural language: Requirements are written as numbered sentences in natural language, with each sentence expressing one requirement.",
            "Structured natural language: astandard formor template",
            "Design description languages: rarely used",
            "Code-based specifications: The system requirements are directly written in code to demonstrate functionality to the customer.",
            "Graphical notations - UML use case and sequence diagramsarecommonlyused.",
            "Mathematical specifications - most customers don’t understand a formal specification"
        ],
        correctAnswer: "Code-based specifications: The system requirements are directly written in code to demonstrate functionality to the customer.",
        imageURL: null
    },
    {
        index: 22,
        question: "Scenarios are real-life examples of how a system can be used. Which of the following is NOT typically included in a scenario description?",
        choices: [
            "A description of the starting situation.",
            "A description of the normal flow of events.",
            "A list of system requirements and their priorities.",
            "A description of what can go wrong.",
            "Information about other concurrent activities",
            "A description of the finish state"
        ],
        correctAnswer: "A list of system requirements and their priorities.",
        imageURL: null
    }






];