import TableRow from '../../components/TableRow/TableRow';
import style from './TablePage.module.scss';


export default function TablePage({ upd }) {
    const { words, setWords } = upd;

    const handleDelete = (id) => {
        setWords(words.filter((word) => word.id !== id));
    };

    const handleEdit = (id, english, transcription, theme, russian) => {
        setWords(words.map((word) => {
            if (word.id === id) {
                word.english = english;
                word.transcription = transcription;
                word.theme = theme;
                word.russian = russian;
            }
            return word;
        }));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container__table}>
                {words.map((word) =>
                    <TableRow {...word} key={word.id} handleDelete={handleDelete} handleEdit={handleEdit} />)}
            </div>
        </div>
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Word</th>
        //                 <th>Transcription</th>
        //                 <th>Topic</th>
        //                 <th>Translation</th>
        //                 <th>Buttons</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {words.map((word, i) => (
        //                 <TableRow
        //                     key={i}
        //                     engVersion={word.english}
        //                     rusVersion={word.russian}
        //                     topic={word.theme}
        //                     transcription={word.transcription}
        //                     id={word.id}
        //                 ></TableRow>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    )
}
