import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Planilla = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Planilla