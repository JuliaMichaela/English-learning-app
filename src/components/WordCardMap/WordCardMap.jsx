import React, { useState } from 'react'
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


    import './WordCard.css'
    import React, { useState } from "react";

    export default function WordCard(props) {

        const [isVisible, setVisible] = useState(false);
        // const [index, setIndex] = useState(0);

        const handleShow = () => {
            setVisible(!isVisible);
            props.addCount();
        };

        // const handleIndex = () => {
        //     setIndex(currenIndex => currenIndex + 1);
        // }
        // const mainRef = useRef(null);
        // useEffect(() => {
        //     mainRef.current.focus();
        // }, []);

        return (
            <div className="card animation">
                <div className="word">{props.engVersion}</div>
                <div className="transcription">{props.transcription}</div>
                <button className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow} >
                    {isVisible ? props.rusVersion : "Проверить"}
                </button>
            </div >
        );
    };

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