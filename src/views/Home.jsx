import { useNavigate } from 'react-router-dom'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { useState } from 'react'
import { FaPinterestP } from 'react-icons/fa'
import { GiFullPizza } from 'react-icons/gi'
import { IoLogoYoutube } from 'react-icons/io'
import '../css/home.css'

const Home = () => {

    const [changing, setChanging] = useState(false)
    const Navigate = useNavigate()

    const click = () => {
        setChanging(true)
        setTimeout(() => Navigate('/PizzaCanvas'), 1200)
    }

    return (
        <div className='mainHome'>

            {
                changing &&
                <>
                    <span className='column' style={{ '--i': 0 }}></span>
                    <span className='column' style={{ '--i': 1 }}></span>
                    <span className='column' style={{ '--i': 2 }}></span>
                    <span className='column' style={{ '--i': 3 }}></span>
                </>
            }

            <h1>Pizzería Mamma mía</h1>
            <p>Especialistas en Pizzas Gourmet desde 1940, en el centro de Rancagua</p>
            <GiFullPizza className='pizzaIcon' />
            <div className="icons">
                <BsFacebook className='icon' />
                <BsTwitter className='icon' />
                <BsInstagram className='icon' />
                <IoLogoYoutube className='icon' />
                <FaPinterestP className='icon' />
            </div>
            <button onClick={click}>Busca tu Pizza</button>
        </div>
    )
}

export default Home
