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
                            <img src="/uml.png" alt="uml" className="nav-icon" />
                            <span > OO Modeling and Software</span>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">
                            <img src="/sm.png" alt="Quiz Icon" className="nav-icon" />
                            <span >  Модели на софтуерни системи </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
