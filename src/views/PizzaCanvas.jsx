import { DataContext } from "../hooks/DataContext"
import { useContext } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from "swiper"
import { useNavigate } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import '../css/pizzaCanvas.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const PizzaCanvas = () => {

    const { pizzas, carrito, setVerPizza,
        setCarrito, setTotal, setTotalCantidad } = useContext(DataContext)
    const Navigate = useNavigate()

    const adding = obj => {

        const test = carrito
        test.push(pizzas[obj])
        setCarrito(test)
        setTotalCantidad(carrito.length)
        const prices = carrito.map(a => a.price)
        const totalPrices = prices.reduce((a, b) => a + b)
        setTotal(totalPrices)
    }

    const choosenPizza = obj => {
        const clickedPizza = pizzas[obj]
        Navigate(`/PizzaCanvas/${clickedPizza.name}`)
        setVerPizza(clickedPizza)
        
    }

    return (
        <div className='pizzaContainer'>
            <div className="layer"></div>
            <div className='pizzaCanvas'>
                <div className="information">
                    <h2 className="direccion"> Calle Estado 234 Rancagua</h2>
                    <MdLocationOn className="locationIcon" />
                </div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 60,
                        stretch: 90,
                        depth: 300,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper swiperContainer"
                >
                    {
                        pizzas.map((pizz, index) => (
                            <SwiperSlide key={pizz.id} className='cardContainer'>
                                <div className='card'>
                                    <div className='imageContainer'>
                                        <img src={pizz.img} alt={`${pizz.name} pizza`} />
                                    </div>
                                    <div className="pizzaName"><h3>{pizz.name}</h3></div>
                                    <h4>{`$${pizz.price.toLocaleString('en-US')}`}</h4>
                                    <div className='ingredients'>
                                        {pizz.ingredients.map((ingredient, ind) => (
                                            <p key={ingredient + ind}>{ingredient},&nbsp;</p>
                                        ))}
                                    </div>
                                    <div className='buttons'>
                                        <button onClick={() => choosenPizza(index)}>Ver más</button>
                                        <button onClick={() => adding(index)}>Agregar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default PizzaCanvas