import './WordCard.scss'

export default function WordCard({ word }) {
    return (

        <div className="word-card">
            <h3>{word.word}</h3>
            <p>Транскрипция: {word.transcription}</p>
            <p>Перевод: {word.translation}</p>
            <p>Тема: {word.topic}</p>
        </div>
    );
}
