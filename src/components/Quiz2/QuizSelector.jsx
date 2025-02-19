import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    const [quizFile, setQuizFile] = useState("/mysql21.pdf");

    // Use an effect to update quizFile when selectedQuiz changes
    useEffect(() => {
      switch (selectedQuiz) {
        case 'mysql1':
          setQuizFile("/mysql21.pdf");
          break;
        case 'mysql2':
          setQuizFile("/mysql22.pdf");
          break;
        case 'mysql3':
          setQuizFile("/mysql23.pdf");
          break;
        case 'mysql4':
          setQuizFile("/mysql24.pdf");
          break;
        case 'mysql5':
          setQuizFile("/mysql25.pdf");
          break;
        case 'mysql6':
          setQuizFile("/mysql26.pdf"); // Fixed typo
          break;
        case 'mysql7':
          setQuizFile("/mysql27.pdf");
          break;
          case 'mysql8':
            setQuizFile("/mysql28.pdf");
            break;
            case 'mysql9':
              setQuizFile("/mysql29.pdf");
              break;
            case 'mysql10':
              setQuizFile("/mysql210.pdf"); // Fixed typo
              break;
            case 'mysql11':
              setQuizFile("/mysql211.pdf");
              break;
              case 'mysql12':
                setQuizFile("/mysql212.pdf");
                break;
        default:
          setQuizFile("/mysql21.pdf");
      }
    }, [selectedQuiz]);
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Формални м-ди/форм.с-ма</option>
                <option value="mysql2">Z нотация.Логики и доказ.</option>
                <option value="mysql3">Множества в Z-нотацията</option>
                <option value="mysql4">Релации,ф-и,редици,индукция</option>
                <option value="mysql5">Z нотация – схеми.</option>
                <option value="mysql6">Машини на състоянието</option>
                <option value="mysql7">Машини на съст.варианти</option>
                <option value="mysql8">Паралелни софт.с-ми</option>
                <option value="mysql9">Последов.динамика</option>
                <option value="mysql10">Процеси и нишки</option>
                <option value="mysql11">Конкурентно изпъл.</option>
                <option value="mysql12">Споделени обекти/вз.изкл.</option>
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