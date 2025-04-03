import { useState } from 'react';
import WordCard from "../WordCard/WordCard";
import './WordList.scss'

export default function WordList({ words }) {
    const [countSlider, setCountSlider] = useState(0);

    function prevSlider() {
        if (countSlider === 0) {
            setCountSlider(words.lenght - 1);
            return
        }
        setCountSlider((prevSlider) => prevSlider - 1);
    }

    function nextSlider() {
        if (countSlider >= words.lenght - 1) {
            setCountSlider(0);
            return
        }
        setCountSlider((prevSlider) => prevSlider + 1);
    }


    return (
        <div className="container-wordList">

            <button className="wordList-btn" onClick={prevSlider}>Prev</button>

            <WordCard {...words[countSlider]} slideIndex={countSlider} />

            <button className="wordList-btn" onClick={nextSlider}>Next</button>
        </div>
    );
}