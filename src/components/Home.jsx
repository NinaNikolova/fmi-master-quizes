import { Link } from 'react-router-dom';
import './Home.module.css'; // Import your CSS file

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Software Technologies Quiz App</h1>
            <nav className="home-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">Quiz</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz1">Quiz 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">Quiz 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
