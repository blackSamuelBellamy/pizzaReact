import { useContext, useEffect, useState } from "react"
import { DataContext } from "../hooks/DataContext"
import { Link } from 'react-router-dom'
import '../css/carrito.css'

const CarShop = () => {

    const { carrito, setCarrito, setTotal, setTotalCantidad } = useContext(DataContext)
    const [cantidad, setCantidad] = useState([])
    let result = {}
    carrito.map(pizza => pizza.name)
        .map(el => (result[el] = result[el] + 1 || 1))

    useEffect(() => {
        setCantidad(result)
        // eslint-disable-next-line
    }, [])

    const reset = () => {
        setCarrito([])
        setTotal(0)

    }


    const restar = (ind) => {

        setCantidad({
            ...cantidad,
            [Object.keys(cantidad)[ind]]: Object.values(cantidad)[ind] - 1
        })

        const carritoCopy = carrito
        const deleteItem = carritoCopy.findIndex(property => property.name ===
            Object.keys(cantidad)[ind])
        carritoCopy.splice(deleteItem, 1)
        setCarrito(carritoCopy)

        if (carrito.length > 0) {
            setTotalCantidad(carrito.length)
            const precioTotal = carrito.map(pizza => pizza.price)
                .reduce((a, b) => a + b)

            setTotal(precioTotal)
        } else {
            setTotal(0)
        }

    }

    const sumar = ind => {
        setCantidad({
            ...cantidad,
            [Object.keys(cantidad)[ind]]: Object.values(cantidad)[ind] + 1
        })

        const copyCarrito = carrito
        const cloningPizza = copyCarrito.findIndex(property => property.name ===
            Object.keys(cantidad)[ind])
        copyCarrito.push(copyCarrito[cloningPizza])
        setCarrito(copyCarrito)
        setTotalCantidad(carrito.length)
        const totalPrecio = carrito.map(pizza => pizza.price)
        .reduce((a, b) => a + b)
        setTotal(totalPrecio)
    }

    const fading = ind => {
        if (cantidad[Object.keys(cantidad)[ind]] === 0) return true
    }


    return (
        <div className='carrito'>
            <h2>Total de pizzas: {carrito.length}</h2>
            <div className={carrito.length === 0 ? 'pizzaBox zeroPizzas': 'pizzaBox'}>
                <div className='pizzaName' >
                    {

                        Object.keys(cantidad).map((pizza, index) =>
                        (
                            <div className={fading(index) ? 'boxName leftFading' : 'boxName'}
                                key={index}>

                                <button onClick={() => restar(index)}
                                    disabled={fading(index)}
                                >restar
                                </button>

                                <p>{pizza}</p>
                                <button onClick={() => sumar(index)}>Sumar</button>
                            </div>
                        ))
                    }
                </div>
                <div className='cantidad'>

                    {
                        Object.values(cantidad).map((cantidad, index) =>
                            <p key={index}
                                className={fading(index) && 'rightFading'}>
                                {cantidad}
                            </p>)
                    }

                </div>
            </div>

            <div className="carritoButtons">
                <Link to='/PizzaCanvas'><button className={carrito.length === 0 ? 'volverC solo' : 'volverC'}>
                    Volver</button></Link>
                {carrito.length > 0 && <button className='vaciar'>Comprar</button>}
                {carrito.length > 0 && <button onClick={reset}>Vaciar Carrito</button>}
            </div>
        </div>)

}


export default CarShop
