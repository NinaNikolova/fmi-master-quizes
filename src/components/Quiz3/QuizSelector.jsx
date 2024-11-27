export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
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
            </select>
        </div>
    )
}