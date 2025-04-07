import { Link } from "react-router-dom";
import foxHello from '../../assets/images/fox-hello.jpg';
import style from '../HomePage/HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={style.container__home}>
            <div className={style.content}>
                <img className={style.fox__img} src={foxHello} alt={foxHello} />
                {/* <h1>Learning English Words</h1> */}
                <p>Приложение для изучения английского языка и расширения словарного запаса</p>
                <Link to="/game" className={style.button}>Старт</Link>
            </div>
        </div>
    )
}
