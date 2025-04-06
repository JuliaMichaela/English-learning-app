import { Link } from "react-router-dom";
import style from '../HomePage/HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={style.container}>
            <h1>Learning English Words</h1>
            <p>Приложение для изучения иностранного языка и расширения словарного запаса.</p>
            <Link to="/game">Старт</Link>
        </div>
    )
}
