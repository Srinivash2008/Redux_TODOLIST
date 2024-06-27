import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import TodoList from './components/TodoList_View';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex' }}>
          <Link to="/">Counter</Link>
          <Link style={{ marginLeft: "10px" }} to="/todos">Todo List</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;