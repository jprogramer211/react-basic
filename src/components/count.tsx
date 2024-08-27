import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState(0)

    function add () {
        setCount(count + 1)
    }

    function remove() {
        setCount(count - 1)

        if (count === 0) setCount(0)
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={remove}>Quitar</button>
            <button onClick={add}>Añadir</button>
        </>
    )
}

export default Count