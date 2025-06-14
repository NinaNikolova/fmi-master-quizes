import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
  const [quizFile, setQuizFile] = useState("/mysql61.pdf");

  // Use an effect to update quizFile when selectedQuiz changes
  useEffect(() => {
    switch (selectedQuiz) {
      case 'mysql1':
        setQuizFile("/mysql61.pdf");
        break;
      case 'mysql2':
        setQuizFile("/mysql62.pdf");
        break;
      case 'mysql3':
        setQuizFile("/mysql63.pdf");
        break;
      case 'mysql4':
        setQuizFile("/mysql64.pdf");
        break;
      case 'mysql5':
        setQuizFile("/mysql65.pdf");
        break;
      case 'mysql6':
        setQuizFile("/mysql66.pdf"); // Fixed typo
        break;
      case 'mysql7':
        setQuizFile("/mysql67.pdf");
        break;
      case 'mysql8':
        setQuizFile("/mysql68.pdf");
        break;
      case 'mysql9':
        setQuizFile("/mysql69.pdf"); // Fixed typo
        break;
      case 'mysql10':
        setQuizFile("/mysql610.pdf"); // Fixed typo
        break;
      case 'mysql11':
        setQuizFile("/mysql611.pdf"); // Fixed typo
        break;
      default:
        setQuizFile("/mysql61.pdf");
    }
  }, [selectedQuiz]);
  return (
    <div className="quiz-selector">
      <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
        <option value="mysql1">Увод</option>
        <option value="mysql2">Вх.данни,концепции...</option>
        <option value="mysql3">Изход</option>
        <option value="mysql4">Алгоритми</option>
        <option value="mysql5">Оценяване модели</option>
        <option value="mysql6">Алгоритми-обуч.дървета/правила</option>
        <option value="mysql7">Обуч.с примери/ линейни м-ли</option>

        <option value="mysql8">Преобразуване данните</option>
        <option value="mysql9">Смесено обучение</option>
        <option value="mysql10">Учене гупа модели</option>
        <option value="mysql11">Дълбоки невронни мрежи</option>
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