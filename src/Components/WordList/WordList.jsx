import WordCard from "../WordCard/WordCard";

export default function WordList({ words }) {
    return (
        <div>
            <h2>Список слов</h2>
            {words.map((word) => (
                <WordCard key={word.id} word={word} />
            ))}
        </div>
    );
}