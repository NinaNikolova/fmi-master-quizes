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
          case 'mysql11':
            setQuizFile("/mysql111.pdf"); // Fixed typo
            break;
          case 'mysql12':
            setQuizFile("/mysql112.pdf");
            break;
        default:
          setQuizFile("/mysql11.pdf");
      }
    }, [selectedQuiz]);
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Въведение.Визуално и ОО моделиране</option>
                <option value="mysql2">OO моделиране с UML </option>
                <option value="mysql3">Анализ на изискв. Use case-диаграми</option>
                <option value="mysql4">OO анализ, profile diagrams</option>
                <option value="mysql5">Aggregation, Composition, Inheritance</option>
                <option value="mysql6">Interaction диаграми</option>
                <option value="mysql7">Activity/State Machine</option>
                <option value="mysql8">UML 2.*.OCL. MDA. Timing диаграми</option>
                <option value="mysql9">Диаграми на комп. и внедряването</option>
                <option value="mysql10">Проектиране софт. архитектура</option>
                <option value="mysql11">Инженерен процес</option>
                <option value="mysql12">Подготовка за изпит</option>

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
