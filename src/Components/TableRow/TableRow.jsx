

export default function TableRow(props) {
    return (
        <>
            <tr>
                <td>{props.engVersion}</td>
                <td>{props.transcription}</td>
                <td>{props.topic}</td>
                <td>{props.rusVersion}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </>
    )
}
