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
        // case 'mysql4':
        //   setQuizFile("/mysql54.pdf");
        //   break;
        // case 'mysql5':
        //   setQuizFile("/mysql55.pdf");
        //   break;
        // case 'mysql6':
        //   setQuizFile("/mysql56.pdf"); // Fixed typo
        //   break;
        // case 'mysql7':
        //   setQuizFile("/mysql57.pdf");
        //   break;
        //   case 'mysql8':
        //     setQuizFile("/mysql58.pdf");
        //     break;
        //   case 'mysql9':
        //     setQuizFile("/mysql59.pdf"); // Fixed typo
        //     break;
        //     case 'mysql10':
        //       setQuizFile("/mysql510.pdf"); // Fixed typo
        //       break;
       
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
                 {/*  
               
               <option value="mysql4">Извличане на изисквания</option>
                <option value="mysql5">Управление на качеството</option>
                <option value="mysql6">Гъвкави м-ди разраб.CC-2</option>
               <option value="mysql7">Управление на конфигурациите</option>
                <option value="mysql8">Разраб.Data Intensive с-ми</option>
                 <option value="mysql9">Усъвършенстване софт.процес</option>
                 <option value="mysql10">Scrum</option>
                 <option value="mysql11">Test</option> */}
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