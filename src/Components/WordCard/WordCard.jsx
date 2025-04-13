import { useState, useEffect, useRef } from 'react';
import style from './WordCard.module.scss'

export default function WordCard({ english, transcription, theme, russian, slideIndex, onReveal }) {

    const [isVisible, setVisible] = useState(false);
    const btnRef = useRef(null);

    function handleShow() {
        setVisible(true);
        onReveal();
    }

    useEffect(() => {
        setVisible(false);
    }, [slideIndex])

    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, [slideIndex]);


    return (
        <div className={style.wordcard} key={slideIndex}>
            <h3>{english}</h3>
            <p className={style.transcription}>Транскрипция: {transcription}</p>
            <p className={style.theme}>{theme}</p>
            <div>
                {!isVisible ? (
                    <button
                        ref={btnRef}
                        className={style.btn}
                        onClick={handleShow}>Проверить</button>
                ) : (
                    <p className={style.translation}>{russian}</p>
                )}
            </div>
        </div>
    );
}
