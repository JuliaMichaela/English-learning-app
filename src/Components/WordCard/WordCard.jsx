import './WordCard.scss'

export default function WordCard({ word }) {
    return (

        <div className="word-card">
            <h3>{word.english}</h3>
            <p>Транскрипция: {word.transcription}</p>
            <p>Перевод: {word.russian}</p>
            <p>Тема: {word.theme}</p>
        </div>
    );
}
