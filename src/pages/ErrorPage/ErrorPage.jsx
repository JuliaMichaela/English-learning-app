import { Link } from "react-router-dom";
import style from './ErrorPage.module.scss';
import foxError from '../../assets/images/foxError.png';

export default function ErrorPage() {
    return (
        <div className={style.error}>
            <div className={style.content}>
                <img className={style.fox__img} src={foxError} alt={foxError} />
                <p>Ой! Такой страницы не существует.</p>
                <Link to="/" className={style.button}>Вернуться на главную</Link>
            </div>
        </div>
    )
}
