import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../hooks/DataContext'
import { useContext } from 'react'
import { GiFullPizza } from 'react-icons/gi'
import '../css/pizza.css'

const Pizza = () => {

    const { pizza } = useParams()
    const { verPizza } = useContext(DataContext)
    
    return (
        <div className='choosenPizza'>
            <div className='wallpaperContainer'></div>
            <h2 className='pizzaTitle'>{pizza}</h2>
            <GiFullPizza className='choosenPizzaIcon'/>
            <div className='description'>
                <p><i>"{verPizza.desc}"</i></p>
            </div>
            <Link to='/PizzaCanvas' className='volver'>Volver</Link>
        </div>
    )
}

export default Pizza
