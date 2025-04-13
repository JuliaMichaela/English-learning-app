import { useState, useEffect } from "react";
import style from './TableRow.module.scss'

export default function TableRow({ english, transcription, theme, russian, id, handleDelete, handleEdit }) {

    const [edit, setEdit] = useState(false);
    const [valueEnglish, setValueEnglish] = useState("");
    const [valueTranscription, setValueTranscription] = useState("");
    const [valueTheme, setValueTheme] = useState("");
    const [valueRussian, setValueRussian] = useState("");

    useEffect(() => {
        setValueEnglish(english);
        setValueTranscription(transcription);
        setValueTheme(theme);
        setValueRussian(russian);
    }, [english, transcription, theme, russian])


    return (
        <div className={style.container__row}>
            <div className={style.wrapper__content}>
                {edit ? (
                    <div className={style.editor}>
                        <input type="text" value={valueEnglish} onChange={(e) => setValueEnglish(e.target.value)} />
                        <input type="text" value={valueTranscription} onChange={(e) => setValueTranscription(e.target.value)} />
                        <input type="text" value={valueTheme} onChange={(e) => setValueTheme(e.target.value)} />
                        <input type="text" value={valueRussian} onChange={(e) => setValueRussian(e.target.value)} />
                    </div>
                ) : (
                    <div className={style.content}>
                        <div>{english}</div>
                        <div>{transcription}</div>
                        <div>{theme}</div>
                        <div>{russian}</div>
                    </div>
                )}

                <div className={style.wrapper__button}>
                    {!edit ? (
                        <div>
                            <button onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>

                    ) : (
                        <div>
                            <button className={style.save}
                                onClick={() => {
                                    handleEdit(id, valueEnglish, valueTranscription, valueTheme, valueRussian);
                                    setEdit(false);
                                }}>Save</button>{" "}
                            <button
                                onClick={() => {
                                    setEdit(false)
                                }}>Cancel</button>{" "}
                        </div>
                    )}
                </div>
            </div>
        </div>
        // <tr>
        //     <td>{props.engVersion}</td>
        //     <td>{props.transcription}</td>
        //     <td>{props.topic}</td>
        //     <td>{props.rusVersion}</td>
        //     <td>
        //         <button>Edit</button>
        //         <button>Delete</button>
        //     </td>
        // </tr>
    )
}
