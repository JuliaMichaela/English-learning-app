import TableRow from '../../components/TableRow/TableRow'


export default function TablePage({ upd }) {
    const { words } = upd;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Topic</th>
                        <th>Translation</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, i) => (
                        <TableRow
                            key={i}
                            engVersion={word.english}
                            rusVersion={word.russian}
                            topic={word.theme}
                            transcription={word.transcription}
                            id={word.id}
                        ></TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
