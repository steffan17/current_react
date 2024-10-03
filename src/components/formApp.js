import React, {useState} from "react"

 function FormApp (){

    const {name, setName} = useState("")
    const {date, setDate} = useState("1999-01-01")

    const submit = e => {
        e.preventDefault();
        console.log(`wow ${e}`)}

        return(
            <>
        <form className="appForm" onSubmit={submit}>
            <input value={name} type="text" onChange={event => setName(event.target.value)} placeholder="Imię...." required />
            <input type="date" required />

            <button>Click</button>
        </form>
        </>
        )
    }

export default FormApp