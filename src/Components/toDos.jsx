import { useState } from "react"
import ToDoDetail from "./toDoDetail"

export default function List() {

    const [input, setInput] = useState('')
    const [todos, setToDos] = useState([])

    const handleInput = (e) => {
        e.preventDefault()

        setToDos(
            prev => [...prev, input]
        )
    }
    console.log(todos);

    return (
        <div>
            <form>
                <input type="text" onChange={(ev) => setInput(ev.target.value)} />
                <button onClick={handleInput}>+</button>
            </form>
            <section>
                {todos.map((dos, k) =>
                    <div key={k} >
                        <ToDoDetail name={dos} />
                    </div>
                )
                }
            </section >
        </div >
    )
}