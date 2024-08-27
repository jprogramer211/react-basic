import { useState } from "react"

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
    id: ItemId,
    text: string
}

const INITIAL_ITEMS: Item[] = [
    {
    id: crypto.randomUUID(),
    text: "Hacer la compra"
    }
]

const ToDoList = () => {

    function submit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { elements } = e.currentTarget
        const input = elements.namedItem('note')
        const isInput = input instanceof HTMLInputElement

        if (!isInput || input === null) return

        const newNote: Item = {
            id: crypto.randomUUID(),
            text: input.value
        }

        setItems(prevItems => {
            return [...prevItems, newNote]
        })

        input.value = ''
    }

    const createRemoveItem = (id: ItemId) => () => {
        setItems(prevItems => {
            return prevItems.filter(currentItem => currentItem.id !== id)
        })
    } 

    const [items, setItems] = useState(INITIAL_ITEMS)

    return (
        <>
            <h1>ToDo List</h1>
            <form onSubmit={submit}>
                <input type="text"
                name="note"
                placeholder="Note"
                required/>
                <button>Add Note</button>
            </form>
            <ul>
                {
                    items.map(item => {
                        return  (
                            <>
                                <li key={item.id}>
                                {item.text}
                                </li>
                                <button onClick={createRemoveItem(item.id)}>Delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList;