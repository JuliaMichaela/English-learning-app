import { useState } from 'react';
import WordCard from "../../components/WordCard/WordCard";
import style from './GamePage.module.scss';

export default function GamePage({ upd }) {
    const { words } = upd;
    const [countSlider, setCountSlider] = useState(0);

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

            <WordCard {...words[countSlider]} slideIndex={countSlider} />

            <button className={style.game__btn} onClick={nextSlider}>Next</button>
        </div >
    );
}
