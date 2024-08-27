import { useState } from "react"
import './profile.css'

const Profile = () => {

    const [inputName, setInputName] = useState('')
    const [name, setName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [age, setAge] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [description, setDescription] = useState('')

    function sendData(e) {
        e.preventDefault()
        setName(inputName)
        setAge(inputAge)
        setDescription(inputDescription)
    }

    return (
        <>
            <h2>Profile</h2>

            <form>
                <label >Name</label>
                <input type="text" 
                placeholder="Name"
                required
                value={inputName}
                onChange={(e) => {
                    setInputName(e.target.value)
                }}/>
                
                <label >Age</label>
                <input type="text" 
                required
                placeholder="Age"
                value={inputAge}
                onChange={(e) => {
                    setInputAge(e.target.value)
                }}/>

                <label >Description</label>
                <textarea placeholder="Description"
                value={inputDescription}
                onChange={(e) => {
                    setInputDescription(e.target.value)
                }}/>

                <button type="submit" onClick={sendData}>Send Data</button>

            </form>

            {!name && !description && !age &&
            <>
                <p>Name: Invitado</p>
                <p>Age: No disponible</p>
                <p>Description: No disponible</p>
            </>
            }

            {!description && name && age &&
            <>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Description: No disponible</p>
            </>
            }       


            {name && description && age &&
            <>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Description: {description}</p>
            </>
            }
        </>
    )
}

export default Profile;