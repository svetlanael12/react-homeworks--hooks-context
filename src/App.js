import useJsonFetch from './hooks/useJsonFetch';

import './App.css';
import Loading from './components/Loading';
import Data from './components/Data';
import Error from './components/Error';

function App() {
  const { data, error, loading } = useJsonFetch('http://localhost:7070/loading', 'GET');

  return (
    <div className="App">
      {
        loading ?
        <Loading /> :
        <Data />
      }
      <Data />
      <Error />
    </div>
  );
}

export default App;
