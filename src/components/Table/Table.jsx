import './Table.css'
import data from '../../assets/data.json'
import TableRow from '../TableRow/TableRow'

export default function Table() {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Кпопки</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <TableRow
                                isEdited={false}
                                key={item.id}
                                engVersion={item.english}
                                rusVersion={item.russian}
                                transcription={item.transcription}>
                            </TableRow>)}
                </tbody>
            </table>
        </div>
    )
}
