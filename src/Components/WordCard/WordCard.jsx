import { useState, useEffect } from 'react';
import './WordCard.scss'

export default function WordCard({ english, transcription, theme, russian, slideIndex }) {
    const [isVisible, setVisible] = useState(false);

    function handleShow() {
        setVisible(true)
    }

    useEffect(() => {
        setVisible(false);
    }, [slideIndex])


    return (
        <div key={slideIndex} className="word-card">
            <h3>{english}</h3>
            <p>Транскрипция: {transcription}</p>
            <div>
                {!isVisible ? (
                    <button className="card-btn" onClick={handleShow}>Проверить</button>
                ) : (
                    <p>Перевод: {russian}</p>
                )}
            </div>
        </div>
    );
}
