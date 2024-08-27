import { useState } from "react"

const TextEntry = () => {

    const [text, setText] = useState('')

    return (
        <>
            <h1>Tetx Entry</h1>
            <input type="text" placeholder="Text" value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <p>{text}</p>
            <button onClick={() => {
                setText('')
            }}>Borrar</button>
        </>
    )
}

export default TextEntry;