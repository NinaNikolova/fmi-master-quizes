export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="quest1">Intro to Databases: Data Definition and Datatypes</option>
                <option value="quest2">Basic CRUD in quest Server</option>
                <option value="quest3">Built-in Functions</option>
                <option value="quest4">Data Aggregation</option>
                <option value="quest5">Table Relations</option>
                <option value="quest6">Joins, Subqueries and Indices</option>
                <option value="quest7">Database Programmability</option>
            </select>
        </div>
    )
}
