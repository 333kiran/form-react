import React from 'react';
import CreateRecord from './components/createRecord';
import Records from './components/allRecords';
import ViewRecord from './components/readRecord';
import EditRecord from './components/updateRecord';

import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route exact path ="/" element={<CreateRecord/>}/>
      <Route exact path ="/records" element={<Records/>}/>
      <Route exact path ="/view/:id" element={<ViewRecord/>}/>
      <Route exact path ="/edit/:id" element={<EditRecord/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
