import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    const [quizFile, setQuizFile] = useState("/mysql31.pdf");

    // Use an effect to update quizFile when selectedQuiz changes
    useEffect(() => {
      switch (selectedQuiz) {
        case 'mysql1':
          setQuizFile("/mysql31.pdf");
          break;
        case 'mysql2':
          setQuizFile("/mysql32.pdf");
          break;
        case 'mysql3':
          setQuizFile("/mysql33.pdf");
          break;
        case 'mysql4':
          setQuizFile("/mysql34.pdf");
          break;
        case 'mysql5':
          setQuizFile("/mysql35.pdf");
          break;
        case 'mysql6':
          setQuizFile("/mysql36.pdf"); // Fixed typo
          break;
        case 'mysql7':
          setQuizFile("/mysql37.pdf");
          break;
          case 'mysql8':
            setQuizFile("/mysql38.pdf");
            break;
          case 'mysql9':
            setQuizFile("/mysql39.pdf"); // Fixed typo
            break;
          case 'mysql10':
            setQuizFile("/mysql310.pdf");
            break;
            case 'mysql11':
              setQuizFile("/mysql311.pdf");
              break;
        default:
          setQuizFile("/mysql31.pdf");
      }
    }, [selectedQuiz]);
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Въведение</option>
                <option value="mysql2">Софт.арх. Видове изгледи</option>
                <option value="mysql3">Арх.стилове - 1</option>
                <option value="mysql4">Арх.стилове - 2</option>
                <option value="mysql5">Качест.х-ки на софт.с-ми</option>
                <option value="mysql6">Проектиране АСС-тактики 1</option>
                <option value="mysql7">Проектиране АСС-тактики 2</option>
                <option value="mysql8">Процес за проектиране на CA</option>
                <option value="mysql9">Документиране на СА</option>
                <option value="mysql10">Оценка на СА</option>
                <option value="mysql11">Форм.модели и ДСА</option>
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