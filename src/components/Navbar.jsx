import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import '../css/navbar.css'

const Navbar = () => {

    const { total, carrito } = useContext(DataContext)

    const noHover = () => {

        if (total === 0 && (
            !window.location.href.includes('Pizza') ||
            !window.location.href.includes('CarShop')

        )) {

            return true
        } else {

            return false
        }
    }



    return (
        <div className={total === 0 ? 'zero' : 'navBar'}>
            {!noHover() ?

                <Link to='/CarShop'>
                    <HiOutlineShoppingCart className={noHover() ? 'carShop noHover' : 'carShop'} />
                </Link> :
                <HiOutlineShoppingCart className={noHover() ? 'carShop noHover' : 'carShop'} />
            }

            {total !== 0 &&
                <>
                    {
                        !noHover() ?
                            <Link to='/CarShop'>
                                <span className='pop'>{carrito.length}</span>
                            </Link> :
                            <span className='pop'>{carrito.length}</span>
                    }
                    <p>Precio total:<span className='total'>{`$${total.toLocaleString('en-US')}`}</span></p>
                </>
            }
        </div>
    )
}

export default Navbar
