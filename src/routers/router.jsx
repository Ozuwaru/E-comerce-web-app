import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([//aqui creamos el router 
    {//creamos una ruta con el url '/'
      path: "/",
      element: <App/>,//todos los elementos serán cargados dentro del componente App
      children: [//dentro de la ruta de app puedo tener multiples sub rutas con html diferentes 
        {
            path: "/",//para cargar componentes dentro de otros debo tener un OUTLET 
            //En esta vista se van a mostrar los productos, es la primera vista de la app para el cliente

            element: <h1>Home</h1>
        },
        {
            path: "/tiendas",
            //En esta vista se verán las tiendas más populares, y se cargarán las tiendas que el usuario haya ingresado
            element: <h1>Heome</h1>
        },
      ]
    },
    
  ]);


export default router;