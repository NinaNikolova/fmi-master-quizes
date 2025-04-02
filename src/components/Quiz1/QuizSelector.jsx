import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
  const [quizFile, setQuizFile] = useState("/mysql21.pdf");

  // Use an effect to update quizFile when selectedQuiz changes
  useEffect(() => {
    switch (selectedQuiz) {
      case 'mysql1':
        setQuizFile("/mysql11.pdf");
        break;
      case 'mysql2':
        setQuizFile("/mysql12.pdf");
        break;
      case 'mysql3':
        setQuizFile("/mysql13.pdf");
        break;
      case 'mysql4':
        setQuizFile("/mysql14.pdf");
        break;
      case 'mysql5':
        setQuizFile("/mysql15.pdf");
        break;
      case 'mysql6':
        setQuizFile("/mysql16.pdf"); // Fixed typo
        break;
      case 'mysql7':
        setQuizFile("/mysql17.pdf");
        break;
      case 'mysql8':
        setQuizFile("/mysql18.pdf");
        break;
      case 'mysql9':
        setQuizFile("/mysql19.pdf");
        break;
      case 'mysql10':
        setQuizFile("/mysql110.pdf");
        break;
      default:
        setQuizFile("/mysql11.pdf");
    }
  }, [selectedQuiz]);
  return (
    <div className="quiz-selector">
      <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
        <option value="mysql1">Ел.изявления и ел.документи</option>
        <option value="mysql2">Е-идентиф.и е-удостов.у-и I</option>
        <option value="mysql3">Е-идентиф.и е-удостов.у-и II</option>
        <option value="mysql4">Ел.търговия.Незак.съдърж.</option>
        <option value="mysql5">Авт.права.Права в/у софтуер</option>
        <option value="mysql6">Домейн имена</option>
        <option value="mysql7">Защита на личните данни</option>
        <option value="mysql8">Класиф.инф.Достъп общ.инф.</option>
        <option value="mysql9">Електронно управление</option>
        <option value="mysql10">Престъпл.,свърз.с инф.техн.</option>

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
