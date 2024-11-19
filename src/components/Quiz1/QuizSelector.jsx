export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Intro.Visual and OO modeling. Software</option>
                <option value="mysql2">OO Modelling with UML </option>
                <option value="mysql3">Requirements analysis. Use case diagrams</option>
                <option value="mysql4">OO analysis - class, object and profile diagrams</option>
                <option value="mysql5">OO Design: Aggregation, Composition, Inheritance</option>
                <option value="mysql6">Interaction diagrams</option>
                <option value="mysql7">Behavior.Structure.Activity/State Machine</option>
                <option value="mysql8">UML 2.*.OCL. MDA. Timing diagrams </option>
                <option value="mysql9">Диаграми на комп. и на внедряването </option>
                <option value="mysql10">Проектиране на софт. архитектура</option>
                <option value="mysql11">Построяване на итерациите. </option>
                <option value="mysql12">ExamPreparation</option>

            </select>
        </div>
    )
}
