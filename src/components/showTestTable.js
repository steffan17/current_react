import React, {useState, useEffect} from "react"





const ShowTestTable = ({fetchData}) => {
    const [content, setContent] = useState(<div>To jest nowe miejsce</div>);
  
    useEffect(() => {
      console.log('useEffect is running');
      fetch('http://192.168.0.207:3033/api/getTables')
        .then(res => {
          console.log('response:', res);
          return res.json();
        })
        .then(res => {
          console.log('data:', res);
          setContent(contentFunction(res));
        })
        .catch(error => console.error('error:', error));
    }, []);
  
    const buttonClick = (tableName) => {
        console.log(`Clicked ${tableName}`);
        fetchData(tableName);
    };

    const contentFunction = (data)=>{
        return (
        <>
        <ul style={{listStyleType:"none"}} >
            {data.map((data, i)=>{
                return <li key={i}><button onClick={()=>buttonClick(data.name)}>{data.name}</button></li>
            })}
        </ul>
        </>)
    }

    return (
      <>
        {content}
      </>
    );
  };

export default ShowTestTable