import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleado from "./empleados/ListadoEmpleado";
import Navegacion from "./plantilla/Navegacion";

function App() {
  return (
    <>
      <div className="container  ">    

        <BrowserRouter>
             <Navegacion/>
          <Routes>

            <Route exact  path="/" element={ <ListadoEmpleado/>}/>
          </Routes>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;
