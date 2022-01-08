// import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// const defaultItem = [{text: 'Cortar cebolla', completed: true},
//                 {text: 'Tomar el curso de introducción a react', completed:false},
//                 {text: 'completar el curso profesional de react', completed: false}];



function App(props) {

  return (

    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;
