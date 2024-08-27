import { useState } from "react"
import './greeting.css'

const Greeting = () => {

    const [inputName, setInputName] = useState('')
    const [name, setName] = useState('')

    return (
        <>
            <h2>Greet</h2>
            <input type="text" 
            value={inputName}
            placeholder="Name"
            onChange={(e) => {
                setInputName(e.target.value)
            }}
            required
            />
            <button onClick={() => {
                setName(inputName)
            }}>Greet</button>

            {!name && <p>Hello, Invitado</p>}
            {name && <p>Hello, {name}</p>}
        </>
    )
}

export default Greeting