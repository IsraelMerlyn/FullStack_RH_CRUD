import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleado from "./empleados/ListadoEmpleado";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";

function App() {
  return (
    <>
      <div className="container  ">    

        <BrowserRouter>
             <Navegacion/>
          <Routes>

            <Route exact  path="/" element={ <ListadoEmpleado/>}/>
            <Route exact  path="/agregar" element={ <AgregarEmpleado/>}/>
         
          </Routes>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;
