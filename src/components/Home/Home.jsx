import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Software Technologies Quiz App</h1>
            <nav className="home-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">
                            <img src="/public/uml.png" alt="uml" className="nav-icon" />
                            <span > Object-Oriented Modeling and Software</span>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">
                            <img src="/public/sm.png" alt="Quiz Icon" className="nav-icon" />
                            <span >  Модели на софтуерни системи </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
