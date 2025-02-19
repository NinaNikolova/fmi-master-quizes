import { Link } from 'react-router-dom';
import { IoGameController } from "react-icons/io5";
import './Home.module.scss';
import {quizLinks} from './Links.js'


export default function Home() {
    return (
        <div className="home-ontainer">
            <h1 className="home-title">
                <div>Welcome</div> to the Software Technologies Quiz App
            </h1>
            <nav className="home-nav">
                <ul className="navList">
                    {quizLinks.map(({ path, imgSrc, alt, text }) => (
                        <li key={path} className="nav-item">
                            <Link className="nav-link" to={path}>
                                <article className="changing-color">
                                    <img src={imgSrc} alt={alt} className="nav-icon" /> {text}
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="container-hang">
                    <Link to="https://hangman-software-technologies.vercel.app/">
                        <IoGameController className="hangman" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}