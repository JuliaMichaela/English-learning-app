import { Link } from "react-router-dom";
import style from './ErrorPage.module.scss';
import foxError from '../../assets/images/foxError.png'

export default function ErrorPage() {
    return (
        <div className={style.error}>
            <img className={style.fox__img} src={foxError} alt={foxError} />
            <div className={style.content}>
                <h1>404</h1>
                <p>Ой! Такой страницы не существует.</p>
                <Link to="/" className={style.button}>Вернуться на главную</Link>
            </div>
        </div>
    )
}
