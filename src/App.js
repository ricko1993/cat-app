import React, {useState} from 'react';
import Header from './components/header';
import Input from './components/input';
import catData from './data';
import Cards from './containers/Cards';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const changeHandler = e =>{
    setTitle(e.target.value)
  }

  const catFilter = catData.filter(cat => cat.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
  return (
    <div className="App">
      <Header/>
      <Input value={title} changed={changeHandler}/>
      <Cards catData={catFilter}/>
    </div>
  );
}

export default App;
