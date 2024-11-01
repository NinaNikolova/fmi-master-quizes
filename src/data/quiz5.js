// Aggregation and Composition. Inheritance. Design principles
export const mysql5 = [
    {
        index: 1,
        question: "Which of the following is NOT one of the key principles of analysis modeling?",
        choices: [
            "Understanding and representing the information domain of a problem",
            "Defining the functions that the software performs",
            "Modeling the software's behavior in response to external events",
            "Partitioning/разделящи/ models to uncover detail in a layered (or hierarchical) way",
            "Moving from essential information toward implementation detail",
            "None of the above",
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 2,
        question: "Which of the following statements is NOT true about Object-Oriented Analysis (OOA) and Object-Oriented Design (OOD)?",
        choices: [
            "OOA defines the problem in terms of real-world objects that the system interacts with",
            "The analysis object model represents user-level concepts, not actual software components",
            "OOA should be independent of system classes and components",
            "Analyses classes are still high level abstractions and will be realized in details during OOD",
            "OOD means defining the solution",
            "OOD is the process of defining components, interfaces, and operations to meet requirements",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 3,
        question: "Which of the following is NOT a principle of design modeling?",
        choices: [
            "Design should be traceable/проследим/ to the requirements model",
            "System architecture should be considered in the design",
            "Data design is as important as the design of processing functions",
            "User interface design should prioritize ease of use/лекота на използване/",
            "Component-level design should be functionally independent",
            "Components should be loosely coupled to each other and the external environment",
            "Design models should be easily understandable",
            "Design should be developed iteratively and incrementally",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 4,
        question: "Which of the following is NOT a type of structural relationship between classes in class diagrams?",
        choices: [
            "Association",
            "Aggregation",
            "Linkage",
            "Composition",

        ],
        correctAnswer: "Linkage",
        imageURL: null
    },
    {
        index: 5,
        question: "Structural relationships in OOA and OOD are?",
        choices: [
            "between people",
            "between classes or between objects"
        ],
        correctAnswer: "between classes or between objects",
        imageURL: null
    },
    {
        index: 6,
        question: "Which of the following is NOT true about association (retrospection) in OOA and OOD?",
        choices: [
            "It is the simplest form of relation between classes",
            "It represents peer-to-peer/връстник кък връстник/ relations",
            "One object is completely independent of another object",
            "One object is aware of the existence of another object",
            "It is implemented in objects as references"
        ],
        correctAnswer: "One object is completely independent of another object",
        imageURL: null
    },
    {
        index: 7,
        question: "Which of the following statements is NOT true about weak and strong associations?",
        choices: [
            "A weak association means ClassA may link to ClassB if one of its methods includes or returns an instance of ClassB",
            "A strong association means ClassA holds a reference to an instance of ClassB",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 8,
        question: "Which of the following is NOT an example of an association between classes A and B?",
        choices: [
            "A is a physical or logical part of B",
            "A is a kind of B",
            "A is contained in B",
            "A is a description of B",
            "A is member of B",
            "A is completely independent of B",
            "A is an organization subunit of B",
            "A uses or manages B",
            "A communicates with B",
            "A follows B",
            "A is owned by B"
        ],
        correctAnswer: "A is completely independent of B",
        imageURL: null
    },
    {
        index: 9,
        question: "Which of the following statements is NOT true about aggregation (събиране, съвкъпност, общност)?",
        choices: [
            "An aggregation is a association that models a whole part relationship between an aggregate (the whole) and its parts.",
            "Aggregation models a compositional relationship between model elements",
            "Aggregation doesn't model a compositional relationship between model elements",
            "Containment /задържане/ in aggregation is by reference to the aggregated class"
        ],
        correctAnswer: "Aggregation doesn't model a compositional relationship between model elements",
        imageURL: null
    },
    {
        index: 10,
        question: "Which of the following is NOT true about aggregation?",
        choices: [
            "Aggregation  is a restrictive /ограничителна/ form of 'part of' association /връзка/",
            "Оbjects are assembled to create a more complex object",
            "The aggregate object coordinates its parts",
            "Аssembly may be physical or logical",
            "The aggregation link doesn’t state that ClassA owns ClassB nor that there’s a parent child relationship between them.",
            "None of the above",
            "Objects in an aggregation are assembled to create a more complex object",
            "When the aggregate /ClassA/ is deleted, its parts are not automatically deleted /ClassB?"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 11,
        question: "Which of the following is NOT an example of aggregation?",
        choices: [
            "A library contains books",
            "A company consists of departments made up of employees",
            "A computer is composed of a number of devices",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 12,
        question: "Which of the following statements is NOT true about shared aggregation?",
        choices: [
            "Shared aggregation allows for a multiplicity /множество/ greater than one (e.g., 1..N)",
            "Destroying the aggregate necessarily /непремено/ destroys its parts",
            "Shared aggregation forms a graph or a tree with many roots",
            "In shared aggregation, the parts can exist independently of the aggregate"
        ],
        correctAnswer: "Destroying the aggregate necessarily /непремено/ destroys its parts",
        imageURL: null
    },
    {
        index: 13,
        question: "Which of the following statements is NOT true about shared aggregation?",
        choices: [
            "Shared aggregation allows the same instance to participate in two different aggregations",
            "In shared aggregation, the parts can exist independently of the aggregate",
            "Shared aggregation implies a weak relationship between classes",
            "An example of shared aggregation is a person and a home-based business sharing the same address"
        ],
        correctAnswer: "Shared aggregation implies a weak relationship between classes",
        imageURL: null
    },
    {
        index: 14,
        question: "Which of the following statements about self aggregations is NOT true?",
        choices: [
            "A class can be aggregated with itself if it is composed of other instances of the same class",
            "Role names are essential in self aggregations to distinguish the purpose of the association",
            "Self aggregation implies that all instances of the class are complete outside the context of the whole",
            "Aggregated products in self aggregation can be referred to as sub products"
        ],
        correctAnswer: "Self aggregation implies that all instances of the class are complete outside the context of the whole",
        imageURL: null
    },
    {
        index: 15,
        question: "Which of the following situations is a case for using association instead of aggregation?",
        choices: [
            "A product is composed of sub products",
            "Classes can have independent identity and are not parts of a greater whole",
        ],
        correctAnswer: "Classes can have independent identity and are not parts of a greater whole",
        imageURL: null
    },
    {
        index: 16,
        question: "Which of the following statements about composition is NOT true?",
        choices: [
            "Composition is a form of aggregation with strong ownership and coincident lifetime /съвпадащ живот на частта с агрегата/ of the part with the aggregate",
            "The multiplicity of the aggregate end may exceed one, allowing for shared parts",
            "Once established, the links in composition cannot be changed",
            "A composite aggregation forms a 'tree' of parts, with the root being the aggregate"
        ],
        correctAnswer: "The multiplicity of the aggregate end may exceed one, allowing for shared parts",
        imageURL: null
    },
    {
        index: 17,
        question: "Which of the following statements about composition is NOT true?",
        choices: [
            "The lifespan of individual objects does not depend on the lifespan of the aggregate object",
            "Composition is a stricter form of aggregation",
            "Parts cannot exist on their own in composition",
            "There is a create-delete dependency of the parts to the whole",
            "Example - ClassPerson, ClassLeg, ClassHand",
            "The c omposition is a NOT shared aggregation"
        ],
        correctAnswer: "The lifespan of individual objects does not depend on the lifespan of the aggregate object",
        imageURL: null
    },
    {
        index: 18,
        question: "Which of the following statements about aggregation, association, and composition is NOT true?",
        choices: [
            "The association link can replace the aggregation link in every situation",
            "Aggregation can replace association when there’s a weak link between the classes",
            "In composition, the composed class can appear as a return type or parameter type of the composite class",
            "Changes to the composed class cannot propagate to the rest of the system in composition",
            "Usage of composition limits complexity growth as the system grows"
        ],
        correctAnswer: "In composition, the composed class can appear as a return type or parameter type of the composite class",
        imageURL: null
    },
    {
        index: 19,
        question: "Which of the following statements about composition lifecycle management is NOT true?",
        choices: [
            "Composed classes can be returned or passed around as standalone objects",
            "In a composition relationship, the lifecycle of the composed objects is tightly coupled to the lifecycle of the composite object",
            "When the composite is created, the composed parts are also created",
            "Allowing composed classes to exist outside the composite context contradicts the essence of composition"
        ],
        correctAnswer: "Composed classes can be returned or passed around as standalone objects",
        imageURL: null
    },
    {
        index: 20,
        question: "Which of the following statements about nested classes is NOT true?",
        choices: [
            "A class or interface can nest other classifiers /класификатори/.",
            "A nested classifier is defined within the namespace of its containing class or interface.",
            "Nested classifiers can only be classes, not interfaces.",
            "UML 2.x specification uses 'defined within', 'nested within', and 'owned by' as synonyms."
        ],
        correctAnswer: "Nested classifiers can only be classes, not interfaces.",
        imageURL: null
    },
    {
        index: 21,
        question: "Which of the following statements about inner classes is NOT true?",
        choices: [
            "UML 2.x specifications describe nesting of classifiers within structured classes.",
            "Inner classes can have their own independent namespace separate from the containing class.",
            "The Element interface is in the scope of the LinkedList namespace.",
            "LinkedList can nest the Element interface without explicit notation for the nesting."
        ],
        correctAnswer: "Inner classes can have their own independent namespace separate from the containing class.",
        imageURL: null
    },
    {
        index: 22,
        question: "Which of the following statements about composite structure diagrams is NOT true?",
        choices: [
            "Composite structure diagrams were added to UML 2.*.",
            "These diagrams show the external relationships between classes only.",
            "system. It shows the internal structure (including parts and connectors) of a structured classifier or collaboration.",
            "They provide a logical view of the internal structure of a structured classifier or collaboration.",
            "Composite structure diagrams allow representation of inner classes and parts."
        ],
        correctAnswer: "These diagrams show the external relationships between classes only.",
        imageURL: null
    },
    {
        index: 23,
        question: "Which of the following statements about Composite Structure Diagrams is NOT accurate?",
        choices: [
            "Composite Structure Diagrams illustrate the internal parts of a class.",
            "Parts are represented as partName:partType[multiplicity].",
            "Aggregated classes are represented as separate entities outside the class.",
            "Aggregated classes are parts of a class."
        ],
        correctAnswer: "Aggregated classes are represented as separate entities outside the class.",
        imageURL: null
    },
    {
        index: 24,
        question: "Which of the following statements about generalization is NOT correct?",
        choices: [
            "A generalization represents a relationship between a more general element and a more specific element.",
            "The more specific element may include additional information beyond the more general element.",
            "A generalization shows that one class inherits from another. The inheriting class is called a descendant. The class inherited from is called the ancestor.",
            "In a generalization, the relationship is drawn from the descendant to its ancestor.",
            "An instance of the more specific element may be used where the more general element is allowed.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    }




];