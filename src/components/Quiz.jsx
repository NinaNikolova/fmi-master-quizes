import { useState, useEffect } from "react";
import { resultInitalState } from "../constants";
import QuizSelector from "./QuizSelector";
import Result from "./Result";
import Question from "./Question";
import { getQuestions } from "../utils/getQuestions";
import { calculateResult } from "../utils/calculateResult";
import { quest1 } from "../data/quiz1";
import { quest2 } from "../data/quiz2";
import { quest3 } from "../data/quiz3";
import { quest4 } from "../data/quiz4";
import { quest5 } from "../data/quiz5";
import { quest6 } from "../data/quiz6";
import { quest7 } from "../data/quiz7";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState("quest1");
  const [selectedSubject, setSelectedSubject] = useState("quest");
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [quizData, setQuizData] = useState(null);

  const questions = getQuestions(selectedQuiz, { quest1, quest2, quest3, quest4, quest5, quest6, quest7 });


  const { question, choices, correctAnswer, imageURL } = questions[currentQuestion];

  const onAnwswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
      setWrongQuestions((prev) => [
        ...prev,
        { question, correctAnswer, chosenAnswer: answer, imageURL },
      ]);
    }
  };

  const handleQuizChange = (event) => {
    setSelectedQuiz(event.target.value);

  };
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedQuiz("quest1"); // Reset quiz selection when subject changes
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) => calculateResult(answer, prev));

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };


  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswerIdx(null);
    setAnswer(null);
    setWrongQuestions([]);
  };
  const loadQuizData = async (subject) => {
    let data;
    if (subject === "quest") {
      data = await import(`../data/quiz${selectedQuiz.slice(-1)}`); // For quest quizzes
    } else if (subject === "Subject2") {
      data = await import(`../data1/quiz${selectedQuiz.slice(-1)}`); // For Subject 2 quizzes
    }
    setQuizData(data);
  };

  // Load the initial quiz data based on the default subject and quiz
  useEffect(() => {
    loadQuizData(selectedSubject);
  }, [selectedQuiz, selectedSubject]);



  return (
    <div className="quiz-container">

      {/* Subject Selector Dropdown */}
      <div className="subject-selector">

        <select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="quest">OO анализ и проектиране на софтуерни с-ми</option>
          <option value="Subject2">Модели на софтуерни системи</option>
          {/* Add more subjects here */}
        </select>
      </div>
      <QuizSelector selectedQuiz={selectedQuiz} handleQuizChange={handleQuizChange} />
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <Question
            question={question}
            choices={choices}
            answerIdx={answerIdx}
            correctAnswer={correctAnswer}
            onAnwswerClick={onAnwswerClick}
            imageURL={imageURL}
          />
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Result result={result} questionsLength={questions.length} wrongQuestions={wrongQuestions} onTryAgain={onTryAgain} />
      )}
    </div>
  );
};

export default Quiz;
