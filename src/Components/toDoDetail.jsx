import { useState } from "react"

export default function ToDoDetail(props) {
    const [tododone, setToDoDone] = useState(false)

    const handleToggle = () => {
        setToDoDone(prev => !prev)
    }

    return (
        <div onClick={handleToggle} className={tododone ? 'toDo done' : 'toDo'} >
            <p>{props.name}</p>
        </div>
    )
}