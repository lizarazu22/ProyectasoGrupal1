import { useState } from 'react'
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import './App.css'
import Tareas from './components/Tareas'
import Modal from './components/Modal'

function App() {
  const [tarea, setTarea]=useState([]);
  const [newGasto, setNewGasto] = useState(false);
  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      <div>
        <Tareas tarea={tarea} setTarea={setTarea}></Tareas>
      </div>
      <div className="fixed bottom-5 right-5">
        <img
          className="w-10 hover:cursor-pointer"
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewGasto(true);
          }}
        />
      </div>
      {
        newGasto && (
          <Modal tarea={tarea}
          setTarea={setTarea}
            setNewGasto={setNewGasto}
          />
        )
      }
    </div>
  )
}

export default App
