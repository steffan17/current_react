import './App.css';
import React, { useState } from 'react';
//import FormApp from './components/formApp';
import ShowTestTable from './components/showTestTable';
import ShowTable from './components/showTable';
// Simport ShowTables from './components/showTables';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = (tableName) => {
    fetch(`https://apollo.mguard.pl/api/gettable?tableName=${tableName}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching dataOE:', error));
  };

  return (
    <div className="App">
      
      {/* <FormApp />      */}
      <ShowTestTable fetchData={fetchData}/>
      <ShowTable data={data} />
      {/* <ShowTables /> */}
      
    </div>
  );
}
 

export default App;
