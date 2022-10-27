import { useContext, useEffect, useState } from "react"
import { DataContext } from "../hooks/DataContext"
import { Link, useNavigate } from 'react-router-dom'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import Video from '../sources/Pizza.mp4'
import Swal from 'sweetalert2'
import '../css/carrito.css'

const CarShop = () => {

    const { carrito, setCarrito, setTotal, setTotalCantidad } = useContext(DataContext)
    const [cantidad, setCantidad] = useState([])
    const Navigate = useNavigate()

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

        if (Object.values(cantidad)[ind] > 0) {

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
        else {
            return
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

    const comprar = () => {

        if(carrito.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'El carrito está vacío',
                text: 'Selecciona primero todas las Pizzas que desees.'

            })

        } else {
            Swal.fire({
                icon: 'success',
                title: 'Felicidades!',
                text: 'Por esta vez tu compra será gratis! No olvides visitarnos nuevamente',
                timer: 3000


            })

            setCarrito([])
            setTotal(0)
            setTotalCantidad(0)
            
            setTimeout(() => {
                Navigate('/Home')
            }, 3000)
        }
    }

    const fading = ind => {
        if (cantidad[Object.keys(cantidad)[ind]] === 0) return true
    }


    return (
        <div className='carrito'>
            <div className="videoCarritoContainer">
                <video src={Video} muted loop autoPlay={true} />
            </div>
            <div className="carritoTitle">
                <h2>Total de pizzas: </h2><h2 className="titleQuantity">
                    {carrito.length}
                </h2>
            </div>
            <div className={carrito.length === 0 ? 'pizzaBox zeroPizzas' : 'pizzaBox'}>
                <div className='pizzaName' >
                    {

                        Object.keys(cantidad).map((pizza, index) =>
                        (
                            <div className={fading(index) ? 'boxName leftFading' : 'boxName'}
                                key={index}>
                                <p>{pizza}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='cantidad'>

                    {
                        Object.values(cantidad).map((cantidad, index) =>
                            <div key={index} className={fading(index) ?
                                'boxCantidad rightFading' : 'boxCantidad'}>

                                <div className="iconOperatorBox">
                                    <CgMathMinus onClick={() => restar(index)}
                                        className='menos' />
                                </div>
                                <p>
                                    {cantidad}
                                </p>
                                <div className="iconOperatorBox">
                                    <CgMathPlus onClick={() => sumar(index)}
                                        className='mas' />
                                </div>
                            </div>)
                    }

                </div>
            </div>

            <div className="carritoButtons">
                <Link to='/PizzaCanvas'><button className={carrito.length === 0 ? 'volverC solo' : 'volverC'}>
                    Volver</button></Link>
                {carrito.length > 0 && <button className='vaciar' 
                onClick={comprar}>Comprar</button>}
                {carrito.length > 0 && <button onClick={reset}>Vaciar Carrito</button>}
            </div>
        </div>)

}


export default CarShop
