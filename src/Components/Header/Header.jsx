import logo from '../../assets/images/logo-fox.png'
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={logo} alt={logo} />
            <h1 className={style.header__title}>Learning English Words</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Game</a>
                <a href="#">Vocabulary</a>
            </nav>
        </header>
    )
}
