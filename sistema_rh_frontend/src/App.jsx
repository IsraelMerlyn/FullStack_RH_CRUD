import ListadoEmpleado from "./empleados/ListadoEmpleado";
import Navegacion from "./plantilla/Navegacion";

function App() {
  return (
    <>
      <div className="container text-center ">
        <Navegacion />
        <ListadoEmpleado />
      </div>
    </>
  );
}

export default App;
