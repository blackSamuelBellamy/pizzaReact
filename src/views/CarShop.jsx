import { useContext } from "react"
import { DataContext } from "../hooks/DataContext"
import { Link } from 'react-router-dom'
import '../css/carrito.css'

const CarShop = () => {

    const { carrito, setCarrito, setTotal } = useContext(DataContext)
    const result = {}
    carrito.map(pizza => pizza.name)
        .map(el => (result[el] = result[el] + 1 || 1))


    const reset = () => {
        setCarrito([])
        setTotal(0)
    }

    return (
        <div className='carrito'>
            <h2>Total de pizzas: {carrito.length}</h2>
            <div className='pizzaBox'>
                <div className='pizzaName' >
                    {
                        Object.keys(result).map((pizza, index) =>
                        (
                            <div className="boxName" key={index}>
                                <p>{pizza}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='cantidad'>

                    {Object.values(result).map((cantidad, index) =>
                        <p key={index}>{cantidad}</p>)
                    }

                </div>
            </div>

            <div className="carritoButtons">
                <Link to='/PizzaCanvas'><button className={carrito.length === 0 ? 'volverC solo': 'volverC'}>
                Volver</button></Link>
                { carrito.length > 0 && <button className='vaciar'>Comprar</button>}
                { carrito.length > 0 && <button onClick={reset}>Vaciar Carrito</button>}
            </div>
        </div>
    )                  

}
export default CarShop
