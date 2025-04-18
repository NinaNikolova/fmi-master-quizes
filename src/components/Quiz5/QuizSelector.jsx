import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
  const [quizFile, setQuizFile] = useState("/mysql51.pdf");

  // Use an effect to update quizFile when selectedQuiz changes
  useEffect(() => {
    switch (selectedQuiz) {
      case 'mysql1':
        setQuizFile("/mysql51.pdf");
        break;
      case 'mysql2':
        setQuizFile("/mysql52.pdf");
        break;
      case 'mysql3':
        setQuizFile("/mysql53.pdf");
        break;
      case 'mysql4':
        setQuizFile("/mysql54.pdf");
        break;
      case 'mysql5':
        setQuizFile("/mysql55.pdf");
        break;
      case 'mysql6':
        setQuizFile("/mysql56.pdf");
        break;
      case 'mysql7':
        setQuizFile("/mysql57.pdf");
        break;
      case 'mysql8':
        setQuizFile("/mysql58.pdf");
        break;
      case 'mysql9':
        setQuizFile("/mysql59.pdf");
        break;
      case 'mysql10':
        setQuizFile("/mysql510.pdf");
        break;
      case 'mysql11':
        setQuizFile("/mysql511.pdf");
        break;
      case 'mysql12':
        setQuizFile("/mysql512.pdf");
        break;
      default:
        setQuizFile("/mysql51.pdf");
    }
  }, [selectedQuiz]);
  return (
    <div className="quiz-selector">
      <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
        <option value="mysql1">Увод</option>
        <option value="mysql2">Цикъл на П и ролята на р-ля</option>
        <option value="mysql3">Осн.п-си и осн.ел.</option>
        <option value="mysql4">Организ.сруктури в УП</option>
        <option value="mysql5">Дефиниция и инициализ.П</option>
        <option value="mysql6">Изгражд.екип/ план р-си</option>
        <option value="mysql7">Планиране проекта-I</option>
        <option value="mysql8">Планиране проекта-II</option>
        <option value="mysql9">Несигурност и риск</option>
        <option value="mysql10">Изпълнение и контрол П</option>
        <option value="mysql11">Agile подход</option>
        <option value="mysql12">УП корп.бизнес с-ми</option>
      </select>
      <a
        href={quizFile}
        download={quizFile.split('/').pop()} // Extracts the file name from the path
        className="download-btn"
      >
        <FaDownload />
      </a>
    </div>
  )
}