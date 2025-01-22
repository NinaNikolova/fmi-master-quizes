import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    const [quizFile, setQuizFile] = useState("/mysql41.pdf");

    // Use an effect to update quizFile when selectedQuiz changes
    useEffect(() => {
      switch (selectedQuiz) {
        case 'mysql1':
          setQuizFile("/mysql41.pdf");
          break;
        case 'mysql2':
          setQuizFile("/mysql42.pdf");
          break;
        case 'mysql3':
          setQuizFile("/mysql43.pdf");
          break;
        case 'mysql4':
          setQuizFile("/mysql44.pdf");
          break;
        case 'mysql5':
          setQuizFile("/mysql45.pdf");
          break;
        case 'mysql6':
          setQuizFile("/mysql46.pdf"); // Fixed typo
          break;
        case 'mysql7':
          setQuizFile("/mysql47.pdf");
          break;
          case 'mysql8':
            setQuizFile("/mysql48.pdf");
            break;
          case 'mysql9':
            setQuizFile("/mysql49.pdf"); // Fixed typo
            break;
            case 'mysql10':
              setQuizFile("/mysql410.pdf"); // Fixed typo
              break;
        default:
          setQuizFile("/mysql41.pdf");
      }
    }, [selectedQuiz]);
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Софтуерно инж.</option>
                <option value="mysql2">Софт.процес, Модели</option>
                <option value="mysql3">Гъвкави м-ди разраб.CC</option>
               <option value="mysql4">Извличане на изисквания</option>
                <option value="mysql5">Управление на качеството</option>
                <option value="mysql6">Гъвкави м-ди разраб.CC-2</option>
               <option value="mysql7">Управление на конфигурациите</option>
                <option value="mysql8">Разраб.Data Intensive с-ми</option>
                 <option value="mysql9">Усъвършенстване софт.процес</option>
                 <option value="mysql10">Scrum</option>
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