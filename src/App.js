import './App.css';
import { useEffect } from 'react';
import { axiosData } from './redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.data);

  console.log(store);

  useEffect(() => {
    dispatch(axiosData());
  }, []);

  return (
    <div className="App">
      {store &&
        store.map((item, index) => (
          <>
            <h1 key={index}>{item.name}</h1>
            <p>{item.main.temp}</p>
          </>
        ))}
    </div>
  );
}

export default App;
