import React, {useState} from "react"

const renderTables = () =>{
    console.log(`getTables`)
    return(
    <div>ssss</div>)
}

const ShowTables = () => {
    const getTables = ()=> {setTables(renderTables)}
    
    const [tables, setTables] = useState(<div onClick={getTables}>aaa</div>)
    
    return(
        <>
        {tables}
        </>)
 
}

export default ShowTables;