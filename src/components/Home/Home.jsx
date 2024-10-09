import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Software Technologies Quiz App</h1>
            <nav className="home-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">Object-Oriented Modeling and Software</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">Модели на софтуерни системи</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
