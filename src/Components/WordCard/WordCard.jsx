import { useState, useEffect } from 'react';
import style from './WordCard.module.scss'

export default function WordCard({ english, transcription, theme, russian, slideIndex }) {
    const [isVisible, setVisible] = useState(false);

    function handleShow() {
        setVisible(true)
    }

    useEffect(() => {
        setVisible(false);
    }, [slideIndex])


    return (
        <div className={style.wordcard} key={slideIndex}>
            <h3>{english}</h3>
            <p className={style.transcription}>Транскрипция: {transcription}</p>
            <p className={style.theme}>{theme}</p>
            <div>
                {!isVisible ? (
                    <button className={style.btn} onClick={handleShow}>Проверить</button>
                ) : (
                    <p className={style.translation}>{russian}</p>
                )}
            </div>
        </div>
    );
}
