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