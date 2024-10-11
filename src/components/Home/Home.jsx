import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title"><div>Welcome</div> to the Software Technologies Quiz App</h1>
            <nav className="home-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">

                            <article className='changing-color'> <img src="/uml.png" alt="uml" className="nav-icon" /> OO Modeling and Software</article>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">

                            <article className='changing-color'>  <img src="/sm.png" alt="Quiz Icon" className="nav-icon" /> Модели на софтуерни системи </article>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
