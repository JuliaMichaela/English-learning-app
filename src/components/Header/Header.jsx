import './Header.css'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt={"logo"} />
            <div className="headerText">Learning English Words</div>
            <nav className="navigator">
                <ul>
                    <li className="menu">Home</li>
                    <li className="menu">Game</li>
                </ul>
            </nav>
        </header>
    )
}
