import './App.css';
import { InputField } from './components/InputField.js';
import { useState, createContext } from 'react';
import { TodoList } from './components/TodoList';

export const listContext = createContext();

function App() {

  const [list, setList] = useState([]);

  return (
    <listContext.Provider value={{ list, setList }}>
      <div className="App">
        <header className="App-header">
          <InputField onSubmit={value => setList([...list, { name:  value , state: false }])} />
          <TodoList list={list} />
        </header>
      </div>
    </listContext.Provider>
  );
}

export default App;