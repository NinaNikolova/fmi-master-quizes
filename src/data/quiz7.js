export const mysql7 = [
  {
    index: 1,
    question: "What is the purpose of a state diagram in UML?",
    choices: [
      "To model the static structure of a system.",
      "To depict the behavior of a single object across different states.",
      "To describe the flow of control among activities.",
      "To show the relationships between objects."
    ],
    correctAnswer: "To depict the behavior of a single object across different states.",
    imageURL: null
  },
  {
    index: 2,
    question: "What differentiates activity diagrams from state diagrams?",
    choices: [
      "Activity diagrams are state-centric, while state diagrams are activity-centric.",
      "Activity diagrams are activity-centric, while state diagrams are state-centric.",
      "Activity diagrams are used for object behavior, while state diagrams focus on workflows.",
      "Activity diagrams and state diagrams are identical in purpose."
    ],
    correctAnswer: "Activity diagrams are activity-centric, while state diagrams are state-centric.",
    imageURL: null
  },
  {
    index: 3,
    question: "What does a start pseudostate represent in a state diagram?",
    choices: [
      "The end of a workflow.",
      "A choice point for transitions.",
      "The beginning of a workflow or event sequence.",
      "A state that performs an internal action."
    ],
    correctAnswer: "The beginning of a workflow or event sequence.",
    imageURL: null
  },
  {
    index: 4,
    question: "What is a deep history pseudostate used for?",
    choices: [
      "To model entry and exit points of a composite state.",
      "To remember the most recent active configuration of a composite state.",
      "To define parallel execution of activities.",
      "To merge multiple transitions into a single state."
    ],
    correctAnswer: "To remember the most recent active configuration of a composite state.",
    imageURL: null
  },
  {
    index: 5,
    question: "Which state activity type is triggered when an object enters a state?",
    choices: [
      "On Exit",
      "Do",
      "On Entry",
      "On Event"
    ],
    correctAnswer: "On Entry",
    imageURL: null
  },
  {
    index: 6,
    question: "What is the purpose of a composite state in UML?",
    choices: [
      "To model parallel workflows.",
      "To represent an atomic state transition.",
      "To organize nested states within a single state.",
      "To indicate termination of a state machine."
    ],
    correctAnswer: "To organize nested states within a single state.",
    imageURL: null
  },
  {
    index: 7,
    question: "What type of behavior does an activity diagram model?",
    choices: [
      "The lifetime states of an object.",
      "The sequence of activities in a workflow.",
      "The interaction between objects.",
      "The relationships between use cases."
    ],
    correctAnswer: "The sequence of activities in a workflow.",
    imageURL: null
  },
  {
    index: 8,
    question: "What is the main function of a swimlane in an activity diagram?",
    choices: [
      "To denote branching conditions.",
      "To represent the duration of an activity.",
      "To indicate responsibility for specific activities.",
      "To model parallel activities."
    ],
    correctAnswer: "To indicate responsibility for specific activities.",
    imageURL: null
  },
  {
    index: 9,
    question: "What is an expansion region in an activity diagram?",
    choices: [
      "A way to model tasks repeated for each item in a collection.",
      "A construct for interruptible activities.",
      "A method to specify decision nodes.",
      "A graphical element to indicate activity final nodes."
    ],
    correctAnswer: "A way to model tasks repeated for each item in a collection.",
    imageURL: null
  },
  {
    index: 10,
    question: "What distinguishes actions from activities in UML?",
    choices: [
      "Actions represent atomic tasks, while activities represent sequences of tasks.",
      "Actions are long-duration processes, while activities are instantaneous.",
      "Actions are activity-centric, while activities are state-centric.",
      "Actions and activities have identical definitions."
    ],
    correctAnswer: "Actions represent atomic tasks, while activities represent sequences of tasks.",
    imageURL: null
  },
  {
    index: 11,
    question: "What is the purpose of a decision node in an activity diagram?",
    choices: [
      "To indicate the end of all control flows.",
      "To branch workflow based on guard conditions.",
      "To merge multiple workflows into one.",
      "To indicate simultaneous workflows."
    ],
    correctAnswer: "To branch workflow based on guard conditions.",
    imageURL: null
  },
  {
    index: 12,
    question: "What does a flow final node represent in an activity diagram?",
    choices: [
      "The end of all control flows.",
      "The termination of a specific control flow.",
      "The completion of an activity's execution.",
      "The joining of multiple workflows."
    ],
    correctAnswer: "The termination of a specific control flow.",
    imageURL: null
  },
  {
    index: 13,
    question: "What does a history pseudostate allow in state diagrams?",
    choices: [
      "Merging multiple states into a single composite state.",
      "Remembering the previous state when interrupted.",
      "Simultaneous workflows in a composite state.",
      "Modeling transitions with guard conditions."
    ],
    correctAnswer: "Remembering the previous state when interrupted.",
    imageURL: null
  },
  {
    index: 14,
    question: "What is a junction pseudostate used for?",
    choices: [
      "To synchronize multiple workflows.",
      "To chain multiple transitions together.",
      "To remember the active state of a composite state.",
      "To model entry points into nested states."
    ],
    correctAnswer: "To chain multiple transitions together.",
    imageURL: null
  },
  {
    index: 15,
    question: "What is modeled by object flows in an activity diagram?",
    choices: [
      "The duration of an activity.",
      "The relationship between activities and objects.",
      "The sequence of workflow transitions.",
      "The merging of parallel workflows."
    ],
    correctAnswer: "The relationship between activities and objects.",
    imageURL: null
  },
  {
    index: 16,
    question: "What is the purpose of an interruptible activity region?",
    choices: [
      "To model simultaneous workflows.",
      "To indicate branching workflows.",
      "To allow a group of actions to be interrupted.",
      "To define constraints on activity transitions."
    ],
    correctAnswer: "To allow a group of actions to be interrupted.",
    imageURL: null
  },
  {
    index: 17,
    question: "What do send and receive signals represent in activity diagrams?",
    choices: [
      "Interactions with external participants.",
      "The branching of workflows.",
      "The completion of an activity's task.",
      "The merging of multiple workflows."
    ],
    correctAnswer: "Interactions with external participants.",
    imageURL: null
  },
  {
    index: 18,
    question: "What does an activity final node represent?",
    choices: [
      "The termination of a specific control flow.",
      "The end of all control flows within the activity.",
      "The branching of a workflow.",
      "The synchronization of parallel workflows."
    ],
    correctAnswer: "The end of all control flows within the activity.",
    imageURL: null
  },
  {
    index: 19,
    question: "What is the purpose of an entry point in a submachine state?",
    choices: [
      "To define a guard condition for transitions.",
      "To allow entry into a submachine at a non-initial state.",
      "To indicate the end of a workflow.",
      "To synchronize parallel workflows."
    ],
    correctAnswer: "To allow entry into a submachine at a non-initial state.",
    imageURL: null
  },
  {
    index: 20,
    question: "What does a synchronization construct model in an activity diagram?",
    choices: [
      "The branching of workflows based on conditions.",
      "The termination of all control flows.",
      "Parallel workflows with forks and joins.",
      "The sequential execution of tasks."
    ],
    correctAnswer: "Parallel workflows with forks and joins.",
    imageURL: null
  }
];
