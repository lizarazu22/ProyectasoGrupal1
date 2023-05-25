const Card = ({nombre,fecha }) => {
    return (
      <div className="bg-white shadow-lg rounded-2xl py-5  lg:w-1/3 mx-10 my-10">
        <h2 className="text-stone-500 text-3xl text-center font-bold">
          Gasto
        </h2>
        <div className="flex flex-row">
        <div className="basis-1/2 p-5">
        </div>
        <div className="basis-1/2 p-5">
        <p className="font-semibold text-gray-500 mt-5">
            <span className="font-bold text-lime-700 text-lg">
              Monto:
            </span>{" "}
            {nombre}
          </p>
          <p className="font-semibold text-gray-500 mt-5">
            <span className="font-bold text-lime-700 text-lg">
              Fecha:
            </span>{" "}
            {fecha}
          </p>
        </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  