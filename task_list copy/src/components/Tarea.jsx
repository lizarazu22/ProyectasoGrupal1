import { useState } from "react";
const Tarea = ({ tarea, setTarea, setNewGasto }) => {
    const [nombre, setNombre] = useState("");
const [fecha, setFecha] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const tareaA = [
            {
                nombre,
                fecha,
            },
        ];
        setTarea([...tarea, ...tareaA]);
        setNewGasto(false);
    };
    return (
        <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
            <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
                Agregar Tarea
            </h2>
            <form onSubmit={handleSubmit} className="px-5">
                <div className="campo">
                    <label className="label-form" htmlFor="nombre">
                        Nombre Tarea
                    </label>
                    <input
                        id="tarea"
                        type="text"
                        placeholder="Añade el Nombre"
                        value="tarea"
                        onChange={(e) => setNombre(e.target.value)}

                    />
                </div>

                <div className="fecha">
                    <label className="label-form" htmlFor="cantidad">
                        Cantidad
                    </label>

                    <input
                        id="fecha"
                        type="text"
                        placeholder="Añade La fecha"
                        value="fecha"
                        onChange={(e) => setFecha(e.target.value)}

                    />
                </div>

                <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    type="submit"
                    value={"Añadir Gasto"}
                />
            </form>
        </div>
    )
}
export default Tarea;