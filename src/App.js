import { useState } from 'react';
import Details from './components/Details';
import List from './components/List';
import Context from './context/Context';
import useRequest from './hooks/useRequest';

import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const [details, setDetails] = useState();

  useRequest(`users.json`, setList, []);
  useRequest(`${id}.json`, setDetails, [id]);

  return (
    <div className="App">
      <Context.Provider value={{list: list, id: id, setId: setId, details: details}}>
        <List />
        <Details />
      </Context.Provider>
    </div>
  );
}

export default App;
