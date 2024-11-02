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
    },
    {
        index: 25,
        question: "Which of the following statements about super and sub-classes is NOT correct?",
        choices: [
            "A super class contains features that are common to two or more classes.",
            "A sub class includes at least the features of its super class(es).",
            "A class cannot be both a super class and a sub class simultaneously.",
            "A class may be a sub class and a super class at the same time."
        ],
        correctAnswer: "A class cannot be both a super class and a sub class simultaneously.",
        imageURL: null
    },
    {
        index: 26,
        question: "Which of the following statements about generalization is NOT correct?",
        choices: [
            "Generalization is a process of organizing features of objects with a shared purpose.",
            "Generalization is equivalent to a 'kind of' or 'type of' relationship.",
            "Specialization is the same as generalization.",
            "Generalization enables inheritance.",
            "Specialization is the opposite of generalization",
            "Generalization is not an association."

        ],
        correctAnswer: "Specialization is the same as generalization.",
        imageURL: null
    },
    {
        index: 27,
        question: "Which of the following statements about generalization and specialization is INCORRECT?",
        choices: [
            "Generalization involves identifying abstract concepts from lower-level, concrete ones.",
            "Class inheritance enables organizing concepts into hierarchies.",
            "Specialization identifies specific concepts from a higher-level concept.",
            "Inheritance is related to generalization or specialization.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 28,
        question: "Which statement about single and multiple inheritance is CORRECT?",
        choices: [
            "A class can only inherit from one other class, never multiple classes.",
            "A class can inherit from several other classes through multiple inheritance, although generally it will inherit from only one.",
        ],
        correctAnswer: "A class can inherit from several other classes through multiple inheritance, although generally it will inherit from only one.",
        imageURL: null
    },
    {
        index: 29,
        question: "Which of the following is INCORRECT?",
        choices: [
            "You must handle naming conflicts if multiple ancestors have the same attribute or operation name.",
            "There is no need to qualify attribute names when they appear in multiple ancestors /предци/.",
        ],
        correctAnswer: "You must handle naming conflicts if multiple ancestors have the same attribute or operation name.",
        imageURL: null
    },
    {
        index: 30,
        question: "What is a repeated inheritance problem in multiple inheritance?",
        choices: [
            "Multiple copies of an ancestor's attributes may exist in a descendant due to repeated inheritance.",
            "Repeated inheritance allows only one instance of each attribute in the descendant.",
        ],
        correctAnswer: "Multiple copies of an ancestor's attributes may exist in a descendant due to repeated inheritance.",
        imageURL: null
    },
    {
        index: 31,
        question: "Which of the following statements about abstract and concrete classes is NOT TRUE?",
        choices: [
            "A class that is not instantiated and exists only for other classes to inherit it, is an abstract class.",
            "Classes that are actually instantiated are concrete classes",
            "An abstract class must have at least one descendant to be useful",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 32,
        question: "In an object-oriented system, what is the purpose of an abstract class?",
        choices: [
            "To provide a blueprint that concrete classes can inherit.",
            "To automatically instantiate child classes.",
        ],
        correctAnswer: "To provide a blueprint that concrete classes can inherit.",
        imageURL: null
    },
    {
        index: 33,
        question: "Which of the following statements is NOT TRUE?",
        choices: [
            "An abstract class is a class that lacks a complete implementation; cannot be used to create objects; cannot be instantiated; a concrete sub-class must provide methods for unimplemented operations",
            "Concrete class has methods for all operations; can be instantiated; methods may be defined in the class or inherited from a super-class",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 34,
        question: "Which of the following statement about different types of classes is INCORRECT?",
        choices: [
            "An abstract class cannot have direct instances and the name is written in italics.",
            "A root class cannot be a sub-class and is written with a 'root' stereotype.",
            "A leaf class cannot be a superclass and is written with a 'leaf' stereotype.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 35,
        question: "Which of the following statements about polymorphism is NOT TRUE?",
        choices: [
            "Polymorphism is the ability to dynamically choose the method for an operation choose the method for an operation at run-time and service-time.",
            "Encapsulation and generalization are facilitating polymorphism.",
            "Polymorphism allows operations to be defined in the superclass, with re-implemented methods in unique subclasses.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 36,
        question: "What is not true about Subtyping like inheritance to support polymorphism?",
        choices: [
            "Subtyping means that the descendant is a subtype that can fill in for all its ancestors in any situation.",
            "Subtyping is a special case of polymorphism.",
            "It ensures that the system will tolerate changes in the set of subtypes",
            "You should use generalizations only between classes of the same stereotype",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 37,
        question: "What is not true about Subclassing like Inheritance to support implementation reuse?",
        choices: [
            "Subclassing is the reuse aspect of generalization.",
            "It promotes code reuse by inheriting properties defined by other classes.",
            "Subclassing saves labor and lets you reuse code when implementing a particular class.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 38,
        question: "What is not true about Delegation?",
        choices: [
            "Delegation is the alternative to implementation inheritance that should be used whe reuse is desired.",
            "It is a prefarable to implementation interface.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 39,
        question: "Which statement about interfaces is NOT TRUE?",
        choices: [
            "A model element which defines a set of behaviors offered by a classifier model element.",
            "A classifier may realize one or more interfaces.",
            "An interface may be realized by one or more classifiers.",
            "Any classifiers which realize the same interfaces may be substituted for one another in the system.",
            "Each interface should provide an unique and well defined set of operations.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 40,
        question: "Which of the following statements about types of interfaces is NOT true?",
        choices: [
            "Naming and Describing Interfaces",
            "Defining Operations",
            "Documenting Interfaces",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 41,
        question: "Which of the following statements about interfaces is NOT true?",
        choices: [
            "An interface provides a complete implementation of a class or component.",
            "Interfaces can be represented in both class and component diagrams.",
            "Suppressing sections of an interface does not imply the absence of operations.",
            "Drawing an empty section indicates that there are no elements in that part."
        ],
        correctAnswer: "An interface provides a complete implementation of a class or component.",
        imageURL: null
    },
    {
        index: 42,
        question: "Which of the following statements about realization is NOT correct?",
        choices: [
            "A class can inherit from an interface class without being a subclass of that interface.",
            "Realization allows a class to inherit attributes from the interface.",
            "Realization only allows the inheritance of operations.",
            "If attributes need to be inherited, an abstract base class should be used instead of an interface."
        ],
        correctAnswer: "Realization allows a class to inherit attributes from the interface.",
        imageURL: null
    },
    {
        index: 43,
        question: "Which of the following statements about realization is NOT true?",
        choices: [
            "Realization represents a semantic relationship where one element specifies a contract and another guarantees to carry out this contract.",
            "Realization is relevant to: 1/interfaces versus realizing classes/components 2/uses cases versus diagrams realizing collaborations",
            "Realization can also apply to use cases and diagrams realizing collaborations.",
            "Realization is graphically depicted as a dashed /пунктирана/ arrow with a hollow /кух/ head.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: null
    },
    {
        index: 44,
        question: "Which of the following statements about dependency in UML is NOT true?",
        choices: [
            "A dependency relationship indicates that one element, the client, uses another element, the supplier.",
            "Dependency relationships have specific names associated with them.",
            "A change to the supplier may require a change to the client.",
            "Dependency is shown as an open arrow pointing from the client to the supplier.",
            "Dependency is weak association."
        ],
        correctAnswer: "Dependency relationships have specific names associated with them.",
        imageURL: null
    },
    {
        index: 45,
        question: "Which of the following statements about using dependency relationships is NOT true?",
        choices: [
            "A dependency relationship connects two packages to indicate that at least one element in the client package is dependent on an element in the supplier package.",
            "A dependency relationship indicates that all elements in the client package are dependent on the supplier package.",
            "A dependency relationship can connect two classes to show a higher level of abstraction than an association relationship.",
            "A client class can temporarily use a supplier class as a parameter or local variable in its operations."
        ],
        correctAnswer: "A dependency relationship indicates that all elements in the client package are dependent on the supplier package.",
        imageURL: null
    },
    {
        index: 46,
        question: "Which of the following statements about dependency and package diagrams is NOT correct?",
        choices: [
            "Package diagrams show the arrangement and organization of model elements in middle to large scale projects.",
            "A package diagram can show both the structure and dependencies between subsystems or modules.",
            "Package diagrams provide different views of a system, such as a multi-layered application model.",
            "Package diagrams are a type of structural diagram in UML 2.*.",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        imageURL: "https://online.visual-paradigm.com/repository/images/df73c422-ed3f-4397-8da2-37197c0b5067/package-diagram-design/uml-package-diagram-example-stocks-trading-system.png"
    },
    {
        index: 47,
        question: "Which of the following statements about the SOLID design principles is NOT correct?",
        choices: [
            "SRP stands for the Single Responsibility Principle.",
            "OCP refers to the Open/Closed Principle.",
            "LSP means the Liskov Substitution Principle.",
            "ISP indicates the Interface Implementation Principle.",
            "DIP represents the Dependency Inversion Principle."
        ],
        correctAnswer: "ISP indicates the Interface Implementation Principle.",
        imageURL: null
    }




]
    




];