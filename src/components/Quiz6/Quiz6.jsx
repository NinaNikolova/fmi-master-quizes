import { useState } from "react";
import { resultInitalState } from "../../constants";
import QuizSelector from "../Quiz6/QuizSelector";
import Result from "../Result";
import Question from "../Question";
import { getQuestions } from "../../utils/getQuestions";
import { calculateResult } from "../../utils/calculateResult";
import { mysql1 } from "../../data6/quiz1";
import { mysql2 } from "../../data6/quiz2";
import { mysql3 } from "../../data6/quiz3";
import { mysql4 } from "../../data6/quiz4";
import { mysql5 } from "../../data6/quiz5";
import { mysql6 } from "../../data6/quiz6";
import { mysql7 } from "../../data6/quiz7";
import { mysql8 } from "../../data6/quiz8";
import { mysql9 } from "../../data6/quiz9";
import { mysql10 } from "../../data6/quiz10";
import { mysql11 } from "../../data6/quiz11";
import HomeLink from "../HomeLink/HomeLink";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState("mysql1");
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const questions = getQuestions(selectedQuiz, {
    mysql1, mysql2, mysql3, mysql4, mysql5, mysql6, mysql7,
    mysql8, mysql9, mysql10, mysql11
  });
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

  return (
    <div className="quiz-container">
      <div className="heading">
        <h2>Data Mining</h2>
        <HomeLink />
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