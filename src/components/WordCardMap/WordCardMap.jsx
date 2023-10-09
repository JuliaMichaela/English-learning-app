import React from 'react'
import WordCard from '../WordCard/Wordcard'

const WordCardMap = (props) => {

    const words = props.words;
    const [currentIndex, setIndex] = useState(props.position || 0);

    const handleNext = () => {
        if (currentIndex === words.length - 1) {
            setIndex(0);
        } else {
            setIndex(currentIndex + 1)
        };
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIndex(currentIndex - 1)
        } else {
            setIndex(words.length - 1)
        };
    }

    return (
        <div className="card-container">
            <button className="button btnPrev" onClick={handlePrev}>prev</button>
            <WordCard
                isEdited={false}
                key={words[currentIndex].id}
                engVersion={words[currentIndex].english}
                rusVersion={words[currentIndex].russian}
                transcription={words[currentIndex].transcription}
            />
            <button className="button btnNext" onClick={handleNext}>next</button>
        </div>
    );
};

export default WordCardMap; 