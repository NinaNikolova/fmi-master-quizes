import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
  const [quizFile, setQuizFile] = useState("/mysql11.pdf");

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
      default:
        setQuizFile("/mysql11.pdf");
    }
  }, [selectedQuiz]);
  return (
    <div className="quiz-selector">
      <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
        <option value="mysql1">SOAP</option>
        <option value="mysql2">WSDL</option>
        <option value="mysql3">UDDI</option>
        <option value="mysql4">RESTful Web Services</option>
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
