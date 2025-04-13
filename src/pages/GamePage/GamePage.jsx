import { useState } from 'react';
import WordCard from "../../components/WordCard/WordCard";
import style from './GamePage.module.scss';

export default function GamePage({ upd }) {
    const { words } = upd;
    const [countSlider, setCountSlider] = useState(0);
    const [learnedCount, setLearnedCount] = useState(0);

    const handleWordRevealed = () => {
        setLearnedCount((prev) => prev + 1);
    };

    function prevSlider() {
        if (countSlider === 0) {
            setCountSlider(words.length - 1);
            return
        }
        setCountSlider((prevSlider) => prevSlider - 1);
    }

    function nextSlider() {
        if (countSlider === words.length - 1) {
            setCountSlider(0);
            return
        }
        setCountSlider((prevSlider) => prevSlider + 1);
    }


    return (
        <div className={style.game} >

            <button className={style.game__btn} onClick={prevSlider}>Prev</button>

            <WordCard
                {...words[countSlider]}
                slideIndex={countSlider}
                onReveal={handleWordRevealed}
            />

            <button className={style.game__btn} onClick={nextSlider}>Next</button>

            <p className={style.game__counter}>
                Изучено слов: {learnedCount}
            </p>
        </div >
    );
}
