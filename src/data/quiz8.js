export const mysql8 = [
  {
    index: 1,
    question: "What is Object Constraint Language (OCL)?",
    choices: [
      "A specification language without side effects.",
      "A tool for automatic code generation.",
    ],
    correctAnswer: "A specification language without side effects.",
    imageURL: "https://slideplayer.com/slide/7285518/24/images/21/Basic+constructs+Let%2C+If-then-else+Standard+Library.jpg"
  },
  {
    index: 2,
    question: "What is the primary purpose of OCL?",
    choices: [
      "To generate UML diagrams automatically.",
      "To provide formal constraints on UML models.",

    ],
    correctAnswer: "To provide formal constraints on UML models.",
    imageURL: null
  },
  {
    index: 3,
    question: "What types of constraints can be specified using OCL?",
    choices: [
      "Invariants, preconditions, and postconditions.",
      "Only timing dependencies.",
    ],
    correctAnswer: "Invariants, preconditions, and postconditions.",
    imageURL: null
  },
  {
    index: 4,
    question: "What is NOT true about invariant in OCL?",
    choices: [
      "It is a constraint stereotyped as an «invariant»",
      "An OCL expression is an invariant of the type and must be true for all instances of that type at any time.",
      "It is of type Boolean.",
      "None of the above"
    ],
    correctAnswer: "None of the above",
    imageURL: null
  },
  {
    index: 5,
    question: "Which is NOT true expression of `in the context of the Company type, the following expression would specify an invariant that the number of employees must always exceed 50`?",
    choices: [
      "context Company inv: self.numberOfEmployees > 50",
      "context c : Company inv: c.numberOfEmployees > 50",
      "context c : Company inv enoughEmployees : c.numberOfEmployees > 50",
      "context Company inv: self.numberOfEmployees < 50"
    ],
    correctAnswer: "context Company inv: self.numberOfEmployees < 50",
    imageURL: null
  },
  {
    index: 6,
    question: "How are constraints on attributes specified in OCL?",
    choices: [
      "Using the context of the class the attribute belongs to.",
      "By direct assignment in the UML diagram.",
    ],
    correctAnswer: "Using the context of the class the attribute belongs to.",
    imageURL: null
  },
  {
    index: 7,
    question: "Which organization supports the development of OCL?",
    choices: [
      "OMG (Object Management Group)",
      "W3C",
      "ISO",
      "IEEE"
    ],
    correctAnswer: "OMG (Object Management Group)",
    imageURL: null
  },
  {
    index: 8,
    question: "What is the purpose of timing diagrams in UML?",
    choices: [
      "To illustrate timing information for events and states.",
      "To show the relationships between classes.",
    ],
    correctAnswer: "To illustrate timing information for events and states.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 9,
    question: "What types of timing constraints can be defined in timing diagrams?",
    choices: [
      "{t..t+5s}, {<5s}, {>5s, <10s}",
      "Only absolute time values.",
    ],
    correctAnswer: "{t..t+5s}, {<5s}, {>5s, <10s}",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 10,
    question: "How are states described in timing diagrams?",
    choices: [
      "Vertically, using connections.",
      "Horizontally, next to the participants they are associated with.",
    ],
    correctAnswer: "Horizontally, next to the participants they are associated with.",
    imageURL: "https://cdn-images.visual-paradigm.com/guide/uml/what-is-timing-diagram/02-timing-diagram-example.png"
  },
  {
    index: 11,
    question: "What is the primary purpose of Model Driven Architecture (MDA)?",
    choices: [
      "To separate the specification of functionalities from implementation.",
      "To automate software testing processes.",
    ],
    correctAnswer: "To separate the specification of functionalities from implementation.",
    imageURL: "https://www.omg.org/mda/images/mda_diagram.gif"
  },
  {
    index: 12,
    question: "Which model in MDA describes the business logic of the system?",
    choices: [
      "CIM (Computation Independent Model).",
      "PIM (Platform Independent Model).",
      "PSM (Platform Specific Model).",
      "Code"
    ],
    correctAnswer: "PIM (Platform Independent Model).",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 13,
    question: "What is the main difference between CIM and PIM in MDA?",
    choices: [
      "CIM describes requirements, while PIM describes the system logic.",
      "CIM and PIM are identical models."
    ],
    correctAnswer: "CIM describes requirements, while PIM describes the system logic.",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 14,
    question: "What are the benefits of using PIM models in MDA?",
    choices: [
      "Reduced complexity of platform code.",
      "Improved portability, productivity, and maintainability.",
    ],
    correctAnswer: "Improved portability, productivity, and maintainability.",
    imageURL: "https://www.modeliosoft.com/images/mda_technology.png"
  },
  {
    index: 17,
    question: "What operations can NOT be performed on collections in OCL?",
    choices: [
      "->includes(object)",
      "->includesAll(collection)",
      "->size",
      "->isEmpty",
      "->notEmpty",
      "->sum()",
      "->count(object)",
      "->add",
      "->select",
      "->reject()",
      "->collect()",
      "->forAll()",
      "->exists()",
      "->iterate()",
    ],
    correctAnswer: "->add",
    imageURL: null
  },

  {
    index: 19,
    question: "What do timing constraints in timing diagrams specify?",
    choices: [
      "Methods of interaction.",
      "The duration of events and states.",
    ],
    correctAnswer: "The duration of events and states.",
    imageURL: null
  },

  {
    index: 21,
    question: "Combining UML and OCL is necessary to construct models - precise enough to enable automatic model-to-code transformation?",
    choices: [
      "Yes",
      "No",
    ],
    correctAnswer: "Yes",
    imageURL: null
  },
  {
    index: 22,
    question: "What is NOT true about OCL?",
    choices: [
      "OCL is a formal language that remains easy to read and write",
      "OCL is a pure specification language",
      "OCL is not a programming but modeling language",
      "The evaluation of an OCL expression is instantaneous - the states of objects in a model cannot change during evaluation",
      "OCL is a programming language"
    ],
    correctAnswer: "OCL is a programming language",
    imageURL: null
  },
  {
    index: 23,
    question: "What is NOT OCL Collection Types?",
    choices: [
      "Set (no duplicate)",
      "Bag (duplicates allowed)",
      "Sequence (ordered Bag)",
      "Array"
    ],
    correctAnswer: "Array",
    imageURL: "https://www.researchgate.net/publication/220054058/figure/fig7/AS:661891756081152@1534818700201/OCL-23-Collection-Hierarchy.png"
  },

];