export const mysql6 = [
  {
    index: 1,
    question: "What are the main qualities of software dependability?",
    choices: [
      "Availability, reliability, safety, integrity, confidentiality, maintainability",
      "Availability, reliability, performance, integrity, confidentiality, maintainability",
      "Availability, reliability, safety, integrity, security, scalability",
      "Availability, reliability, safety, integrity, confidentiality, reusability"
    ],
    correctAnswer: "Availability, reliability, safety, integrity, confidentiality, maintainability",
    imageURL: null
  },
  {
    index: 2,
    question: "Which tactic is used to detect failures in a system?",
    choices: [
      "Active redundancy",
      "Passive redundancy",
      "All of the above",
      "Heartbeat/Keepalive",
    ],
    correctAnswer: "Heartbeat/Keepalive",
    imageURL: null
  },
  {
    index: 3,
    question: "What is the main difference between active redundancy and passive redundancy /излишък/?",
    choices: [
      "Active redundancy has slower switchover time, passive redundancy has faster switchover time",
      "Active redundancy has faster switchover time, passive redundancy has slower switchover time",
      "Active redundancy uses primary and backup components, passive redundancy uses a single active component",
      "Active redundancy requires manual switchover, passive redundancy has automatic switchover"
    ],
    correctAnswer: "Active redundancy has faster switchover time, passive redundancy has slower switchover time",
    imageURL: null
  },
  {
    index: 4,
    question: "What is the purpose of the 'Voter' component in N-version programming?",
    choices: [
      "To monitor the N versions and detect any failures",
      "To synchronize the execution of the N versions",
      "To compare the outputs of the N versions and decide the final output",
      "To manage the resource allocation for the N versions"
    ],
    correctAnswer: "To compare the outputs of the N versions and decide the final output",
    imageURL: null
  },
  {
    index: 5,
    question: "What is the main idea behind the Recovery Blocks technique?",
    choices: [
      "Developing multiple alternative modules and testing them to find the acceptable result",
      "Executing the N versions in parallel and comparing the outputs",
      "Periodically checkpointing the system state and rolling back to the last checkpoint",
      "Monitoring the processes and restarting them in case of failures"
    ],
    correctAnswer: "Developing multiple alternative modules and testing them to find the acceptable result",
    imageURL: null
  },
  {
    index: 6,
    question: "What is the purpose of introducing design diversity in software systems?",
    choices: [
      "To increase the system's performance",
      "To improve the system's maintainability",
      "To reduce the risk of systematic design faults",
      "To enhance the system's user interface"
    ],
    correctAnswer: "To reduce the risk of systematic design faults",
    imageURL: null
  },
  {
    index: 7,
    question: "Which tactic is used to reduce the resource requirements of a system?",
    choices: [
      "Increasing the processing power",
      "Increasing the parallelism",
      "Decreasing the event frequency",
      "All of the above"
    ],
    correctAnswer: "Decreasing the event frequency",
    imageURL: null
  },
  {
    index: 8,
    question: "What is the purpose of the 'Process Monitoring' tactic?",
    choices: [
      "To detect and remove faulty processes",
      "To manage the resource allocation for processes",
      "To schedule the execution of processes",
      "To checkpoint and restore the state of processes"
    ],
    correctAnswer: "To detect and remove faulty processes",
    imageURL: null
  },
  {
    index: 9,
    question: "What is the main idea behind the 'Checkpoint/Rollback' tactic?",
    choices: [
      "Executing multiple versions of the system in parallel and comparing the outputs",
      "Monitoring the processes and restarting them in case of failures",
      "Periodically saving the consistent state of the system and restoring it in case of failures",
      "Increasing the redundancy of hardware and software components"
    ],
    correctAnswer: "Periodically saving the consistent state of the system and restoring it in case of failures",
    imageURL: null
  },
  {
    index: 10,
    question: "Which tactic is used to reduce the overhead (non-essential computations) in a system?",
    choices: [
      "Increasing the processing power",
      "Decreasing the event frequency",
      "Limiting the execution time",
      "All of the above"
    ],
    correctAnswer: "Decreasing the event frequency",
    imageURL: null
  },
  {
    index: 11,
    question: "What is the main purpose of the 'Parallel Processing' tactic?",
    choices: [
      "To increase the system's availability",
      "To improve the system's reliability",
      "To enhance the system's performance",
      "To reduce the system's maintainability"
    ],
    correctAnswer: "To enhance the system's performance",
    imageURL: null
  },
  {
    index: 12,
    question: "What is the main idea behind the 'Fixed Priority' scheduling algorithm?",
    choices: [
      "Assigning a fixed priority to each task based on its semantic importance or timing requirements",
      "Scheduling tasks in the order they arrive, without any priority consideration",
      "Dynamically adjusting the priority of tasks based on their past execution history",
      "Allocating resources to tasks based on a pre-defined static schedule"
    ],
    correctAnswer: "Assigning a fixed priority to each task based on its semantic importance or timing requirements",
    imageURL: null
  },
  {
    index: 13,
    question: "Which tactic is used to introduce diversity in the implementation of a software system?",
    choices: [
      "N-version programming",
      "Recovery Blocks",
      "Temporal diversity",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    imageURL: null
  },
  {
    index: 14,
    question: "What is the main purpose of the 'Shadow Mode' tactic?",
    choices: [
      "To detect and remove faulty components",
      "To synchronize the state of redundant components",
      "To test a repaired component before putting it back into service",
      "To manage the resource allocation for different components"
    ],
    correctAnswer: "To test a repaired component before putting it back into service",
    imageURL: null
  },
  {
    index: 15,
    question: "Which tactic is used to deal with resource contention in a system?",
    choices: [
      "Increasing the processing power",
      "Decreasing the event frequency",
      "Scheduling the execution of tasks",
      "All of the above"
    ],
    correctAnswer: "Scheduling the execution of tasks",
    imageURL: null
  },
  {
    index: 16,
    question: "What is the main difference between 'FIFO' and 'Fixed Priority' scheduling algorithms?",
    choices: [
      "FIFO is more efficient, while Fixed Priority is more complex to implement",
      "FIFO treats all tasks equally, while Fixed Priority assigns different priorities to tasks",
      "FIFO is more suitable for real-time systems, while Fixed Priority is more suitable for batch processing",
      "FIFO is more dynamic, while Fixed Priority is more static"
    ],
    correctAnswer: "FIFO treats all tasks equally, while Fixed Priority assigns different priorities to tasks",
    imageURL: null
  },
  {
    index: 17,
    question: "Which tactic is used to introduce diversity in the input data of a software system?",
    choices: [
      "N-version programming",
      "Recovery Blocks",
      "Temporal diversity",
      "Data diversity"
    ],
    correctAnswer: "Data diversity",
    imageURL: null
  },
  {
    index: 18,
    question: "What is the main purpose of the 'Removal from Service' tactic?",
    choices: [
      "To detect and remove faulty components",
      "To synchronize the state of redundant components",
      "To test a repaired component before putting it back into service",
      "To proactively remove components from the system to avoid expected failures"
    ],
    correctAnswer: "To proactively remove components from the system to avoid expected failures",
    imageURL: null
  },
  {
    index: 19,
    question: "Which tactic is used to introduce diversity in the timing of a software system's execution?",
    choices: [
      "N-version programming",
      "Recovery Blocks",
      "Temporal diversity",
      "Data diversity"
    ],
    correctAnswer: "Temporal diversity",
    imageURL: null
  },
  {
    index: 20,
    question: "What is the main difference between 'Dynamic Priority' and 'Static Scheduling' algorithms?",
    choices: [
      "Dynamic Priority is more suitable for real-time systems, while Static Scheduling is more suitable for batch processing",
      "Dynamic Priority is more efficient, while Static Scheduling is more complex to implement",
      "Dynamic Priority adjusts the priority of tasks based on their past execution history, while Static Scheduling uses a pre-defined schedule",
      "Dynamic Priority is more flexible, while Static Scheduling is more predictable"
    ],
    correctAnswer: "Dynamic Priority adjusts the priority of tasks based on their past execution history, while Static Scheduling uses a pre-defined schedule",
    imageURL: null
  }


];