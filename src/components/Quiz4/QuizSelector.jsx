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
            setQuizFile("/mysql410.pdf");
            break;
        default:
          setQuizFile("/mysql41.pdf");
      }
    }, [selectedQuiz]);
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Софт.техн.Въведение</option>
                <option value="mysql2">Етични аспекти</option>
                <option value="mysql3">Agile</option>
                <option value="mysql4">Data-intensive system</option>
                {/* <option value="mysql5">Качест.х-ки на софт.с-ми</option>
                <option value="mysql6">Проектиране АСС-тактики 1</option>
                <option value="mysql7">Проектиране АСС-тактики 2</option>
                <option value="mysql8">Процес за проектиране на CA</option>
                <option value="mysql9">Документиране на СА</option>
                <option value="mysql10">Оценка на СА</option> */}
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