// import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class Tarefas extends React.Component {
  render () {
    return (
      <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
    );
  }
}

function App() {
  return (
    <Tarefas />
  );
}

export default App;
