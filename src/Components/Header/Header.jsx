import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/images/logo-fox.png'

export default function Header() {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={logo} alt={logo} />
            <h1 className={style.header__title}>Learning English Words</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/game'>Game</NavLink>
                <NavLink to='/table'>Vocabulary</NavLink>
            </nav>
        </header>
    )
}
