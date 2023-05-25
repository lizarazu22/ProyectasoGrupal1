import Card from "./Card";
const Tareas = ({tarea, setTarea}) => {
    return (
        <div>
           {tarea.map((card, index) => (
        <Card
          nombre={card.nombre}
          fecha={card.fecha}
        />
      ))}
        </div>
    )
}
export default Tareas;