import React from 'react'

export default function TableRow() {
    return (
        <tr>
            <td>{isError.engVersion ? <div className="errMsg">{isError.engVersion}</div> : ""}
                {isEdited ? <input type="text" className={state.engVersion && !isError.engVersion ? "" : "noValid"} value={state.engVersion} onChange={handleChange} name="engVersion" /> : state.engVersion}</td>
            <td>{isError.transcription ? <div className="errMsg">{isError.transcription}</div> : ''}
                {isEdited ? <input type="text" className={state.transcription && !isError.transcription ? "" : "noValid"} value={state.transcription} onChange={handleChange} name="transcription" /> : state.transcription}</td>
            <td>{isError.rusVersion ? <div className="errMsg">{isError.rusVersion}</div> : ''}
                {isEdited ? <input type="text" className={state.rusVersion && !isError.rusVersion ? "" : "noValid"} value={state.rusVersion} onChange={handleChange} name="rusVersion" /> : state.rusVersion}</td>
            <td>
                {isEdited ? <button className="button btnSave" onClick={saveChange} disabled={!isValid}></button>
                    : <button className="button btnEdit" onClick={editChange}></button>}
                <button className="button btnDelete" onClick={eraseChange}></button>
            </td>
        </tr>
    )
}
