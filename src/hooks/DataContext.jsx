import { useState, createContext } from "react"
import Pizzas from '../pizzas.json'

export const DataContext = createContext()

export const States = ({ children }) => {
    const [pizzas, setPizzas] = useState(Pizzas)
    const [verPizza, setVerPizza] = useState({})
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [totalCantidad, setTotalCantidad] = useState(0)
   

    const datas = {pizzas, setPizzas, 
    verPizza, setVerPizza, carrito, setCarrito, total, setTotal, totalCantidad,
    setTotalCantidad}

    return(
        <DataContext.Provider value= {datas}>
            { children }
        </DataContext.Provider>
    )
}
