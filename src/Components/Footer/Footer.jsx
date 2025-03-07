import style from './Footer.module.scss';
import email from '../../assets/images/email.png';
import telegram from '../../assets/images/telegram.png';
import logoFox from '../../assets/images/logo-fox-left.png'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer__contact}>
                <p>Contacts</p>
                <div>
                    <div>
                        <a href="mailto:juliaperez@yandex.ru">
                            <img className={style.footer__icon} src={email} alt={email} />
                        </a>
                        <a href="https://t.me/JuliaMichaela">
                            <img className={style.footer__icon} src={telegram} alt={telegram} />
                        </a>
                    </div>
                </div>
            </div>
            <p>© 2025 Foxcards App</p>
            <img className={style.footer__logo} src={logoFox} alt={logoFox} />

        </footer>
    )
}
